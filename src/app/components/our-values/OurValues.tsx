import React, { useState } from 'react'
import SlideShow from '../common/slide-show/SlideShow'

const OurValues = ({ valuesData }: { valuesData: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % valuesData?.value_1.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + valuesData?.value_1.length) % valuesData?.value_1.length);
    };
    return (
        <div className='w-full h-auto bg-black'>
            <div className='w-full flex lg:flex-row flex-col justify-center items-center text-center lg:px-0'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:px-0'>
                    <SlideShow valuesData={valuesData?.value_photos?.data} />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center text-left lg:p-16 p-4'>
                    <div className='w-full flex flex-col text-left lg:px-0'>
                        <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-left mb-4 text-white'>{valuesData?.title}</h2>
                        <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-white'>{valuesData?.description}</p>
                    </div>
                    <div className='w-full flex lg:py-16 py-8'>
                        <div className='w-full flex'>
                            <div className='lg:grid hidden lg:grid-cols-3 grid-cols-2 gap-16'>
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
                                            <h2 className='lg:text-2xl md:text-xl sm:text-lg text-md text-center font-semibold mb-2 text-white line-clamp-2'>{value?.link}</h2>
                                            {/* <p className='text-lg text-left font-normal text-white'>{value.description}</p> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="lg:hidden w-full flex flex-col lg:items-center">
                                <div className="mb-4">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${valuesData?.value_1[currentIndex]?.image?.data?.attributes?.url}`}
                                        alt={valuesData?.value_1[currentIndex]?.link}
                                        className="object-contain min-w-24 max-w-24"
                                    />
                                </div>
                                <div className="w-full max-w-[80%] flex flex-col lg:justify-center lg:items-center">
                                    <h2 className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold mb-2 text-white">
                                        {valuesData?.value_1[currentIndex]?.link}
                                    </h2>
                                </div>
                                <div className="flex justify-between w-full mt-8">
                                    <button
                                        onClick={handlePrev}
                                        className="bg-gray-700 text-white py-2 px-4 rounded"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="bg-gray-700 text-white py-2 px-4 rounded"
                                    >
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