import React from 'react'
import ContactForm from './ContactForm'

const ContactUs = ({ contactUsData }: { contactUsData: any }) => {
    
    const bgImageUrl = contactUsData?.background_image?.data?.attributes?.url;
    
    return (
        <div className='relative w-full h-full rounded-3xl max-w-[1440px] mx-auto px-4'>
                <div className='relative w-full h-full rounded-3xl md:mb-16 mb-8 md:py-16 py-8'>
                    {bgImageUrl && (
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImageUrl}`}
                            alt='Background Image'
                            className='absolute top-0 left-0 right-0 bottom-0 md:object-fill object-cover w-full h-full rounded-3xl'
                        />
                    )}
                <div className='relative w-full flex flex-col justify-center items-center text-center px-4 mb-16'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 text-white'>{contactUsData?.heading}</h2>
                    <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-white'>{contactUsData?.description}</p>
                </div>
                <div className='relative w-full lg:px-32 px-4 h-full mx-auto'>
                    <ContactForm buttonText={contactUsData?.button_text} />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
