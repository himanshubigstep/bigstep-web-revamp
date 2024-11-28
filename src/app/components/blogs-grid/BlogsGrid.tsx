import React, { Fragment, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useRouter } from 'next/navigation';

interface BlogItem {
    id: number;
    attributes: {
        author: {
            data: {
                attributes: {
                    image: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                    name: string;
                };
            };
        };
        heading: string;
        description: string;
        image: {
            data: {
                id: number;
                attributes: {
                    url: string;
                    formats: {
                        large: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}

interface Category {
    name: string;
    items: BlogItem[];
}

interface CommonGridProps {
    categories: Category[];
}

const BlogsGrid: React.FC<CommonGridProps> = ({ categories }) => {
    const [currentPageMap, setCurrentPageMap] = useState<Record<string, number>>({});
    const router = useRouter();

    const itemsPerPage = 3;
    
    const getCurrentItems = (categoryName: string, categoryItems: BlogItem[]) => {
        const currentPage = currentPageMap[categoryName] || 0;
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return categoryItems.slice(startIndex, endIndex);
    };
    const handleNextPage = (categoryName: string, categoryItems: BlogItem[]) => {
        const currentPage = currentPageMap[categoryName] || 0;
        if ((currentPage + 1) * itemsPerPage < categoryItems.length) {
            setCurrentPageMap((prev) => ({
                ...prev,
                [categoryName]: currentPage + 1,
            }));
        }
    };
    const handlePrevPage = (categoryName: string) => {
        const currentPage = currentPageMap[categoryName] || 0;
        if (currentPage > 0) {
            setCurrentPageMap((prev) => ({
                ...prev,
                [categoryName]: currentPage - 1,
            }));
        }
    };

    if (!categories || !Array.isArray(categories)) return null;

    const handleItemClick = (id: number) => {
        router.push(`/blog/${id}`);
    };

    return (
        <div className="w-full h-full relative bg-white dark:bg-black md:pb-16 p-8">
            <div className="w-full h-full max-w-[1440px] mx-auto px-4">
                {categories.map((category) => (
                    <Fragment key={category.name}>
                        <div className="w-full h-full mb-16 relative">
                            <div className="w-full h-full flex justify-between items-center mb-8">
                                <h2 className="text-black dark:text-white text-2xl font-bold">{category.name}</h2>
                            </div>
                            <div className="w-full h-full grid md:grid-cols-3 grid-cols-2 gap-8 items-center">
                                {getCurrentItems(category.name, category.items).map((item) => (
                                    <div onClick={() => handleItemClick(item.id)} key={item.id} className="relative border-[1px] h-full bg-white dark:bg-black rounded-3xl cursor-pointer">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.attributes?.image?.data?.attributes?.formats?.large?.url}`}
                                            alt="blog image"
                                            className="w-full h-[14rem] rounded-3xl rounded-b-none"
                                        />
                                        <div className="w-full h-auto flex flex-col justify-between items-start p-4">
                                            <h2 className="line-clamp-2 md:line-clamp-1 font-medium mb-4 text-black dark:text-white text-lg">
                                                {item?.attributes?.heading}
                                            </h2>
                                            <div className="w-full flex gap-4 items-center">
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url}`}
                                                    alt="profile image"
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <span className="text-black dark:text-white text-sm">By: {item?.attributes?.author?.data?.attributes?.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 right-0 flex justify-between items-center gap-2">
                                <button
                                    onClick={() => handlePrevPage(category.name)}
                                    disabled={currentPageMap[category.name] === 0}
                                    className="bg-blue-500 disabled:bg-gray-400 rounded-md text-white w-8 h-8 flex justify-center items-center text-2xl"
                                >
                                    <MdNavigateBefore />
                                </button>
                                <button
                                    onClick={() => handleNextPage(category.name, category.items)}
                                    disabled={(currentPageMap[category.name] + 1) * itemsPerPage >= category.items.length}
                                    className="bg-blue-500 disabled:bg-gray-400 rounded-md text-white w-8 h-8 flex justify-center items-center text-2xl"
                                >
                                    <MdNavigateNext />
                                </button>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default BlogsGrid;
