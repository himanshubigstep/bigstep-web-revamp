'use client'
import React, { useEffect, useState } from 'react'
import { fetchSuccessStoriesData } from '@/api-data/api'
import './SuccessStoriesBlock.css'

interface SuccessStoriesData {
    id: number
    src: string
    title: string
    description: string
    subtitle: string
    logoSrc: string
}

const SuccessStoriesBlocks = ({ sucessStoriesData }: { sucessStoriesData: any }) => {
    const [carouselImagesArray, setCarouselImagesArray] = useState<SuccessStoriesData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const fetchHomePageDataResponse = async () => {
            try {

                const successStoriesResponse = await fetchSuccessStoriesData();
                const successStories = successStoriesResponse.map((story: any) => {
                    return {
                        id: story.id,
                        title: story.attributes.title,
                        description: story.attributes.body,
                        subtitle: story.attributes.subtitle,
                        src: process.env.NEXT_PUBLIC_IMAGE_URL + story.attributes.image.data.attributes.url,
                        logoSrc: process.env.NEXT_PUBLIC_IMAGE_URL + story.attributes.logo.data.attributes.url
                    };
                });
                successStories.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
                setCarouselImagesArray(successStories);

            } catch (error) {
                console.log(error);
            }
        };

        fetchHomePageDataResponse();
    }, [])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImagesArray.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImagesArray.length) % carouselImagesArray.length);
    };

    return (
        <div className='relative w-full lg:py-16 py-8'>
            <div className='absolute top-0 bottom-0 w-full flex justify-center items-center text-center'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${sucessStoriesData?.background_image?.data?.attributes?.url}`}
                    alt='image'
                    className='w-full h-full object-cover object-top'
                />
            </div>
            <div className='relative w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center lg:px-0 px-4'>
                <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 text-white'>{sucessStoriesData?.heading}</h2>
                    <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-white'>{sucessStoriesData?.description}</p>
                </div>
                <div className='w-full max-w-[1440px] mx-auto lg:flex hidden flex-wrap lg:justify-center rounded-3xl px-4'>
                    {carouselImagesArray.slice(0, 2).map((imageData, index) => (
                        <div className='w-1/2 lg:h-96 relative p-2 on-hover' key={imageData.id}>
                            <div className='w-full h-full rounded-3xl flex justify-center items-center'>
                                <img
                                    src={imageData.src}
                                    alt={imageData.title}
                                    className='w-full h-full rounded-3xl'
                                />
                            </div>
                            <div className='display-hover flex justify-center items-center absolute lg:p-6 p-4 flex-col bg-black rounded-3xl'>
                                <img
                                    src={imageData.logoSrc}
                                    alt={imageData?.title}
                                    className='lg:w-48 md:w-42 sm:w-36 w-32 object-contain mb-4'
                                />
                                <h3 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold mb-4 text-white'>{imageData?.title}</h3>
                                <h4 className='lg:text-2xl md:text-xl sm:text-md text-sm font-medium mb-4 text-white'>{imageData?.subtitle}</h4>
                                <p className='lg:text-xl md:text-lg sm:text-md text-sm lg:line-clamp-none line-clamp-2 font-normal text-center text-white'>{imageData?.description}</p>
                                {/* <p className='text-md font-normal text-white'>hoji aap</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full max-w-[1440px] mx-auto lg:flex hidden flex-wrap lg:justify-center rounded-3xl px-4'>
                    {carouselImagesArray.slice(2).map((imageData, index) => (
                        <div className='w-1/2 lg:h-96 relative p-2 on-hover' key={imageData.id}>
                            <div className='w-full h-full rounded-3xl flex justify-center items-center'>
                                <img
                                    src={imageData.src}
                                    alt={imageData.title}
                                    className='w-full h-full rounded-3xl'
                                />
                            </div>
                            <div className='display-hover flex justify-center items-center absolute lg:p-6 p-4 flex-col bg-black rounded-3xl'>
                                <img
                                    src={imageData.logoSrc}
                                    alt={imageData?.title}
                                    className='w-48 object-contain mb-4'
                                />
                                <h3 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold mb-4 text-white'>{imageData?.title}</h3>
                                <h4 className='lg:text-2xl md:text-xl sm:text-md text-sm font-medium mb-4 text-white'>{imageData?.subtitle}</h4>
                                <p className='lg:text-xl md:text-lg sm:text-md text-sm lg:line-clamp-none line-clamp-2 font-normal text-center text-white'>{imageData?.description}</p>
                                {/* <p className='text-md font-normal text-white'>hoji aap</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full max-w-[90%] mx-auto lg:hidden flex flex-wrap lg:justify-center rounded-3xl'>
                    <div className='relative w-full h-full'>
                        {carouselImagesArray.length > 0 && (
                            <>
                                <div className='w-full h-full rounded-3xl flex justify-center items-center'>
                                    <img
                                        src={carouselImagesArray[currentIndex].src}
                                        alt={carouselImagesArray[currentIndex].title}
                                        className='w-full h-full rounded-3xl'
                                    />
                                </div>
                                <div className='display-hover lg:flex hidden justify-center absolute p-4 flex-col bg-black rounded-3xl bottom-0 left-0 right-0'>
                                    <h3 className='text-2xl font-medium text-white'>{carouselImagesArray[currentIndex].title}</h3>
                                    <p className='text-lg font-normal text-white'>{carouselImagesArray[currentIndex].description}</p>
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

export default SuccessStoriesBlocks