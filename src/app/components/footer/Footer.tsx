'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Address from '../common/address/Address'
import FooterTags from './footer-tags/FooterTags'
import Image from 'next/image'
import FooterNavigation from './footer-nav/FooterNavigation'
import FooterBottom from './footer-bottom/FooterBottom'
import { fetchFooterData, subscriberFormData } from '@/api-data/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../common/input-fields/InputField'
import LoaderSpinner from '../common/loader-spinner/LoadingSpinner'

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);
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

  useEffect(() => {
    const fetchFooterDataResponse = async () => {
      try {
        const response = await fetchFooterData();
        setFooterData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFooterDataResponse();
  }, []);

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

  if (!footerData) {
    return <LoaderSpinner />;  // Avoid returning `null`, show a loading spinner instead
  }

  const { attributes } = footerData;
  const logoSrc = attributes?.logo?.data[0]?.attributes?.url || null;
  const logoWidth = 240;
  const logoHeight = 100;

  return (
    <Fragment>
      <div className='poppins relative w-full bg-[#242424] dark:border-t-gray-800 dark:border-t-2 lg:p-16 md:p-16 p-4'>
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${footerData?.attributes?.background_image?.data?.attributes?.url}`}
          alt='Footer Background'
          className='absolute left-0 right-0 top-0 bottom-0 w-full h-full object-contain bg-repeat-x opacity-80'
        />
        <div className='relative mb-8 w-full mx-auto border-b-[1px] pb-8'>
          <form onSubmit={handelSubscription} className='grid lg:grid-cols-3 md:grid-cols-3 gap-4 lg:max-w-[75%] md:max-w-[75%] mx-auto'>
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
              className={`'w-full h-12 px-4 rounded-lg outline-0 flex justify-center items-center text-white bg-blue-500 hover:bg-blue-800 lg:mt-8 md:mt-8 lg:text-lg md:text-lg'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoaderSpinner /> : 'Subscribe'}
            </button>
            {submitError && <p className='text-red-500 text-left absolute left-0 top-32'>{submitError}</p>}
          </form>
        </div>
        <div className='relative w-full h-full max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between'>
          <div className='h-full lg:w-1/4 w-full flex flex-col'>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logoSrc}`}
              alt='Footer Logo'
              width={logoWidth}
              height={logoHeight}
              className='lg:mb-12 md:mb-12 mb-8'
            />
            <Address attributes={attributes} />
            <FooterTags attributes={attributes} />
          </div>
          <FooterNavigation attributes={attributes} />
        </div>
      </div>
      <FooterBottom attributes={attributes} />
    </Fragment>
  );
}

export default Footer;
