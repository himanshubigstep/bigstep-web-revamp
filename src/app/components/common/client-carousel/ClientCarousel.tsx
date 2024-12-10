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
        <div className='relative w-full h-full lg:py-16 py-8 bg-white lg:px-0 px-4'>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 text-black'>{heading}</h2>
                <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-black'>{description}</p>
            </div>
            <div className='client-logos-row overflow-hidden lg:max-w-[1440px] max-w-full mx-auto px-4'>
                <div className="flex whitespace-nowrap gap-4 animate-marquee">
                    {row1 && row1.map((item, index) => (
                        <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row1 && row1.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:block hidden w-full h-[1px] bg-gray-200' />
            <div className="client-logos-row overflow-hidden lg:max-w-[1440px] max-w-full mx-auto px-4">
                <div className="flex whitespace-nowrap gap-4 animate-marquee-reverse">
                    {row2.map((item, index) => (
                        <div key={index} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                    {row2.map((item, index) => (
                        <div key={`clone-${index}`} className="min-w-[150px] sm:min-w-[240px] h-[100px] sm:h-[140px] px-2 sm:px-4 py-2 sm:py-4 bg-white rounded-lg flex justify-center items-center">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.image.data.attributes.url}`}
                                alt={`client ${index + 1}`}
                                className="lg:w-40 lg:h-24 w-20 h-20 object-contain mx-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientCarousel;
