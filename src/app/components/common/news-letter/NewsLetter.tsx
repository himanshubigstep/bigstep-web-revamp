'use client'
import React, { useState } from 'react'
import InputField from '../input-fields/InputField'
import { subscriberFormData } from '@/api-data/api';

interface SubscribeFormProps {
    buttonText?: string;
    latest_info?: any;
}

const NewsLetter: React.FC<SubscribeFormProps> = ({ buttonText = 'Subscribe', latest_info }) => {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
    });
    const handleInputChange = (field: 'name' | 'email') => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    };
    const validateForm = () => {
        const errors = { name: '', email: '', phone_number: '' };
        let isValid = true;

        if (!inputValue.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!inputValue.email.trim()) {
            errors.email = 'email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
            errors.email = 'email is invalid';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handelSubscription = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await subscriberFormData(inputValue);
            if (response) {
                console.log('Form submitted successfully:', response);
                setInputValue({
                    name: '',
                    email: '',
                });
            } else {
                setSubmitError('Failed to submit the form. Please try again.');
            }
        } catch (error: any) {
            console.error('Error submitting the form:', error);

            if (error.message === 'This attribute must be unique') {
                setSubmitError('Email should be unique');
            } else {
                setSubmitError('An error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-full h-full rounded-3xl md:py-16 py-8'>
            <div className='relative w-full h-full max-w-[1440px] mx-auto rounded-3xl md:py-24 py-8'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${latest_info?.background_image?.data?.attributes?.formats?.large?.url}`}
                    alt='Background Icon'
                    className='absolute 0 left-0 right-0 bottom-0 md:object-contain object-cover w-full h-full'
                />

                <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                    <h2 className='text-3xl font-medium text-white text-center mb-4'>{latest_info?.heading}</h2>
                </div>
                <form onSubmit={handelSubscription} className='md:w-[70%] w-[90%] mx-auto h-full relative flex md:flex-row flex-col items-center justify-between md:gap-8 py-8'>
                    <InputField
                        type='text'
                        label='Name'
                        name='name'
                        value={inputValue.name}
                        onChange={handleInputChange('name')}
                        placeholder='Enter your name'
                        className='bg-transparent text-white w-full h-12 px-4 rounded-lg outline-0'
                        error={formErrors.name}
                    />
                    <InputField
                        type='email'
                        label='Email'
                        name='email'
                        value={inputValue.email}
                        onChange={handleInputChange('email')}
                        placeholder='Enter your email'
                        className='bg-transparent text-white w-full h-12 px-4 rounded-lg outline-0'
                        error={formErrors.email}
                    />
                    <button
                        type='submit'
                        className='md:w-48 w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center bg-blue-500 hover:bg-blue-800 mt-4 text-white'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : buttonText}
                    </button>
                    {submitError && <p className='text-red-500 text-left absolute left-0 bottom-0'>{submitError}</p>}
                </form>
            </div>
        </div>
    )
}

export default NewsLetter