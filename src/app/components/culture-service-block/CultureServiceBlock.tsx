import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import BigsteLogo from '@/app/assets/bigstep logo.png'
import Button from '../common/button/Button';

const CultureServiceBlock = ({
    title,
    description,
    services,
    containerClassName,
    logoClassName,
    titleClassName,
    descriptionClassName,
    serviceContainerClassName,
    serviceItemClassName,
    serviceIconClassName,
    buttonClassName,
    serviceHeaderClassName
}: {
    title: string,
    description: string,
    services: any,
    containerClassName: string,
    logoClassName: string,
    titleClassName: string,
    descriptionClassName: string,
    serviceContainerClassName: string,
    serviceItemClassName: string,
    serviceIconClassName: string,
    buttonClassName: string,
    serviceHeaderClassName: string
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const itemsPerPage = 4;

    const sortedServices = services?.sort((a: any, b: any) => a.id - b.id) || [];
    const totalItems = sortedServices.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentServices = isMobile ? sortedServices.slice(startIndex, startIndex + itemsPerPage) : sortedServices;

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className={`${containerClassName}`}>
            <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center text-center py-8'>
                <Image
                    src={BigsteLogo}
                    alt='image'
                    className={`${logoClassName}`}
                />
            </div>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className={`${titleClassName}`}>{title}</h2>
                {description &&
                    <p className={`${descriptionClassName}`}>{description}</p>
                }
            </div>
            <div className={`${serviceContainerClassName}`}>
                {currentServices.map((service: any) => (
                    <div key={service.id} className={`${serviceItemClassName}`}>
                        <div className='w-full flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center'>
                            <div className={`${serviceIconClassName}`} style={{ backgroundColor: service.hex_code }}>
                                <img
                                    className='w-12 h-12 p-2'
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.serviceLogo?.data?.attributes?.url}`}
                                    alt={service?.heading}
                                />
                            </div>
                            <div className={serviceHeaderClassName}>
                                <h4 className='md:w-[60%] w-full md:text-left text-center md:text-xl text-lg font-semibold menu-item-text hover:text-blue-500'>{service?.heading}</h4>
                                <p className='text-md font-normal md:flex hidden w-[80%]'>{service?.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isMobile && (
                <div className='relative flex justify-between items-center mt-8'>
                    <button onClick={handlePrevious} disabled={currentPage === 1} className={`${buttonClassName}`}>&lt; Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage === totalPages} className={`${buttonClassName}`}>Next &gt;</button>
                </div>
            )}
        </div>
    );
}

export default CultureServiceBlock;