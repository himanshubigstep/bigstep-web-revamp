import React from 'react'
import ContactForm from './ContactForm'

interface ContactUsData {
    heading: string;
    description: string;
    background_image?: {
        data?: {
            attributes?: {
                formats?: {
                    large?: {
                        url: string;
                    }
                }
            }
        }
    };
}

interface ContactUsProps {
    buttonText?: string;
    contactUsData: ContactUsData[];
}

const ContactUs: React.FC<ContactUsProps> = ({ buttonText = 'Send', contactUsData }) => {
    const hasData = contactUsData && contactUsData.length > 0;
    const { heading, description, background_image } = hasData ? contactUsData[0] : { heading: '', description: '', background_image: undefined };
    const bgImageUrl = background_image?.data?.attributes?.formats?.large?.url;
    
    return (
        <div className='relative w-full h-full rounded-3xl max-w-[1440px] md:mb-16 mb-8 md:py-16 py-8 mx-auto'>
            {bgImageUrl && (
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImageUrl}`}
                    alt='Background Image'
                    className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-3xl'
                />
            )}
            <div className='relative w-full flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-medium text-center mb-4 text-white'>{heading || 'Get in Touch'}</h2>
                <p className='text-lg font-normal text-white'>{description || 'Ready to connect? Fill out the form below.'}</p>
            </div>
            <div className='relative w-full md:px-32 px-4 h-full mx-auto'>
                <ContactForm buttonText={buttonText} />
            </div>
        </div>
    )
}

export default ContactUs
