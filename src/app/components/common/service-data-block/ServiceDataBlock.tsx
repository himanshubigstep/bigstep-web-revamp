import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';
import Link from 'next/link';

const ServiceDataBlock = ({
    title,
    description,
    services,
    showButton,
    mainContainerClass,
    headingClassName,
    serviceBlockClassName,
    serviceItemClassName,
    serviceIconHeader,
    serviceItemDescription,
    buttonText,
    bgImage,
    logoClassName,
    rpaPageImplimentationSubData,
    rpaPageManagedSubData,
    serviceHeding
}: {
    title: string;
    description?: string;
    services: any,
    showButton: boolean,
    mainContainerClass?: string,
    headingClassName?: string,
    serviceBlockClassName?: string,
    serviceItemClassName?: string,
    serviceIconHeader?: string,
    serviceItemDescription?: string,
    buttonText?: string,
    bgImage?: string,
    logoClassName?: string,
    rpaPageImplimentationSubData?: [],
    rpaPageManagedSubData?: [],
    serviceHeding?: string
}) => {
    // Sort the services by ID
    const sortedServices = services.sort((a: any, b: any) => a.id - b.id);
    return (
        <div className={mainContainerClass}>
            {bgImage && logoClassName &&
                <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center text-center py-8'>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImage}`}
                        alt='image'
                        className={`${logoClassName}`}
                    />
                </div>
            }
            <div className={headingClassName}>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'>{title}</h2>
                {description && <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal'>{description}</p>}
            </div>
            <div className={serviceBlockClassName}>
                {sortedServices.map((service: any) => (
                    <div key={service.id} className={serviceItemClassName}>
                        <div className={serviceIconHeader}>
                            <div className='rounded-full w-16 h-16 flex justify-center items-center' style={{ backgroundColor: service.hex_code }}>
                                <img
                                    className='w-12 p-2'
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service.serviceLogo.data.attributes.url}`}
                                    alt={service.heading}
                                />
                            </div>
                            <h4 className={serviceHeding}>{service.heading}</h4>
                        </div>
                        <div className={serviceItemDescription}>
                            <p className='line-clamp-3 lg:line-clamp-none lg:text-md md:text-sm sm:text-xs text-xs font-normal'>{service.description}</p>
                        </div>
                            <ul className='flex flex-col gap-4 list-disc lg:pl-8 pl-4'>
                                {service.heading === "RPA Implementation" &&
                                    rpaPageImplimentationSubData && rpaPageImplimentationSubData.map((item: any) => (
                                <li className='text-left' key={item.id}>
                                    <h4 className='lg:line-clamp-none text-left line-clamp-2 lg:text-lg md:text-md sm:text-sm text-xs text-md font-semibold'>{item.heading}</h4>
                                    <p className='line-clamp-3 lg:line-clamp-none text-sm font-normal'>{item.description}</p>
                                </li>
                            ))}
                            {/* <div className={serviceItemDescription}>
                                <p className='line-clamp-3 lg:line-clamp-none text-sm font-normal'>{item.description}</p>
                            </div> */}
                            </ul>
                            <ul className='flex flex-col gap-4 list-disc lg:pl-8 pl-4'>
                                {service.heading === "RPA Managed Services" &&
                                    rpaPageManagedSubData && rpaPageManagedSubData.map((item: any) => (
                                    <li className='text-left' key={item.id}>
                                        <h4 className='lg:line-clamp-none text-left line-clamp-2 lg:text-lg md:text-md sm:text-sm text-xs text-md font-semibold'>{item.heading}</h4>
                                        <p className='line-clamp-3 lg:line-clamp-none text-sm font-normal'>{item.description}</p>
                                    </li>
                                ))}
                                {/* <div className={serviceItemDescription}>
                                    <p className='line-clamp-3 lg:line-clamp-none text-sm font-normal'>{item.description}</p>
                                </div> */}
                            </ul>
                    </div>
                ))}
            </div>
            {showButton && buttonText &&
                <div className='relative w-full h-auto px-4 pt-8 flex justify-center items-center'>
                    <Button
                        text={buttonText}
                        onClick={() => console.log('Get Started')}
                        className='py-4 px-8 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 lg:text-lg md:text-md sm:text-sm text-xs text-white font-normal'
                    />
                </div>
            }
        </div>
    );
}

export default ServiceDataBlock;
