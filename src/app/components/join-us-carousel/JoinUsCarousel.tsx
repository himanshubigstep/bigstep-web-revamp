'use client'
import React, { useState, useEffect, useRef } from 'react';

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

interface JoinUsCarouselProps {
    data: JoinUsCarouselData[];
}

const Slide: React.FC<{ slide: JoinUsCarouselData; isActive: boolean }> = ({ slide, isActive }) => (
    <div
        className={`absolute w-full h-full flex items-center ${isActive ? 'opacity-100' : 'opacity-0'}`}
        data-carousel-item
    >
        <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.attributes.join_us_Image.data.attributes.url}`}
            className="absolute block w-full h-full object-cover object-right"
            alt={`JoinUsCarousel ${slide.id}`}
        />
        <div className="absolute bottom-0 w-full mx-auto lg:h-auto md:h-auto sm:h-full h-auto text-white z-20 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black via-gray-950 to-transparent">
            <div className={`w-full h-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out p-8 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="lg:text-4xl md:text-3xl sm:text-md text-md lg:mb-4 md:mb-4 sm:mb-2 mb-2 font-medium">{slide.attributes.join_us_heading}</h2>
                <p className="lg:mb-8 md:mb-4 sm:mb-2 mb-2 lg:text-lg md:text-md sm:text-sm text-sm font-normal leading-normal">{slide.attributes.join_us_description}</p>
            </div>
        </div>
    </div>
);

const JoinUsCarousel: React.FC<JoinUsCarouselProps> = ({ data }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [sortedSlides, setSortedSlides] = useState<JoinUsCarouselData[]>([]);
    const startTouchX = useRef(0);

    useEffect(() => {
        if (data && data.length > 0) {
            const sorted = [...data].sort((a, b) => a.id - b.id);
            setSortedSlides(sorted);
            setCurrentSlideIndex(0);
        }
    }, [data]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered && sortedSlides.length > 0) {
                setCurrentSlideIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % sortedSlides.length;
                    return nextIndex;
                });
            }
        }, 1000000000);

        return () => clearInterval(timer);
    }, [sortedSlides, isHovered]);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchStart = e.touches[0].clientX;
        startTouchX.current = touchStart;
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchEnd = e.changedTouches[0].clientX;
        const touchDiff = startTouchX.current - touchEnd;

        if (touchDiff > 50) {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % sortedSlides.length);
        } else if (touchDiff < -50) {
            setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + sortedSlides.length) % sortedSlides.length);
        }
    };

    return (
        <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative overflow-hidden lg:h-[80vh] md:h-[60vh] sm:h-[80vh] h-[65vh] md:landscape:h-[80vh] sm:landscape:h-[120vh] landscape:h-screen">
                <div className='absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out bg-gradient-to-r from-black via-gray-900 to-transparent opacity-90 z-20' data-carousel-item></div>
                {sortedSlides.map((slide, index) => (
                    <Slide key={slide.id} slide={slide} isActive={index === currentSlideIndex} />
                ))}
            </div>

            <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
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
            </div>
        </div>
    );
};

export default JoinUsCarousel;
