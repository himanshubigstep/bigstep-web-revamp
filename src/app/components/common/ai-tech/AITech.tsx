import React, { useEffect, useState } from 'react';
import { fetchBlogsData } from '@/api-data/api';
import { useRouter } from 'next/navigation';
import Button from '../button/Button';
import Link from 'next/link';

const AITech = ({ bannerTitle, bannerDescription, buttonTitle, onButtonClick, bannerImage, isBlog }: { bannerTitle: string, bannerDescription: string, buttonTitle?: string, onButtonClick?: string, bannerImage?: string, isBlog?: boolean }) => {
    const router = useRouter();
    const [rightSectionItems, setRightSectionItems] = useState<any>();

    useEffect(() => {
        const fetchHomePageServiceData = async () => {
            try {
                let serviceResponse = await fetchBlogsData();
                let allServiceData = serviceResponse?.data || [];

                while (serviceResponse?.meta?.pagination.page < serviceResponse?.meta?.pagination.pageCount) {
                    const nextPage = serviceResponse.meta.pagination.page + 1;
                    serviceResponse = await fetchBlogsData(nextPage);
                    allServiceData = allServiceData.concat(serviceResponse?.data || []);
                }

                const sortedItems = allServiceData.sort((a: any, b: any) => {
                    const dateA = new Date(a?.attributes?.upload_date);
                    const dateB = new Date(b?.attributes?.upload_date);
                    return dateB.getTime() - dateA.getTime();
                });

                setRightSectionItems(sortedItems);

            } catch (error) {
                console.log(error);
                return null;
            }
        };

        fetchHomePageServiceData();
    }, []);

    function formatDate(date: string) {
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
    }

    const firstItem = Array.isArray(rightSectionItems) && rightSectionItems.length > 0 ? rightSectionItems[0] : null;
    const remainingItems = Array.isArray(rightSectionItems) && rightSectionItems.length > 1 ? rightSectionItems.slice(1) : [];

    const handleItemClick = (slug: string) => {
        const formattedSlug = decodeURIComponent(slug)
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\//g, '-')
            .replace(/[^a-z0-9\-]/g, '');
        window.open(`/blog/${formattedSlug}`, '_blank');
    };

    return (
        <div className={`relative w-full h-full lg:py-16 py-8 bg-white dark:bg-black ${isBlog === true && 'lg:pt-0 pt-0'}`}>
            {bannerImage &&
                <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center text-center py-8'>
                    <img
                        src={bannerImage}
                        alt='image'
                        className='lg:w-auto w-auto lg:h-full lg:object-fill object-cover'
                    />
                </div>
            }
            <div className='relative w-full h-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4'>
                <div className='w-full h-full flex justify-center flex-col items-center lg:mb-8 md:mb-6 sm:mb-4 mb-2 lg:px-0'>
                    <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                        <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'>{bannerTitle}</h2>
                        {bannerDescription && <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal'>{bannerDescription}</p>}
                    </div>
                </div>

                <div className='w-full h-full flex lg:flex-row flex-col justify-between items-start rounded-lg lg:border-2 lg:border-gray-300 dark:border-gray-800 lg:py-8 lg:px-8 py-4 lg:gap-16 gap-8'>
                    {firstItem && (
                        <Link
                            href={`/blog/${decodeURIComponent(firstItem?.attributes?.slug)
                                .toLowerCase()
                                .replace(/\s+/g, '-')
                                .replace(/\//g, '-')
                                .replace(/[^a-z0-9\-]/g, '')}`}
                            className="lg:w-1/2 w-full flex flex-col justify-center items-start rounded-lg"
                        >
                            <div
                                className="w-full flex flex-col items-start rounded-lg gap-8 cursor-pointer"
                            // onClick={() => handleItemClick(firstItem?.attributes?.slug)}
                            >
                                <div className="w-full flex flex-col justify-center items-start rounded-lg">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${firstItem?.attributes?.image?.data?.attributes?.url}`}
                                        alt="AI Tech"
                                        className="w-full object-contain rounded-lg"
                                    />
                                    <span className="text-black dark:text-white text-sm my-4">
                                        {formatDate(firstItem?.attributes?.upload_date)}
                                    </span>
                                    <h2 className="text-black dark:text-white lg:text-xl md:text-lg sm:text-md text-sm font-medium mb-4">
                                        {firstItem?.attributes?.heading}
                                    </h2>
                                    <h4 className="text-black dark:text-white lg:text-md md:text-sm sm:text-xs text-xs font-normal lg:line-clamp-6 line-clamp-2 break-all">
                                        {firstItem?.attributes?.description}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    )}

                    <div className='lg:w-1/2 w-full flex flex-col items-center rounded-lg lg:gap-8 gap-4 overflow-y-auto'>
                        {remainingItems.length > 0 && (
                            <div className="w-full flex lg:flex-col flex-row rounded-lg lg:gap-8 gap-4 overflow-y-auto lg:h-[32rem] hide-scrollbar lg:mb-auto mb-8">
                                {remainingItems.map((item: any) => (
                                    <Link
                                        href={`/blog/${decodeURIComponent(firstItem?.attributes?.slug)
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')
                                            .replace(/\//g, '-')
                                            .replace(/[^a-z0-9\-]/g, '')}`}
                                        className="lg:w-full lg:min-w-auto min-w-[50%] flex flex-col justify-center items-start rounded-lg"
                                    >
                                        <div
                                            key={item.id}
                                            className="w-full h-full flex lg:flex-row flex-col lg:justify-between items-center rounded-lg gap-4 cursor-pointer"
                                            onClick={() => handleItemClick(item?.attributes?.slug)}
                                        >
                                            <div className="lg:w-[25%] w-full h-auto lg:h-auto flex justify-center items-center rounded-lg">
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                                                    alt="AI Tech"
                                                    className="w-full h-full lg:object-fill object-contain rounded-lg"
                                                />
                                            </div>
                                            <div className="lg:w-[75%] flex flex-col justify-center">
                                                <h4 className="text-black dark:text-white lg:text-xl md:text-lg sm:text-md text-sm font-medium line-clamp-2 lg:line-clamp-3">
                                                    {item?.attributes?.heading}
                                                </h4>
                                                <p className="text-gray-400 dark:text-white lg:text-md md:text-sm sm:text-xs text-xs font-normal">
                                                    {formatDate(item?.attributes?.upload_date)}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {buttonTitle && onButtonClick && (
                            // <Button
                            //     onClick={() => router.push(`${onButtonClick}`)}
                            //     text={buttonTitle}
                            //     className='text-white bg-blue-500 hover:bg-blue-800 py-4 rounded-xl w-[180px]'
                            // />
                            <Link href={onButtonClick} passHref target='_blank'

                                className='text-white bg-blue-500 hover:bg-blue-800 py-4 rounded-xl w-[180px] text-center lg:text-md text-xs'>
                                {buttonTitle}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AITech;
