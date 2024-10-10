'use client'
import React, { useState } from 'react'
import InputField from '../input-fields/InputField';
import { contactFormData } from '@/api-data/api';

interface ContactFormProps {
    buttonText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ buttonText = 'Send' }) => {
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

    return (
        <div className='w-full h-full flex mt-8'>
            <form onSubmit={handleSubmit} className='w-full mx-auto flex flex-col gap-6'>
                <div className='flex md:flex-row flex-col gap-4'>
                    <InputField
                        type='text'
                        name='name'
                        label='Name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-1/3 md:w-full h-12 bg-black px-4 rounded-lg outline-0 text-white'
                        error={formErrors.name}
                    />
                    <InputField
                        type='email'
                        name='business_mail'
                        label='Business Email'
                        placeholder='Enter your business email'
                        value={formData.business_mail}
                        onChange={handleChange}
                        className='w-1/3 md:w-full h-12 bg-black px-4 rounded-lg outline-0 text-white'
                        error={formErrors.business_mail}
                    />
                    <InputField
                        type='text'
                        name='company'
                        label='Company'
                        placeholder='Enter your company name'
                        value={formData.company}
                        onChange={handleChange}
                        className='w-1/3 md:w-full h-12 bg-black px-4 rounded-lg outline-0 text-white'
                    />
                </div>
                <div className='flex md:flex-row flex-col gap-4'>
                    <InputField
                        type='text'
                        name='location'
                        label='Location'
                        placeholder='Enter your location'
                        value={formData.location}
                        onChange={handleChange}
                        className='w-1/2 md:w-full bg-black h-12 px-4 rounded-lg outline-0 text-white'
                    />
                    <InputField
                        type='number'
                        name='phone_number'
                        label='Phone Number'
                        placeholder='Enter your phone number'
                        value={formData.phone_number}
                        onChange={handleChange}
                        className='w-1/2 md:w-full bg-black h-12 px-4 rounded-lg outline-0 text-white'
                        error={formErrors.phone_number}
                    />
                </div>
                <InputField
                    type='textarea'
                    name='message'
                    label='Message'
                    placeholder='Enter your message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full h-32 bg-black px-4 rounded-lg outline-0 text-white'
                />
                {submitError && <p className='text-red-500 text-center'>{submitError}</p>}
                <div className='w-full flex justify-center'>
                    <button
                        type='submit'
                        className='md:w-48 w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center bg-blue-500 hover:bg-blue-800 mt-4 text-white'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : buttonText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;