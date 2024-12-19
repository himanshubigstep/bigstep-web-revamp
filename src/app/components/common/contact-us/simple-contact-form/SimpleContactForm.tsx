import React from 'react'
import ContactForm from '../ContactForm';
import ContactFormSimple from './ContactFormSimple';

const SimpleContactForm = ({ contactUsData }: { contactUsData: any }) => {

    const bgImageUrl = contactUsData?.background_image?.data?.attributes?.url;

    return (
        <div className='relative w-full h-full bg-blue-50 dark:bg-black'>
            <div className='w-full max-w-[1440px] mx-auto h-full flex lg:flex-row md:flex-row flex-col justify-between items-start rounded-lg lg:py-16 lg:px-8 px-4 py-8 lg:gap-16 gap-8'>
                {/* {bgImageUrl && (
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImageUrl}`}
                            alt='Background Image'
                            className='absolute top-0 left-0 right-0 bottom-0 md:object-fill object-cover w-full h-full rounded-3xl'
                        />
                    )} */}
                <div className='relative lg:w-[40%] md:w-[50%] w-full flex flex-col justify-center'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-blue-500 text-lg font-semibold mb-4'>{contactUsData?.heading}</h2>
                    <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal'>{contactUsData?.description}</p>
                </div>
                <div className='relative lg:w-[60%] md:w-[50%] w-full h-full mx-auto'>
                    {/* <ContactForm buttonText={contactUsData?.button_text} /> */}
                    <ContactFormSimple buttonText={contactUsData?.button_text} />
                </div>
            </div>
        </div>
    )
}

export default SimpleContactForm