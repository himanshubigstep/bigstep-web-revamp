'use client'
import React, { useState } from 'react'

const StarDom = ({
    heading,
    description,
    backgroundImage,
    firstRowClass,
    secondRowClass,
    firstRowData,
    secondRowData,
}: {
    heading: string
    description: string
    backgroundImage: string
    firstRowClass: string
    secondRowClass: string
    firstRowData: any
    secondRowData: any
}) => {
    
    const combinedData = [...firstRowData, ...secondRowData]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % combinedData.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + combinedData.length) % combinedData.length)
    }

    return (
        <div className="relative w-full h-full lg:py-16 py-8">
            <div className="relative w-full h-full lg:py-16 py-8">
                
                <div className="absolute top-0 bottom-0 w-full flex justify-center items-center text-center">
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${backgroundImage}`}
                        alt="background"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                
                <div className="relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center lg:px-0 px-4 mb-8">
                    <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center text-white mb-4">{heading}</h2>
                    <p className="lg:text-lg md:text-md sm:text-sm text-xs font-normal text-white">{description}</p>
                </div>
                
                <div className="w-full max-w-[1440px] mx-auto lg:flex md:flex hidden flex-wrap lg:justify-center rounded-3xl px-4">
                    <div className={firstRowClass}>
                        {firstRowData.map((item: any, index: number) => (
                            <div
                                key={item.id}
                                className="relative flex justify-center items-center rounded-xl"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.formats?.large?.url}`}
                                    alt={item?.heading}
                                    className="object-contain w-full h-full rounded-xl"
                                />
                                <div className="rounded-bl-xl rounded-br-xl absolute bottom-0 w-full flex bg-black opacity-80 justify-start items-center px-4 h-24">
                                    <div className="w-[2px] h-12 bg-purple-500 mr-4" />
                                    <div className="w-auto h-full flex flex-col justify-center items-start">
                                        <h3 className="lg:text-md md:text-sm sm:text-xs text-xs font-semibold text-white text-left">{item?.heading}</h3>
                                        <p className="lg:text-sm md:text-xs sm:text-xs text-xs font-normal text-white text-left">{item?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full max-w-[1440px] mx-auto lg:flex md:flex hidden flex-wrap lg:justify-center rounded-3xl mt-12 px-4">
                    <div className={secondRowClass}>
                        {secondRowData.map((item: any, index: number) => (
                            <div
                                key={item.id}
                                className="relative flex justify-center items-center rounded-xl"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.formats?.large?.url}`}
                                    alt={item?.heading}
                                    className="object-contain w-full h-full rounded-xl"
                                />
                                <div className="rounded-bl-xl rounded-br-xl absolute bottom-0 w-full flex bg-black opacity-80 justify-start items-center px-4 h-24">
                                    <div className="w-[2px] h-12 bg-purple-500 mr-4" />
                                    <div className="w-auto h-full flex flex-col justify-center items-start">
                                        <h3 className="lg:text-md md:text-sm sm:text-xs text-xs font-semibold text-white text-left">{item?.heading}</h3>
                                        <p className="lg:text-sm md:text-xs sm:text-xs text-xs font-normal text-white text-left">{item?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full max-w-[90%] mx-auto lg:hidden md:hidden flex flex-wrap lg:justify-center rounded-3xl mt-12 relative">
                    <div className="relative w-full h-full">
                        {combinedData.length > 0 && (
                            <>
                                <div className="w-full h-full rounded-3xl flex justify-center items-center">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${combinedData[currentIndex]?.images?.data?.attributes?.formats?.large?.url}`}
                                        alt={combinedData[currentIndex]?.heading}
                                        className="object-contain w-full h-full rounded-xl"
                                    />
                                </div>
                                <div className="display-hover lg:flex justify-center absolute p-4 flex-col bg-black bottom-0 left-0 right-0">
                                    <h3 className="lg:text-xl md:text-lg sm:text-md text-sm font-medium text-white">{combinedData[currentIndex]?.heading}</h3>
                                    <p className="lg:text-md md:text-sm sm:text-xs text-xs font-normal text-white">{combinedData[currentIndex]?.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='flex justify-between w-full mt-4'>
                        <button onClick={handlePrev} className='flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button onClick={handleNext} className='flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StarDom
