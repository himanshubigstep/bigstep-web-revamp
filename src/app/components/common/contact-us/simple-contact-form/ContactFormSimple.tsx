'use client'
import React, { useEffect, useState } from 'react'
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
            // Regex for general email validation
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.business_mail)) {
                errors.business_mail = 'Business Mail is Invalid';
                isValid = false;
            } else {
                // Additional check for multiple domain extensions after @
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
        <div className='w-full h-full flex'>
            <form onSubmit={handleSubmit} className='w-full mx-auto flex flex-col gap-6'>
                <div className='flex lg:flex-row md:flex-row items-start flex-col gap-4'>
                    <InputField
                        newFormLabel={true}
                        type='text'
                        name='name'
                        label='Name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full h-12 px-4 rounded-lg outline-0 bg-white dark:bg-black'
                        error={formErrors.name}
                    />
                    <InputField
                        newFormLabel={true}
                        type='email'
                        name='business_mail'
                        label='Business Email'
                        placeholder='Enter your business email'
                        value={formData.business_mail}
                        onChange={handleChange}
                        className='w-full h-12 px-4 rounded-lg outline-0 bg-white dark:bg-black'
                        error={formErrors.business_mail}
                    />
                    <InputField
                        newFormLabel={true}
                        type='text'
                        name='company'
                        label='Company'
                        placeholder='Enter your company name'
                        value={formData.company}
                        onChange={handleChange}
                        className='w-full h-12 px-4 rounded-lg outline-0 bg-white dark:bg-black'
                    />
                </div>
                <div className='flex lg:flex-row flex-col gap-4'>
                    <InputField
                        newFormLabel={true}
                        type='text'
                        name='location'
                        label='Location'
                        placeholder='Enter your location'
                        value={formData.location}
                        onChange={handleChange}
                        className='w-full h-12 px-4 rounded-lg outline-0 bg-white dark:bg-black'
                    />
                    <div className="w-full flex flex-col phone-number-section">
                        <label htmlFor="phone_number" className="block font-semibold mb-2">Phone Number</label>
                        <PhoneInput
                            international
                            defaultCountry="US"
                            value={formData.phone_number}
                            onChange={(value) => setFormData({ ...formData, phone_number: value })}
                            className="w-full h-12 rounded-lg border border-gray-300 outline-0 input-field-phone relative bg-white dark:bg-black"
                            error={formErrors.phone_number}
                        />
                        {formErrors.phone_number && (
                            <p className="text-red-500">{formErrors.phone_number}</p>
                        )}
                    </div>
                </div>
                <InputField
                    newFormLabel={true}
                    type='textarea'
                    name='query_description'
                    label='Message'
                    placeholder='Enter your message'
                    value={formData.query_description}
                    onChange={handleChange}
                    className='w-full h-32 px-4 rounded-lg outline-0 bg-white dark:bg-black'
                    error={formErrors.query_description}
                />
                {submitError && <p className='text-red-500 text-center'>{submitError}</p>}
                <div className='flex'>
                    <button
                        type='submit'
                        className='md:w-48 w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center bg-blue-500 hover:bg-blue-800 text-white lg:text-lg md:text-lg'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <LoaderSpinner /> : buttonText}
                    </button>
                </div>
            </form>
            <ToastContainer position='bottom-right' autoClose={5000} />
        </div>
    );
};

export default ContactFormSimple