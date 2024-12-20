'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

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
        slug: string;
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
        category: string; // Assuming each blog item has a `category` attribute
        date: string; // Assuming each blog has a `date` attribute
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
    const [itemsPerPage, setItemsPerPage] = useState<number>(4);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<BlogItem[]>([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }
        };

        // Initial check
        handleResize();

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        filterItems();
    }, [selectedCategory]);

    const filterItems = () => {
        let filtered: BlogItem[] = [];

        categories.forEach((category) => {
            category.items.forEach((item) => {
                const categoryMatch = selectedCategory ? category.name.toLowerCase() === selectedCategory.toLowerCase() : true;

                if (categoryMatch) {
                    filtered.push(item);
                }
            });
        });

        setFilteredItems(filtered);
    };

    const getCategories = () => {
        const categoriesSet = new Set<string>();
        categories.forEach((category) => {
            categoriesSet.add(category.name);
        });
        return Array.from(categoriesSet);
    };

    if (!categories || !Array.isArray(categories)) return null;

    return (
        <div className="w-full h-full relative bg-white dark:bg-black lg:py-8 lg:pb-16 py-8">
            <div className="w-full h-full max-w-[1440px] mx-auto px-4 flex flex-col gap-8">

                {/* Filters Section (Left Side) */}
                <div className="p-4 rounded-lg ml-auto mr-0">
                    <div className="flex lg:flex-row md:flex-row flex-col items-center w-full gap-4">
                        <label htmlFor="category" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Filter By Category:</label>
                        <select
                            id="category"
                            className="p-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 outline-none"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {getCategories().map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Blog Listing Section (Right Side) */}
                <div className="w-full">
                    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                        {filteredItems.length > 0 ? filteredItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/blog/${decodeURIComponent(item?.attributes?.slug)
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .replace(/\//g, '-')
                                    .replace(/[^a-z0-9\-]/g, '')}`}
                                target='_blank'
                                className="relative border-[1px] bg-white dark:bg-black rounded-3xl cursor-pointer"
                            >
                                <div className="w-full">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                                        alt="blog image"
                                        className="w-full rounded-3xl rounded-b-none"
                                    />
                                    <div className="w-full h-auto flex flex-col justify-between items-start p-4">
                                        <h2 className="line-clamp-2 lg:line-clamp-1 font-medium mb-4 text-black dark:text-white lg:text-lg md:text-md sm:text-sm text-xs">
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
                            </Link>
                        )) : <p>No blogs match your filters.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsGrid;
