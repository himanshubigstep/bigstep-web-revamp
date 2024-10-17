import React from 'react'
import ContactForm from './ContactForm'

const ContactUs = ({ contactUsData }: { contactUsData: any }) => {
    console.log(contactUsData)
    
    const bgImageUrl = contactUsData?.background_image?.data?.attributes?.formats?.large?.url;
    
    return (
        <div className='relative w-full h-full rounded-3xl max-w-[1440px] md:mb-16 mb-8 md:py-16 py-8 mx-auto'>
            {bgImageUrl && (
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImageUrl}`}
                    alt='Background Image'
                    className='absolute top-0 left-0 right-0 bottom-0 md:object-fill object-cover w-full h-full rounded-3xl'
                />
            )}
            <div className='relative w-full flex flex-col justify-center items-center text-center md:px-0 px-4'>
                <h2 className='text-3xl font-semibold text-center mb-4 text-white'>{contactUsData?.heading}</h2>
                <p className='text-lg font-normal text-white'>{contactUsData?.description}</p>
            </div>
            <div className='relative w-full md:px-32 px-4 h-full mx-auto'>
                <ContactForm buttonText={contactUsData?.button_text} />
            </div>
        </div>
    )
}

export default ContactUs
