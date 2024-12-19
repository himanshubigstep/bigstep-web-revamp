'use client'
import React, { useEffect, useState } from 'react';
import InputField from '../input-fields/InputField';
import { subscriberFormData } from '@/api-data/api';
import LoaderSpinner from '../loader-spinner/LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LatestInfo {
    heading?: string;
    background_image?: {
        data?: {
            attributes?: {
                url?: string;
                formats?: {
                    large?: {
                        url: string;
                    }
                }
            }
        }
    }
    button_text?: string
}

interface SubscribeFormProps {
    latest_info?: LatestInfo;
    classNameOptional?: boolean;
    formClass?: boolean;
    isBanner?: boolean
}

const NewsLetter: React.FC<SubscribeFormProps> = ({ latest_info, classNameOptional, formClass, isBanner }) => {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: ''
    });
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
        const errors = { name: '', email: '' };
        let isValid = true;

        if (!inputValue.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!inputValue.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else {
            // Regex to validate email format
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(inputValue.email)) {
                errors.email = 'Email is invalid';
                isValid = false;
            } else {
                // Additional check for multiple domain extensions
                const domainPart = inputValue.email.split('@')[1];
                const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (domainPart.split('.').length > 2 || !domainRegex.test(domainPart)) {
                    errors.email = 'Invalid email format. Multiple domain extensions are not allowed.';
                    isValid = false;
                }
            }
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
                setInputValue({ name: '', email: '' });
                toast.success('Form has been submitted successfully!', {
                    autoClose: 5000,
                });
            } else {
                const errorResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/subscribers`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ data: inputValue }),
                    }
                ).then(res => res.json());
    
                if (errorResponse?.error?.details?.errors) {
                    errorResponse.error.details.errors.forEach((error: { path: any[]; message: string; }) => {
                        const path = error?.path?.join(', ') || 'Unknown Field';
                        const message = error?.message || 'An error occurred';
                        toast.error(`${path}: ${message}`, {
                            autoClose: 5000,
                        });
                    });
                } else {
                    toast.error(`${errorResponse?.error?.message} || 'Failed to submit the form. Please try again.'`, {
                        autoClose: 5000,
                    });
                }
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

    useEffect(() => {
        return () => {
            toast.dismiss();
        };
    }, []);

    return (
        <div className={`${classNameOptional ? 'max-w-[1440px] mx-auto w-full h-full lg:rounded-3xl lg:py-0 py-0 px-4' : 'px-4 max-w-[1440px] mx-auto w-full h-full lg:rounded-3xl lg:py-16 py-8'} ${isBanner === false ? 'bg-black' : ''} ${formClass && 'lg:mt-16 mt-8'}`}>
            <div className={`${!formClass ? 'relative w-full h-full lg:rounded-3xl lg:py-24 py-8 rounded-3xl' : 'relative w-full h-full lg:rounded-3xl lg:py-12 py-8 rounded-3xl' }`}>
                {isBanner !== false &&
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${latest_info?.background_image?.data?.attributes?.url}`}
                        alt='Background Icon'
                        className='absolute 0 left-0 right-0 bottom-0 lg:object-fill object-cover w-full h-full rounded-3xl'
                    />
                }
                <div className={`${isBanner === false ? 'w-[90%]' : 'w-full'} relative max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center`}>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-white text-center mb-4'>{latest_info?.heading}</h2>
                </div>
                <form onSubmit={handelSubscription} className={formClass ? 'lg:w-[90%] w-[90%] mx-auto h-full relative flex flex-col items-center justify-between lg:gap-8 pt-8' : 'lg:w-[70%] w-[90%] mx-auto h-full relative flex lg:flex-row flex-col items-start justify-between lg:gap-8 pt-8'}>
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
                        className={`${formClass ? 'lg:w-full w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center bg-blue-500 hover:bg-blue-800 mt-4 text-white' : 'lg:w-48 w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center bg-blue-500 hover:bg-blue-800 mt-8 text-white'} lg:text-lg md:text-lg`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <LoaderSpinner /> : latest_info?.button_text}
                    </button>
                    {submitError && <p className='text-red-500 text-left absolute left-0 top-32'>{submitError}</p>}
                </form>
            </div>
            {/* <ToastContainer position="bottom-right" autoClose={5000} /> */}
        </div>
    );
}

export default NewsLetter;
