import React from 'react'
import './ClientCarousel.css'

const ClientCarousel = ({ clients, heading, description }: { clients: string[], heading: string, description: string }) => {
    const row1 = clients.slice(0, 12);
    const row2 = clients.slice(12);

    return (
        <div className='relative w-full h-full md:py-16 py-8 bg-white dark:bg-black'>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-bold text-center mb-4'>{heading}</h2>
                <p className='text-lg'>{description}</p>
            </div>
            <div className='w-full md:pt-8 flex flex-col gap-8'>
                <div className='client-logos-row md:max-w-[1440px] max-w-full mx-auto'>
                    <div className='scrolling-wrapper'>
                        {row1.map((client, index) => (
                            <div className='md:w-60 w-32 md:py-2 md:px-4 p-2 client-logos' key={index}>
                                <img
                                    src={client}
                                    alt={`client ${index + 1}`}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-200' />
                <div className='client-logos-row md:max-w-[1440px] max-w-full w-100% mx-auto'>
                    <div className='scrolling-wrapper reverse'>
                        {row2.map((client, index) => (
                            <div className='md:w-60 w-32 md:py-2 md:px-4 p-2 client-logos' key={index}>
                                <img
                                    src={client}
                                    alt={`client ${index + 13}`}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCarousel