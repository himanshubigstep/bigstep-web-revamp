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
    rpaPageManagedSubData
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
    rpaPageManagedSubData?: []
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
                <h2 className='text-3xl font-semibold text-center mb-4'>{title}</h2>
                {description && <p className='text-lg font-normal'>{description}</p>}
            </div>
            <div className={serviceBlockClassName}>
                {sortedServices.map((service: any) => (
                    <div key={service.id} className={serviceItemClassName}>
                        <div className={serviceIconHeader}>
                            <div className='rounded-full w-20 h-20 flex justify-center items-center' style={{ backgroundColor: service.hex_code }}>
                                <img
                                    className='w-16 p-2'
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service.serviceLogo.data.attributes.url}`}
                                    alt={service.heading}
                                />
                            </div>
                            <h4 className='md:line-clamp-none line-clamp-2 text-left md:text-xl text-lg font-semibold menu-item-text hover:text-blue-500'>{service.heading}</h4>
                        </div>
                        <div className={serviceItemDescription}>
                            <p className='line-clamp-3 md:line-clamp-none text-md font-normal'>{service.description}</p>
                        </div>
                        {service.heading === "RPA Implementation" &&
                            rpaPageImplimentationSubData && rpaPageImplimentationSubData.map((item: any) => (
                                <div key={item.id} className='w-full px-4 flex flex-col'>
                                    <div className={serviceIconHeader}>
                                        <h4 className='md:line-clamp-none text-left line-clamp-2 md:text-lg text-md font-semibold menu-item-text hover:text-blue-500'>{item.heading}</h4>
                                    </div>
                                    <div className={serviceItemDescription}>
                                        <p className='line-clamp-3 md:line-clamp-none text-sm font-normal'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        {service.heading === "RPA Managed Services" &&
                            rpaPageManagedSubData && rpaPageManagedSubData.map((item: any) => (
                                <div key={item.id} className='w-full px-4 flex flex-col'>
                                    <div className={serviceIconHeader}>
                                        <h4 className='md:line-clamp-none text-left line-clamp-2 md:text-lg text-md font-semibold menu-item-text hover:text-blue-500'>{item.heading}</h4>
                                    </div>
                                    <div className={serviceItemDescription}>
                                        <p className='line-clamp-3 md:line-clamp-none text-sm font-normal'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
            {showButton && buttonText &&
                <div className='relative w-full h-auto px-4 pt-8 flex justify-center items-center mt-8'>
                    <Button
                        text={buttonText}
                        onClick={() => console.log('Get Started')}
                        className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                    />
                </div>
            }
        </div>
    );
}

export default ServiceDataBlock;
