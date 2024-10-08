'use client'
import React, { useState, useEffect, Fragment } from 'react';
import { fetchClientReviews } from '@/api-data/api';
// import bgIcon from '../../../../public/assets/bigstep-icon.svg'
import Image from 'next/image';

interface ClientReviewsData {
    data: {
        attributes: {
            client_designation: string;
            client_name: string;
            message: string;
            image: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }[]
}

const Carousel = () => {
    const [reviews, setReviews] = useState<ClientReviewsData['data']>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const fetchReviews = async () => {
            const data = await fetchClientReviews();
            setReviews(data);
        }

        fetchReviews();
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % reviews.length;
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + reviews.length) % reviews.length;
            return newIndex;
        });
    };

    const goToSlide = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    const splitMessage = (message: string) => {
        const parts = message.split('\n').map(part => part.trim());

        if (parts.length > 1) {
            const title = parts[0];
            const description = parts.slice(1).join('\n');
            return { title, description };
        } else {

            return { title: parts[0], description: '' };
        }
    };

    return (
        <Fragment>
            {reviews && reviews.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div id="controls-carousel" className='relative w-full h-full max-w-[1440px] mx-auto rounded-2xl md:p-8 md:px-16 mb-16'>
                    {reviews && reviews.map((item, index) => {
                        const { title, description } = splitMessage(item?.attributes?.message || '');

                        return (
                            <div key={index} className={`max-w-[1140px] mx-auto relative dark:bg-black shadow-2xl bg-white rounded-2xl md:p-16 px-8 py-16 md:mt-0 mt-8 w-full h-full flex md:flex-row flex-col-reverse justify-between items-center gap-16 duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}>
                                <div className='md:w-[65%] w-[100%]'>
                                    <blockquote className="relative">
                                        <svg className="absolute -top-16 -start-8 size-16 text-black dark:text-neutral-700" width="16" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                                        </svg>
                                        <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                                            <h2 className='text-3xl font-medium text-center mb-4'>{title}</h2>
                                            <p className='text-lg font-normal'>{description}</p>
                                        </div>
                                        <svg className="absolute -bottom-16 -end-8 size-16 text-black dark:text-neutral-700" width="16" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" transform="scale(-1, 1)">
                                            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                                        </svg>

                                    </blockquote>
                                </div>
                                <div className='md:w-[35%] w-[100%]'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                                        className='md:w-full w-32 mx-auto aspect-square object-cover rounded-full'
                                        alt='Client Image'
                                    />
                                    <h4 className='text-2xl font-bold text-center text-blue-500 mt-4'>{item?.attributes?.client_name}</h4>
                                    <h5 className='text-xl text-center'>{item?.attributes?.client_designation}</h5>
                                </div>
                            </div>
                        );
                    })}
                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={prevSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={nextSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            )}
            <div className="absolute md:bottom-4 bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-16">
                {reviews && reviews.map((item, index) => (
                    <button
                        key={index}
                        className={`rounded-full ${index === currentIndex ? 'bg-blue-500 w-10 h-4' : 'bg-gray-400 w-4 h-4'} focus:outline-none`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default Carousel
