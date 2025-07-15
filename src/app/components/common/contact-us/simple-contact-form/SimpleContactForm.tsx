import React from 'react'
import ContactForm from '../ContactForm';
import ContactFormSimple from './ContactFormSimple';

const SimpleContactForm = ({ contactUsData }: { contactUsData: any }) => {

    return (
        <div className='relative w-full h-full bg-blue-50 dark:bg-black'>
            <div className='w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center items-center lg:py-16 lg:px-8 px-4 py-8'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold mb-6 text-blue-900 dark:text-white'>
                        Get in Touch with BigStep Technologies
                    </h2>
                    <p className='lg:text-lg md:text-base text-sm max-w-4xl mx-auto text-gray-700 dark:text-gray-200'>
                        Ready to take your business to the next level? Fill out the form below to connect with our experts and discuss your project!
                    </p>
                </div>
                
                {/* Calendly Section */}
                <ContactFormSimple buttonText={contactUsData?.button_text} />
            </div>
        </div>
    )
}

export default SimpleContactForm