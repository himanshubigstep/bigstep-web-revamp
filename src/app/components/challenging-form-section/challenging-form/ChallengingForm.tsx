'use client'
import React, { useState } from 'react'
import InputField from '../../common/input-fields/InputField'
import Button from '../../common/button/Button'
import { challengesFormData } from '@/api-data/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ChallengingForm = ({challengescategories, challengesLabel, challangesFormHeading, challengesFormButtonText}: {challengescategories: any, challengesLabel: string, challangesFormHeading: string, challengesFormButtonText: string}) => {
    console.log(challengescategories)
    const [inputValue, setInputvalue] = useState({
        name: '',
        email: '',
        company: '',
        category: '',
        challenges_names: '',
    })
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        company: '',
        category: '',
        challenges_names: ''
    });

    const handleInputChange = (field: 'name' | 'email' | 'company' | 'category' | 'challenges_names') => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormErrors(prevErrors => ({
            ...prevErrors,
            [field]: ''
        }));

        setInputvalue(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    }
    
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const selectedCategory = event.target.value;
        const selectedCategoryObj = challengescategories.find(
            (category: { attributes: { category_type: string, challenges_text: string } }) => category.attributes.category_type === selectedCategory
        );

        setFormErrors(prevErrors => ({
            ...prevErrors,
            category: ''
        }));

        setInputvalue(prevState => ({
            ...prevState,
            category: selectedCategory,
            challenges_names: selectedCategoryObj ? selectedCategoryObj.attributes.challenges_text : ''
        }));
    }

    const validateForm = () => {
        const errors: any = {};
        let isValid = true;
    
        if (!inputValue.name) {
          errors.name = "Name is required.";
          isValid = false;
        }
    
        if (!inputValue.email) {
            errors.email = 'Business Mail is Required';
            isValid = false;
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(inputValue.email)) {
                errors.email = 'Business Mail is Invalid';
                isValid = false;
            } else {
                const domainPart = inputValue.email.split('@')[1];
                if (domainPart && domainPart.split('.').length > 2) {
                    errors.email = 'Invalid email format. Multiple domain extensions are not allowed.';
                    isValid = false;
                }
            }
        }
    
        if (!inputValue.company) {
          errors.company = "Company name is required.";
          isValid = false;
        }
    
        if (!inputValue.category) {
          errors.category = "Please select a category.";
          isValid = false;
        }
    
        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (validateForm()) {
          const challengesForm = {
            Name: inputValue.name,
            business_email: inputValue.email,
            Company_Name: inputValue.company,
            categories: inputValue.category,
            challenges_names: inputValue.challenges_names,
          };
    
          const response = await challengesFormData(challengesForm);
          if (response) {
            console.log("Form submitted successfully", response);
            setInputvalue({
                name: '',
                email: '',
                company: '',
                category: '',
                challenges_names: ''
            });
            
            setFormErrors({
                name: '',
                email: '',
                company: '',
                category: '',
                challenges_names: ''
            });
            toast.success("Form submitted successfully!");
          } else {
            console.log("Error submitting form");
            toast.error("Error submitting the form. Please try again!");
          }
        }
      };

    return (
        <div className='w-full h-full lg:max-w-[520px] max-w-full ml-auto mr-0 lg:py-16 md:py-16 py-4 lg:px-16 md:px-16 px-4 bg-white dark:bg-black dark:border-black shadow-lg border-[1px]'>
            <h3 className='lg:text-3xl md:text-2xl sm:text-xl text-lg leading-[125%] font-medium mb-[24px]'>{challangesFormHeading}</h3>
            <form onSubmit={handleSubmit}>
                <InputField
                    newFormLabel={true}
                    type='text'
                    label='Name'
                    name='name'
                    value={inputValue.name}
                    onChange={handleInputChange('name')}
                    placeholder='Enter your name'
                    className='bg-transparent w-full h-12 px-4 rounded-lg outline-0'
                    error={formErrors.name}
                />
                <InputField
                    newFormLabel={true}
                    type='email'
                    label='Business Email'
                    name='email'
                    value={inputValue.email}
                    onChange={handleInputChange('email')}
                    placeholder='Enter your Business Email'
                    className='bg-transparent w-full h-12 px-4 rounded-lg outline-0'
                    error={formErrors.email}
                />
                <InputField
                    newFormLabel={true}
                    type='text'
                    label='Company Name'
                    name='company'
                    value={inputValue.company}
                    onChange={handleInputChange('company')}
                    placeholder='Enter company name'
                    className='bg-transparent w-full h-12 px-4 rounded-lg outline-0'
                    error={formErrors.company}
                />
                <InputField
                    newFormLabel={true}
                    type="select"
                    name="category"
                    label={challengesLabel}
                    value={inputValue.category}
                    onChange={handleCategoryChange}
                    className='bg-transparent w-full h-12 px-4 rounded-lg outline-0'
                    options={challengescategories && challengescategories.map((category: { id: number, attributes: { challenges_text: string, category_type: string } }) => ({
                        value: category.attributes.category_type,
                        label: category.attributes.challenges_text
                    }))}
                    error={formErrors.category}
                />
                <Button
                    text={challengesFormButtonText}
                    onClick={() => console.log('hello')}
                    className='mx-auto bg-blue-500 hover:bg-blue-800 px-8 py-4 rounded-lg text-white w-full mt-2'
                />
            </form>
            <ToastContainer />
        </div>
    );
}

export default ChallengingForm;
