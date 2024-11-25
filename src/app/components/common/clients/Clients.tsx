import React from 'react'
import Carousel from './Carousel';

interface ClientProps {
    title: string;
    description: string;
    bgImage: string;
}

const Clients: React.FC<ClientProps> = ({ title, bgImage, description }) => {
    return (
        <div className='md:py-16 py-8 relative w-full h-full'>
            <img
                src={bgImage}
                alt=''
                className='dark:invert z-9 w-full h-full object-cover object-top absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4'>
                <h2 className='text-3xl font-semibold text-center mb-4'>{title}</h2>
                <p className='text-lg font-normal'>{description}</p>
            </div>
            <Carousel />
        </div>
    )
}

export default Clients
