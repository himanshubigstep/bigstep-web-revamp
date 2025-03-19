'use client'
import { fetchJoinCarousel, fetchjoinUsData } from '@/api-data/api'
import JoinUsCarousel from '@/app/components/join-us-carousel/JoinUsCarousel'
import TopHeader from '@/app/components/problem-solving/TopHeader';
import React, { useEffect, useState } from 'react'

interface JoinUsCarouselData {
    id: number;
    attributes: {
        join_us_heading: string;
        join_us_description: string;
        join_us_Image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

interface CareerMissionData {
    id: number;
    heading: string;
    description: string;
    images: {
        data: {
            attributes: {
                url: string;
            }
        }
    }
}

interface JoinUsPageProps {
    id: number;
    attributes: {
        career_mission_intro: {
            id: number;
            heading: string;
            description: string;
        }
        career_mission_data: CareerMissionData | CareerMissionData[];  // Could be an array or a single object
    }
}

const JoinUs = () => {
    const [joinUsCarousel, setJoinUsCarousel] = useState<JoinUsCarouselData[]>([]);
    const [joinUsPageData, setJoinUsPageData] = useState<JoinUsPageProps | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJoinUsCarouselData = async () => {
            try {
                const response = await fetchJoinCarousel();
                setJoinUsCarousel(response);
            } catch (error) {
                console.log(error);
                return null;
            } finally {
                setLoading(false);
            }
        }

        fetchJoinUsCarouselData();
    }, [])

    useEffect(() => {
        const fetchJoinUsPagelData = async () => {
            try {
                const response = await fetchjoinUsData();
                setJoinUsPageData(response);
            } catch (error) {
                console.log(error);
                return null;
            } finally {
                setLoading(false);
            }
        }

        fetchJoinUsPagelData();
    }, [])

    return (
        <div className='poppins w-full h-full'>
            <JoinUsCarousel data={joinUsCarousel} />
            <div className='w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center items-center lg:py-16 py-8'>
                <TopHeader headingClassName={'text-center'} headingText={joinUsPageData?.attributes?.career_mission_intro?.heading || ''} paragraphText={joinUsPageData?.attributes?.career_mission_intro?.description || ''} />
                <div className='relative w-full mx-auto'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

                        {/* Check if career_mission_data is an array or a single object */}
                        {Array.isArray(joinUsPageData?.attributes?.career_mission_data)
                            ? joinUsPageData?.attributes?.career_mission_data.map((story: CareerMissionData) => (
                                <div key={story.id} className='border-[1px] border-gray-200 dark:border-gray-800 rounded-3xl'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${story.images?.data?.attributes?.url}`}
                                        alt='stories-image'
                                        className='w-full object-cover rounded-tl-3xl rounded-tr-3xl'
                                    />
                                    <div className='flex flex-col gap-3 p-8'>
                                        <h1 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold leading-[125%]'>{story.heading}</h1>
                                        <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal leading-[150%]'>{story.description}</p>
                                    </div>
                                </div>
                            ))
                            : joinUsPageData?.attributes?.career_mission_data && (
                                <div key={joinUsPageData?.attributes?.career_mission_data.id} className='border-[1px] border-gray-200 dark:border-gray-800 rounded-3xl'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${joinUsPageData?.attributes?.career_mission_data.images?.data?.attributes?.url}`}
                                        alt='stories-image'
                                        className='w-full object-cover rounded-tl-3xl rounded-tr-3xl'
                                    />
                                    <div className='flex flex-col gap-3 p-8'>
                                        <h1 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold leading-[125%]'>{joinUsPageData?.attributes?.career_mission_data.heading}</h1>
                                        <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal leading-[150%]'>{joinUsPageData?.attributes?.career_mission_data.description}</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
