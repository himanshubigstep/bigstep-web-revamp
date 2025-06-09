'use client'
import React, { useState } from 'react'
import InputField from '../input-fields/InputField';
import { contactFormData } from '@/api-data/api';

interface ContactFormProps {
    buttonText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ buttonText = 'Schedule a Meeting' }) => {
    const [formData, setFormData] = useState({
        name: '',
        business_mail: '',
        company: '',
        location: '',
        phone_number: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        business_mail: '',
        phone_number: '',
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = { name: '', business_mail: '', phone_number: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.business_mail.trim()) {
            errors.business_mail = 'business_mail is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.business_mail)) {
            errors.business_mail = 'business_mail is invalid';
            isValid = false;
        }

        if (!formData.phone_number.trim()) {
            errors.phone_number = 'phone_number number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone_number)) {
            errors.phone_number = 'Phone number must be exactly 10 digits';
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
                    message: ''
                });
            } else {
                setSubmitError('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);

            if (error instanceof Error) {
                if (error.message === 'This attribute must be unique') {
                    setSubmitError('Email should be unique');
                } else {
                    setSubmitError('An error occurred. Please try again.');
                }
            } else {
                setSubmitError('An unknown error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
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

export default ContactForm;