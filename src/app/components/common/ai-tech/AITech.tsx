import React, { useEffect, useState } from 'react';
import { fetchBlogsData } from '@/api-data/api';
import { useRouter } from 'next/navigation';
import Button from '../button/Button';

interface BlogAttributes {
    heading: string;
    description: string;
    image: {
        data: {
            attributes: {
                formats: {
                    medium: { url: string };
                    thumbnail: { url: string };
                };
            };
        };
    };
    publishedAt: string;
}

interface BlogData {
    id: number;
    attributes: BlogAttributes;
}

interface RightSectionItem {
    id: number;
    date: string;
    src: string;
    title: string;
    description: string;
}

interface AITechProps {
    bannerTitle: string;
    bannerDescription: string;
    buttonTitle?: string;
    onButtonClick?: string;
}

const AITech: React.FC<AITechProps> = ({
    bannerTitle,
    bannerDescription,
    buttonTitle,
    onButtonClick
}) => {
    const router = useRouter();
    const [rightSectionItems, setRightSectionItems] = useState<RightSectionItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogsResponse: BlogData[] | null = await fetchBlogsData();
                const blogs = Array.isArray(blogsResponse) ? blogsResponse.map((blog) => {
                    return {
                        id: blog.id,
                        title: blog.attributes.heading,
                        description: blog.attributes.description,
                        src: process.env.NEXT_PUBLIC_IMAGE_URL + (blog.attributes.image.data.attributes.formats.medium.url || blog.attributes.image.data.attributes.formats.thumbnail.url),
                        date: formatDate(blog.attributes.publishedAt),
                    };
                }) : [];

                setRightSectionItems(blogs);
            } catch (error) {
                console.error("Error fetching blogs data:", error);
                setRightSectionItems([]); // Optionally set to empty on error
            }
        };
        fetchData();
    }, []);

    function formatDate(date: string) {
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
    }

    const [firstItem, ...remainingItems] = rightSectionItems;

    if (rightSectionItems.length < 1) return null;

    return (
        <div className='relative w-full h-full md:py-16 py-8 bg-white dark:bg-black'>
            <div className='w-full h-full max-w-[1240px] mx-auto flex flex-col items-center justify-center'>
                <div className='w-full h-full flex justify-center flex-col items-center mb-8'>
                    <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                        <h2 className='text-3xl font-medium text-center mb-4'>{bannerTitle}</h2>
                        <p className='text-lg font-normal'>{bannerDescription}</p>
                    </div>
                </div>

                <div className='w-full h-full flex md:flex-row flex-col-reverse justify-between items-start rounded-lg md:border-2 md:border-gray-300 dark:border-gray-800 p-8 gap-16'>
                    <div className='md:w-1/2 w-full flex flex-col items-start rounded-lg gap-8'>
                        <div className='w-full flex flex-col justify-center items-start rounded-lg'>
                            <img
                                src={firstItem.src}
                                alt='AI Tech'
                                className='w-full object-contain rounded-lg'
                            />
                            <span className='text-black dark:text-white text-sm my-4'>
                                {firstItem.date}
                            </span>
                            <h2 className='text-black dark:text-white text-xl font-medium mb-4'>{firstItem.title}</h2>
                            <h4 className={`text-black dark:text-white text-md font-normal md:line-clamp-6 line-clamp-2 break-all`}>{firstItem.description}</h4>
                        </div>
                    </div>

                    <div className='md:w-1/2 w-full flex flex-col items-center rounded-lg gap-8 overflow-y-auto'>
                        <div className='w-full flex md:flex-col flex-row rounded-lg gap-8 overflow-y-auto md:h-[32rem] hide-scrollbar'>
                            {remainingItems.map(item => (
                                <div
                                    key={item.id}
                                    className='w-full h-full flex md:flex-row flex-col md:justify-between items-center rounded-lg gap-4 cursor-pointer'
                                >
                                    <div className='md:w-1/6 md:aspect-square h-20 md:h-auto flex justify-center items-center rounded-lg'>
                                        <img
                                            src={item.src}
                                            alt='AI Tech'
                                            className='w-full object-contain rounded-lg'
                                        />
                                    </div>
                                    <div className='md:w-5/6 flex flex-col justify-center'>
                                        <h4 className='text-black dark:text-white text-lg font-medium line-clamp-2 md:line-clamp-3'>
                                            {item.title}
                                        </h4>
                                        <p className='text-gray-400 dark:text-white text-sm font-normal'>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {buttonTitle && onButtonClick && (
                            <Button
                                onClick={() => router.push(`${onButtonClick}`)}
                                text={buttonTitle}
                                className='text-white bg-blue-500 hover:bg-blue-800 py-4 rounded-xl w-[180px]'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AITech;
