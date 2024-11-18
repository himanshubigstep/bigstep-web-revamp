import React, { useState } from 'react'
import learning from '../../assets/1.png'
import transparancy from '../../assets/2.png'
import commitment from '../../assets/3.png'
import accountability from '../../assets/4.png'
import integrity from '../../assets/5.png'
import Image from 'next/image'
import SlideShow from '../common/slide-show/SlideShow'

const OurValues = ({ valuesData }: { valuesData: any }) => {
    const ourValues = [
        {
            id: 1,
            icon: learning,
            title: 'Continuous Learning',
            description: 'We consistently seek new insights and techniques to enhance the performance and quality of work.'
        },
        {
            id: 2,
            icon: transparancy,
            title: 'Transparency',
            description: 'We keep you involved throughout the project, ensuring clear communication and shared decision-making.'
        },
        {
            id: 3,
            icon: commitment,
            title: 'Commitment',
            description: 'We are fully dedicated to delivering successful outcomes that meet your objectives and expectations.'
        },
        {
            id: 4,
            icon: accountability,
            title: 'Accountability',
            description: 'We take responsibility for our results, always meeting the highest standards in client service and quality.'
        },
        {
            id: 5,
            icon: integrity,
            title: 'Integrity',
            description: 'We maintain the highest ethical standards, ensuring fairness and honesty in every project we undertake.'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % valuesData?.value_1.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + valuesData?.value_1.length) % valuesData?.value_1.length);
    };
    return (
        <div className='w-full h-auto bg-black md:mb-16 mb-8'>
            <div className='w-full flex md:flex-row flex-col justify-center items-center text-center md:px-0'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:px-0'>
                    <SlideShow valuesData={valuesData?.value_photos?.data} />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-left md:p-16 p-4'>
                    <div className='w-full flex flex-col text-left md:px-0'>
                        <h2 className='text-3xl font-semibold text-left mb-4 text-white'>{valuesData?.title}</h2>
                        <p className='text-lg font-normal text-white'>{valuesData?.description}</p>
                    </div>
                    <div className='w-full flex md:py-16 py-8'>
                        <div className='w-full flex'>
                            <div className='md:grid hidden md:grid-cols-3 grid-cols-2 gap-16'>
                                {valuesData && valuesData?.value_1.map((value: any) => (
                                    <div key={value.id} className='relative flex flex-col justify-center items-center'>
                                        <div className='mb-4'>
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${value?.image?.data?.attributes?.url}`}
                                                alt={value?.image?.data?.attributes?.name}
                                                className='object-contain min-w-16 max-w-16'
                                            />
                                        </div>
                                        <div className='w-full max-w-[80%] flex flex-col justify-center items-center'>
                                            <h2 className='text-xl text-center font-semibold mb-2 text-white line-clamp-2'>{value?.link}</h2>
                                            {/* <p className='text-lg text-left font-normal text-white'>{value.description}</p> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='md:hidden w-full flex flex-col md:items-center'>
                                <div className='mb-4'>
                                    <img
                                        src={ourValues[currentIndex].icon.src}
                                        alt={ourValues[currentIndex].title}
                                        className='object-contain min-w-66 max-w-66'
                                    />
                                </div>
                                <div className='w-full max-w[80%] flex flex-col md:justify-center md:items-center'>
                                    <h2 className='text-xl md:text-center font-semibold mb-2 text-white'>{ourValues[currentIndex].title}</h2>
                                    <p className='text-lg md:text-center font-normal text-white'>{ourValues[currentIndex].description}</p>
                                </div>
                                <div className='flex justify-between w-full mt-8'>
                                    <button onClick={handlePrev} className='bg-gray-700 text-white py-2 px-4 rounded'>
                                        Previous
                                    </button>
                                    <button onClick={handleNext} className='bg-gray-700 text-white py-2 px-4 rounded'>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues