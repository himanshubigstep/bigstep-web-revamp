'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BigstepImage from '../../../assets/bigstep_image.jpeg'
import { fetchSuccessStoriesData } from '@/api-data/api'
import './SuccessStoriesBlock.css'

interface SuccessStoriesData {
    id: number
    src: string
    title: string
    description: string
    subtitle: string
}

const SuccessStoriesBlocks = ({ sucessStoriesData }: { sucessStoriesData: any }) => {
    const [carouselImagesArray, setCarouselImagesArray] = useState<SuccessStoriesData[]>([]);
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
                        src: process.env.NEXT_PUBLIC_IMAGE_URL + story.attributes.image.data.attributes.formats.large.url
                    };
                });
                setCarouselImagesArray(successStories);

            } catch (error) {
                console.log(error);
            }
        };

        fetchHomePageDataResponse();
    }, [])

    return (
        <div className='relative w-full mx-auto md:py-16 py-8'>
            <div className='absolute top-0 bottom-0 w-full flex justify-center items-center text-center'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${sucessStoriesData?.background_image?.data?.attributes?.formats?.large?.url}`}
                    alt='image'
                    className='w-full h-full'
                />
            </div>
            <div className='relative w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
                <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8'>
                    <h2 className='text-3xl font-medium text-center mb-4 text-white'>{sucessStoriesData?.heading}</h2>
                    <p className='text-lg font-normal text-white'>{sucessStoriesData?.description}</p>
                </div>
                <div className='w-full flex flex-wrap md:justify-center rounded-3xl'>
                    {carouselImagesArray.slice(0, 2).map((imageData, index) => (
                        <div className='w-1/2 relative p-2 on-hover' key={imageData.id}>
                            <div className='w-full rounded-3xl flex justify-center items-center'>
                                <img
                                    src={imageData.src}
                                    alt={imageData.title}
                                    className='w-full h-auto object-contain rounded-3xl'
                                />
                            </div>
                            <div className='display-hover absolute md:p-6 p-4 bottom-2 left-2 right-2 flex-col bg-black opacity-60 hidden rounded-3xl'>
                                <h3 className='text-2xl font-medium text-white'>{imageData?.title}</h3>
                                <p className='text-lg font-normal text-white'>{imageData?.description}</p>
                                {/* <p className='text-md font-normal text-white'>hoji aap</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex flex-wrap md:justify-center rounded-3xl'>
                    {carouselImagesArray.slice(2).map((imageData, index) => (
                        <div className='w-1/3 relative p-2 on-hover' key={imageData.id}>
                            <div className='w-full rounded-3xl flex justify-center items-center'>
                                <img
                                    src={imageData.src}
                                    alt={imageData.title}
                                    className='w-full h-auto object-contain rounded-3xl'
                                />
                            </div>
                            <div className='display-hover absolute md:p-6 p-4 bottom-2 left-2 right-2 flex-col bg-black opacity-60 hidden rounded-3xl'>
                                <h3 className='text-2xl font-medium text-white'>{imageData?.title}</h3>
                                <p className='text-lg font-normal text-white'>{imageData?.description}</p>
                                {/* <p className='text-md font-normal text-white'>hoji aap</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuccessStoriesBlocks