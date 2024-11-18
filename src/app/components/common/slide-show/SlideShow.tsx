'use client'
import React, { useEffect, useState } from 'react'

const Slide: React.FC<{ slide: any; isActive: boolean }> = ({ slide, isActive }) => {
    const imageUrl = slide?.attributes?.formats?.large?.url || slide?.attributes?.url;

    return (
        <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
        >
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`}
                className="absolute block w-full h-full object-cover"
                alt={`Slide ${slide.id}`}
            />
        </div>
    );
};

const SlideShow = ({valuesData=[]}: { valuesData: any[] }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (valuesData && valuesData.length > 0) {
            const sortedSlides = [...valuesData].sort((a, b) => a.id - b.id);
            setCurrentSlideIndex(0);
        }
    }, [valuesData]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered && valuesData.length > 0) {
                setCurrentSlideIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % valuesData.length;
                    return nextIndex;
                });
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [valuesData, isHovered]);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };
    
    const sortedSlides = [...valuesData].sort((a, b) => a.id - b.id);
    return (
        <div
            id="default-carousel"
            className="relative w-full h-auto"
            data-carousel="slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden md:min-h-[48rem] min-h-96">
                <div className='absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out z-20' data-carousel-item></div>
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
    )
}

export default SlideShow