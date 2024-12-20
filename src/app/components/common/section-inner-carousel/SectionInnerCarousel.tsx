'use client'
import React, { useState } from 'react'
import Button from '../button/Button'

const SectionInnerCarousel = ({ carouselProductEngineerData }: { carouselProductEngineerData: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const hasData = Array.isArray(carouselProductEngineerData) && carouselProductEngineerData.length > 0;

    return (
        <div className='w-full h-full bg-white dark:bg-black md:py-16 py-8'>
            <div className='w-full md:h-[30rem] h-full max-w-[1440px] mx-auto flex md:flex-row flex-col justify-center items-center text-center md:rounded-3xl'>
                <div className='md:w-[40%] w-full md:h-full md:py-0 py-8 md:px-16 px-8 flex flex-col justify-center items-center bg-blue-500 md:rounded-tl-3xl md:rounded-bl-3xl'>
                    <div className='w-full h-full flex flex-col gap-8 justify-center'>
                        {hasData && carouselProductEngineerData.map((item: { id: React.Key | null | undefined; heading: string }, index: number) => (
                            <React.Fragment key={item.id}>
                                <h2
                                    className={`text-lg text-white text-left flex gap-4 cursor-pointer ${selectedIndex === index ? 'font-medium' : 'font-normal'}`}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <span className={`${selectedIndex === index ? 'font-medium' : 'font-normal'}`}>{index + 1}.</span>
                                    {item.heading}
                                </h2>
                                {index < carouselProductEngineerData.length - 1 && (
                                    <hr className='w-full h-[1px] border-none bg-white opacity-20' />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='md:w-[60%] w-full md:h-full md:py-0 py-8 md:px-24 px-8 flex justify-center items-center bg-black md:rounded-tr-3xl md:rounded-br-3xl'>
                    <div className='w-full h-full flex flex-col gap-4 justify-center'>
                        {hasData && (
                            <div className='w-full h-full flex flex-col justify-center gap-4'>
                                <h2 className='text-3xl font-semibold text-white text-left flex gap-4'>
                                    {carouselProductEngineerData[selectedIndex]?.heading}
                                </h2>
                                <p className='text-lg font-normal text-white text-left'>
                                    {carouselProductEngineerData[selectedIndex]?.description}
                                </p>
                                <Button
                                    onClick={() => {
                                        const selectedItem = carouselProductEngineerData[selectedIndex];
                                        if (selectedItem && selectedItem.technologyText[0]) {
                                            window.location.href = selectedItem.technologyText[0].technologyLinks;
                                        }
                                    }}
                                    text={carouselProductEngineerData[selectedIndex]?.buttonText}
                                    className='w-44 py-4 md:mt-0 mt-4 md:rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInnerCarousel;
