'use client'
import React, { useState } from 'react'
import InputField from '../../input-fields/InputField';
import { contactFormData } from '@/api-data/api';
import LoaderSpinner from '../../loader-spinner/LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ContactFormProps {
    buttonText?: string;
}

const ContactFormSimple: React.FC<ContactFormProps> = ({ buttonText = 'Send' }) => {
    const [formData, setFormData] = useState({
        name: '',
        business_mail: '',
        company: '',
        location: '',
        phone_number: '' as string | undefined,
        query_description: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        business_mail: '',
        phone_number: '',
        query_description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = { name: '', business_mail: '', phone_number: '', query_description: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is Required';
            isValid = false;
        }

        if (!formData.business_mail.trim()) {
            errors.business_mail = 'Business Mail is Required';
            isValid = false;
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.business_mail)) {
                errors.business_mail = 'Business Mail is Invalid';
                isValid = false;
            } else {
                const domainPart = formData.business_mail.split('@')[1];
                if (domainPart && domainPart.split('.').length > 2) {
                    errors.business_mail = 'Invalid email format. Multiple domain extensions are not allowed.';
                    isValid = false;
                }
            }
        }

        if (!formData.phone_number) {
            errors.phone_number = 'Phone Number is Required';
            isValid = false;
        } else if (formData.phone_number && !/^(\+?[\d]{1,4})?[\d]{7,15}$/.test(formData.phone_number)) {
            errors.phone_number = 'Phone Number is Invalid';
            isValid = false;
        }

        if (!formData.query_description.trim()) {
            errors.query_description = 'Message is Required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await contactFormData(formData);

            if (response) {
                console.log('Form submitted successfully:', response);
                setFormData({
                    name: '',
                    business_mail: '',
                    company: '',
                    location: '',
                    phone_number: '',
                    query_description: ''
                });

                toast.success('Form has been submitted successfully!');
            } else {
                const errorResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/inquiries`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ data: formData }),
                    }
                ).then(res => res.json());

                if (errorResponse?.error?.details?.errors) {
                    errorResponse.error.details.errors.forEach((error: { path: any[]; message: string; }) => {
                        const path = error?.path?.join(', ') || 'Unknown Field';
                        const message = error?.message || 'An error occurred';
                        toast.error(`${path}: ${message}`);
                    });
                } else {
                    toast.error(errorResponse?.error?.message || 'Failed to submit the form. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error submitting the form:', error);

            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('An unknown error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-center mt-8'>
        {/* Calendly iframe always visible */}
        <iframe
            src="https://calendly.com/bigsteptech/15min"
            className="w-full h-[700px] rounded-2xl shadow-lg max-w-6xl"
            frameBorder="0"
        />
    </div>
    );
};

export default ContactFormSimple