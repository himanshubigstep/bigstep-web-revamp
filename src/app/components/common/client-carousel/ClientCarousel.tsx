'use client'
import React, { useEffect, useRef, useState } from 'react';
import './ClientCarousel.css';

interface Client {
    attributes: {
        image: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
}

const ClientCarousel = ({ clients = [], heading, description }: { clients?: Client[] | null, heading: string, description: string }) => {
    if (!clients) return null;

    const containerRef = useRef<HTMLDivElement>(null);
    const scrollSpeed = 1;

    const [offset, setOffset] = useState(0);
    const clientCount = clients.length;
    const midpoint = Math.ceil(clientCount / 2);
    const row1 = clients.slice(0, midpoint);
    const row2 = clients.slice(midpoint);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => {
                if (containerRef.current) {
                    const totalWidth = containerRef.current.scrollWidth / 2;
                    return (prevOffset - scrollSpeed) % totalWidth;
                }
                return prevOffset - scrollSpeed;
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full h-full md:pt-16 pt-8 bg-white dark:bg-black md:px-0 px-4'>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-semibold text-center mb-4'>{heading}</h2>
                <p className='text-lg'>{description}</p>
            </div>
            <div className='client-logos-row md:max-w-[1440px] max-w-full mx-auto'>
                <div className="flex whitespace-nowrap gap-4" ref={containerRef} style={{ transform: `translateX(${offset}px)` }}>
                    {row1 && row1.map((item, index) => (
                        <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:block hidden w-full h-[1px] bg-gray-200' />
            <div className="client-logos-row md:max-w-[1440px] max-w-full mx-auto">
                <div className="flex whitespace-nowrap gap-4 animate-marquee-reverse" ref={containerRef} style={{ transform: `translateX(${offset}px)` }}>
                    {row2.map((item, index) => (
                        <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white dark:bg-black rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="md:w-40 md:h-24 w-20 h-20 object-contain mx-2 dark:invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientCarousel;
