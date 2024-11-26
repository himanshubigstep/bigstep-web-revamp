import React, { useState } from 'react'
import Button from '../common/button/Button'

interface CultureData {
    id: number;
    images: {
        data: {
            attributes: {
                url: string;
                formats: {
                    large: {
                        url: string;
                    }
                }
            }
        }
    }
}

const ImagesAboutUs = ({
    heartHeading,
    heartDescription,
    heartButtonText,
    heartButtonLink,
    heartBackgroundImage,
    images
}: {
    heartHeading: string;
    heartDescription: string;
    heartButtonText: string;
    heartButtonLink: string;
    heartBackgroundImage: string;
    images: CultureData[]
}) => {
    const [selectedImageId, setSelectedImageId] = useState(1);

    const handleClick = (id: number) => {
        setSelectedImageId(id);
    };
    return (
        <div className='relative w-full h-full md:py-16 py-8 md:mb-17 mb-8'>
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${heartBackgroundImage}`}
                alt='Background Image'
                className='absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-top'
            />
            <div className='relative w-full h-full max-w-[1080px] mx-auto mb-16 md:p-0 p-4'>
                <h2 className='text-3xl font-semibold text-center mb-4 text-white'>{heartHeading}</h2>
                <p className='text-lg font-normal text-center text-white'>{heartDescription}</p>
            </div>
            <div className='relative w-full h-full flex items-center justify-center mt-16'>
                <Button
                    text={heartButtonText}
                    onClick={() => console.log('clicked')}
                    className="w-[240px] bg-blue-500 hover:bg-blue-800 text-white py-4 rounded-xl"
                />
            </div>
            <div className='w-full h-full relative max-w-[1440px] mx-auto flex flex-col items-center justify-center md:pt-16 pt-8'>
                <div className='w-full h-full flex items-center justify-center gap-4'>
                    {images && images.map((item: any) => (
                        <div
                            key={item.id}
                            className={`relative cursor-pointer transition-all duration-1000 h-[32rem] ${item.id === selectedImageId ? 'w-[55%]' : 'w-[20%]'} overflow-hidden`}
                            onClick={() => handleClick(item.id)}
                        >
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.url}`}
                                alt={item?.id}
                                className={`w-full h-full object-cover rounded-2xl ${item.id === selectedImageId ? '' : 'filter grayscale'}`}
                            />
                            {/* {item.id === selectedImageId && (
                                <div className='absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-gray-500 bg-opacity-50 text-white text-md font-medium'>
                                    {item?.attributes?.heading}
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImagesAboutUs