'use client'
import React, { useState } from 'react'
import Button from '../button/Button'

const SectionInnerCarousel = ({ carouselProductEngineerData }: { carouselProductEngineerData: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const hasData = Array.isArray(carouselProductEngineerData) && carouselProductEngineerData.length > 0;

    const getImageUrl = (): string | undefined => {
        const selectedItem = carouselProductEngineerData[selectedIndex];
        // Check if backgroundimage exists and has valid data
        const imageUrl = selectedItem?.backgroundimage?.data?.[0]?.attributes?.url;
        return imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}` : undefined;
    };

    return (
        <div className='w-full h-full bg-white dark:bg-black lg:py-16 py-8'>
            <div className='w-full lg:h-[30rem] h-full max-w-[1440px] px-4 mx-auto flex lg:flex-row flex-col justify-center items-center text-center lg:rounded-3xl'>
                <div className='lg:w-[40%] w-full lg:h-full lg:py-0 py-8 lg:px-16 px-8 flex flex-col justify-center items-center bg-blue-500 lg:rounded-tl-3xl lg:rounded-bl-3xl'>
                    <div className='w-full h-full flex flex-col gap-8 justify-center'>
                        {hasData && carouselProductEngineerData.map((item: { id: React.Key | null | undefined; heading: string }, index: number) => (
                            <React.Fragment key={item.id}>
                                <h2
                                    className={`lg:text-lg md:text-md sm:text-sm text-xs text-white text-left flex gap-4 cursor-pointer ${selectedIndex === index ? 'font-medium' : 'font-normal'}`}
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
                <div className='relative lg:w-[60%] w-full lg:h-full lg:py-0 py-8 lg:px-24 px-8 flex justify-center items-center bg-black lg:rounded-tr-3xl lg:rounded-br-3xl'>
                    <div className='w-full h-full flex flex-col gap-4 justify-center'>
                        {hasData && (
                            <>
                                {getImageUrl() ? (
                                    <img
                                        alt='image'
                                        className='w-full h-full object-cover object-left-bottom absolute left-0 right-0 top-0 bottom-0 lg:rounded-tr-3xl lg:rounded-br-3xl'
                                        src={getImageUrl()}
                                    />
                                ) : (
                                    <div className='w-full h-full bg-black absolute left-0 right-0 top-0 bottom-0 lg:rounded-tr-3xl lg:rounded-br-3xl' />
                                )}
                                <div className='relative w-full h-full flex flex-col justify-center gap-4'>
                                    <h2 className='tlg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-white text-left flex gap-4'>
                                        {carouselProductEngineerData[selectedIndex]?.heading}
                                    </h2>
                                    <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-white text-left'>
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
                                        className='w-44 py-4 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInnerCarousel;
