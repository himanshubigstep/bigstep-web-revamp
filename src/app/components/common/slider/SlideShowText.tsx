'use client'
import React, { useState, useEffect } from 'react';
import Button from '../button/Button';

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
        className={`absolute w-full h-full ${isActive ? 'opacity-100' : 'opacity-0'}`}
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
                className="absolute block w-full h-full object-cover"
                alt={`Slide ${slide.id}`}
            />
        )}
        <div className="relative w-full max-w-[1440px] mx-auto h-full text-white z-20 px-4 lg:px-4">
            <div className={`lg:w-[60%] md:w-[70%] sm:w-[80%] w-full h-full flex flex-col justify-center items-start transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 font-medium">{slide.attributes.title}</h2>
                <p className="lg:mb-8 mb-8 lg:text-lg md:text-md sm:text-sm text-xs font-normal">{slide.attributes.text_body}</p>
                <Button
                    text={slide.attributes.button_text}
                    className="lg:text-md text-sm bg-blue-500 hover:bg-blue-800 text-white py-4 px-4 rounded-xl w-auto font-medium"
                    onClick={() => window.open(slide.attributes.button_link, '_blank')}
                />
            </div>
        </div>
    </div>
);

const SlideShowText: React.FC<SlideShowTextProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [sortedSlides, setSortedSlides] = useState<HomePageCarousel[]>([]);

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

    return (
        <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden lg:min-h-[80vh] md:min-h-screen sm:min-h-screen min-h-screen">
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
