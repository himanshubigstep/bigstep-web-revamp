'use client'
import React, { useState } from 'react'
import Button from '../button/Button'

interface CarouselItem {
    id: number;
    heading: string;
    description: string;
    buttonTitle: string;
    buttonClick: string;
}

const SectionInnerCarousel = ({ carouselProductEngineerData }: { carouselProductEngineerData: CarouselItem[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='w-full h-full bg-white dark:bg-black md:py-16 py-8'>
            <div className='w-full md:h-[28rem] h-full max-w-[1440px] mx-auto flex md:flex-row flex-col justify-center items-center text-center md:rounded-3xl'>
                <div className='md:w-[40%] w-full md:h-full md:py-0 py-8 px-4 flex justify-center items-center bg-blue-500 md:rounded-tl-3xl md:rounded-bl-3xl'>
                    <div className='w-full h-full flex flex-col gap-8 justify-center md:py-16 md:px-8'>
                        {carouselProductEngineerData.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <h2
                                    className='text-lg font-medium text-white text-left flex gap-4 cursor-pointer'
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span>{index + 1}.</span>
                                    {item.heading}
                                </h2>
                                <hr className='w-full h-[1px] border-none bg-white opacity-20' />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='md:w-[60%] w-full md:h-full md:py-0 py-8 px-4 flex justify-center items-center bg-black md:rounded-tr-3xl md:rounded-br-3xl'>
                    <div className='w-full h-full flex flex-col gap-4 justify-center md:py-16 md:px-8'>
                        <h2 className='md:w-[70%] text-3xl font-medium text-white text-left flex gap-4'>{carouselProductEngineerData[activeIndex].heading}</h2>
                        <p className='md:w-[70%] text-lg font-normal text-white text-left'>{carouselProductEngineerData[activeIndex].description}</p>
                        <Button
                            onClick={() => window.open(carouselProductEngineerData[activeIndex].buttonClick, '_blank')}
                            text={carouselProductEngineerData[activeIndex].buttonTitle}
                            className='w-44 py-4 md:mt-0 mt-4 md:rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInnerCarousel