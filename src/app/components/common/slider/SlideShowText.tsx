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
        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
        data-carousel-item
    >
        {slide.attributes.image.data.attributes.ext.endsWith('.mp4') ? (
            <video
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                autoPlay
                loop
                muted
                controls
            >
                <source src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.attributes.image.data.attributes.url}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ) : (
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.attributes.image.data.attributes.formats.large.url}`}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${slide.id}`}
            />
        )}
        <div className="relative w-full max-w-[1440px] mx-auto h-full text-white z-20 px-4 md:px-0">
            <div className={`md:w-1/2 w-full h-full flex flex-col justify-center items-start transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="md:text-4xl text-2xl mb-4 font-medium">{slide.attributes.title}</h2>
                <p className="md:mb-16 mb-4 md:text-xl text-md font-normal">{slide.attributes.text_body}</p>
                <Button
                    text={slide.attributes.button_text}
                    className="bg-blue-500 hover:bg-blue-800 text-white py-4 px-4 rounded-xl w-auto font-medium"
                    onClick={() => window.open(slide.attributes.button_link, '_blank')}
                />
            </div>
        </div>
    </div>
);

const SlideShowText: React.FC<SlideShowTextProps> = ({ slides }) => {
    const [currentSlideId, setCurrentSlideId] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (slides && slides.length > 0) {
            setCurrentSlideId(slides[0].id);
        }
    }, [slides]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered && currentSlideId !== null) {
                setCurrentSlideId(prevSlideId => {
                    const currentIndex = slides.findIndex(slide => slide.id === prevSlideId);
                    const nextIndex = (currentIndex + 1) % slides.length;
                    return slides[nextIndex].id;
                });
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [slides, isHovered, currentSlideId]);

    return (
        <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-[32rem] overflow-hidden md:h-[48rem]">
                <div className='absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out bg-gradient-to-r from-black via-gray-800 to-transparent opacity-50 z-20' data-carousel-item></div>
                {slides.map(slide => (
                    <Slide key={slide.id} slide={slide} isActive={slide.id === currentSlideId} />
                ))}
            </div>

            <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map(slide => (
                    <button
                        key={slide.id}
                        type="button"
                        className={`rounded-full ${slide.id === currentSlideId ? 'bg-blue-500 w-10 h-4 border-[1px] border-white' : 'bg-gray-300 w-4 h-4 border-[1px] border-transparent'}`}
                        aria-current={slide.id === currentSlideId}
                        aria-label={`Slide ${slide.id}`}
                        onClick={() => setCurrentSlideId(slide.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlideShowText;
