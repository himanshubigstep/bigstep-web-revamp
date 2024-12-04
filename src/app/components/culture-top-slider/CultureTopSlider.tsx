'use client'
import React, { useState, useEffect } from 'react';

interface ImageData {
    data: {
        attributes: {
            url: string;
            ext: string;
        };
    };
}

interface CulturePageCarousel {
    id: number;
    attributes: {
        button_link: string;
        button_text: string;
        category: string;
        text_body: string;
        title: string;
        image: ImageData;
    };
}

interface SlideShowTextProps {
    slides?: CulturePageCarousel[];
}

const Slide: React.FC<{ slide: CulturePageCarousel; isActive: boolean }> = ({ slide, isActive }) => {
    const imageExt = slide?.attributes?.image?.data?.attributes?.ext;
    const imageUrl = slide?.attributes?.image?.data?.attributes?.url;
    const videoUrl = process.env.NEXT_PUBLIC_IMAGE_URL + imageUrl;
    
    const isVideo = imageExt && imageExt.endsWith('.mp4');
    const imageSrc = `${process.env.NEXT_PUBLIC_IMAGE_URL}${slide?.attributes?.image?.data?.attributes?.url}`;
    console.log(imageSrc)

    return (
        <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
        >
            {isVideo ? (
                <video
                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src={imageSrc}
                    className="absolute block w-full h-full object-cover"
                    alt={`Slide ${slide.id}`}
                />
            )}
            <div className="absolute bottom-0 left-0 right-0 w-full text-white z-20 py-6 lg:py-8">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
                <div className={`lg:w-full w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center items-center relative z-20 px-4`}>
                    <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 font-medium text-center">{slide?.attributes?.title}</h2>
                    <p className="lg:text-lg md:text-md sm:text-sm text-xs text-md font-normal text-center">{slide?.attributes?.text_body}</p>
                </div>
            </div>
        </div>
    );
};

const CultureTopSlider: React.FC<SlideShowTextProps> = ({ slides = [] }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (slides && slides.length > 0) {
            const sortedSlides = [...slides].sort((a, b) => a.id - b.id);
            setCurrentSlideIndex(0);
        }
    }, [slides]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered && slides.length > 0) {
                setCurrentSlideIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % slides.length;
                    return nextIndex;
                });
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [slides, isHovered]);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const sortedSlides = [...slides].sort((a, b) => a.id - b.id);

    return (
        <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden lg:min-h-[80vh] md:min-h-[70vh] sm:min-h-screen min-h-screen">
                <div className='absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out bg-gradient-to-b from-black via-gray-900 to-black opacity-50 z-20' data-carousel-item></div>
                {sortedSlides.map((slide, index) => (
                    <Slide key={slide.id} slide={slide} isActive={index === currentSlideIndex} />
                ))}
            </div>

            {/* <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {sortedSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        className={`rounded-full ${index === currentSlideIndex ? 'bg-blue-500 w-10 h-4 border-[1px] border-white' : 'bg-gray-300 w-4 h-4 border-[1px] border-transparent'}`}
                        aria-current={index === currentSlideIndex}
                        aria-label={`Slide ${slide.id}`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default CultureTopSlider;
