import React from 'react'
import Carousel from './Carousel';

interface ClientProps {
    title: string;
    description: string;
    bgImage: string;
}

const Clients: React.FC<ClientProps> = ({ title, bgImage, description }) => {
    return (
        <div className='lg:py-16 py-8 relative w-full h-full'>
            <img
                src={bgImage}
                alt=''
                className='z-9 w-full h-full object-cover object-top absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center lg:px-0 px-4'>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'>{title}</h2>
                <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal'>{description}</p>
            </div>
            <Carousel />
        </div>
    )
}

export default Clients
