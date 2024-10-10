import React from 'react'
import './ClientCarousel.css'

interface Client {
    attributes: {
        image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

const ClientCarousel = ({ clients, heading, description }: { clients: Client[], heading: string, description: string }) => {
    const midpoint = Math.ceil(clients.length / 2);
    const row1 = clients.slice(0, midpoint);
    const row2 = clients.slice(midpoint);

    return (
        <div className='relative w-full h-full md:pt-16 pt-8 bg-white dark:bg-black'>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-bold text-center mb-4'>{heading}</h2>
                <p className='text-lg'>{description}</p>
            </div>
            <div className='w-full md:pt-8 flex flex-col md:gap-8 gap-0'>
                <div className='client-logos-row md:max-w-[1440px] max-w-full mx-auto'>
                    <div className='scrolling-wrapper'>
                        {row1.map((client, index) => (
                            <div className='md:w-60 md:h-60 w-24 h-24 md:py-2 md:px-4 p-2 client-logos' key={index}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${client.attributes.image.data.attributes.url}`}
                                    alt={`client ${index + 1}`}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:block hidden w-full h-[1px] bg-gray-200' />
                <div className='client-logos-row md:max-w-[1440px] max-w-full w-100% mx-auto'>
                    <div className='scrolling-wrapper reverse'>
                        {row2.map((client, index) => (
                            <div className='md:w-60 md:h-60 w-24 h-24 md:py-2 md:px-4 p-2 client-logos' key={index}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${client.attributes.image.data.attributes.url}`}
                                    alt={`client ${index + midpoint + 1}`}
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