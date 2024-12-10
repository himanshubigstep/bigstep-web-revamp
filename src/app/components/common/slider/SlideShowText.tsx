'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface ImageFormats {
    large: {
        url: string;
    };
}

interface ImageData {
    data: {
        attributes: {
            url: string;
            ext: string;
            formats: ImageFormats;
        };
    };
}

interface HomePageCarousel {
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
    slides: HomePageCarousel[];
}

const Slide: React.FC<{ slide: HomePageCarousel; isActive: boolean }> = ({ slide, isActive }) => (
    <div
        className={`absolute w-full h-full flex lg:items-center md:items-center items-end ${isActive ? 'opacity-100' : 'opacity-0'}`}
        data-carousel-item
    >
        {slide.attributes.image.data.attributes.ext.endsWith('.mp4') ? (
            <video
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                autoPlay
                loop
                muted
            >
                <source src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.attributes.image.data.attributes.url}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ) : (
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.attributes.image.data.attributes.url}`}
                className="absolute block w-full h-full lg:object-cover md:object-cover sm:object-cover object-cover lg:object-top md:object-top object-right"
                alt={`Slide ${slide.id}`}
            />
        )}
        <div className="relative w-full max-w-[1440px] mx-auto lg:h-auto md:h-auto sm:h-full h-auto text-white z-20 px-4 lg:px-4 lg:pb-0 md:pb-0 pb-16">
            <div className={`lg:w-[60%] md:w-[70%] sm:w-[80%] w-full h-full flex flex-col justify-center items-start transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="lg:text-4xl md:text-3xl sm:text-md text-md lg:mb-4 md:mb-4 sm:mb-2 mb-2 font-medium">{slide.attributes.title}</h2>
                <p className="lg:mb-8 mb-8 lg:text-lg md:text-md sm:text-sm text-sm font-normal lg:block md:block sm:hidden hidden">{slide.attributes.text_body}</p>
                {/* <Button
                    text={slide.attributes.button_text}
                    className="lg:text-md text-xs bg-blue-500 hover:bg-blue-800 text-white lg:py-4 lg:px-4 md:py-4 md:px-4 px-4 py-2 rounded-xl w-auto font-medium"
                    onClick={() => window.open(slide.attributes.button_link, '_blank')}
                /> */}
                <Link href={slide.attributes.button_link} passHref target='_blank'
                    className='py-4 px-8 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 lg:text-md text-xs text-white font-normal'>
                    {slide.attributes.button_text}
                </Link>
            </div>
        </div>
    </div>
);

const SlideShowText: React.FC<SlideShowTextProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [sortedSlides, setSortedSlides] = useState<HomePageCarousel[]>([]);
    const startTouchX = useRef(0);

    useEffect(() => {
        if (slides && slides.length > 0) {

            const sorted = [...slides].sort((a, b) => a.id - b.id);
            setSortedSlides(sorted);
            setCurrentSlideIndex(0);
        }
    }, [slides]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered && sortedSlides.length > 0) {
                setCurrentSlideIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % sortedSlides.length;
                    return nextIndex;
                });
            }
        }, 3000);

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
            <div className="relative overflow-hidden lg:h-[80vh] md:h-[80vh] sm:h-screen h-[45vh]">
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

export default SlideShowText;
