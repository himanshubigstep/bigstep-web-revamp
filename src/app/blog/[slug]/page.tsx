'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchBlogDetail, fetchBlogsData } from '@/api-data/api';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import BlogPageBanner from '@/app/components/common/blog-page-banner/BlogPageBanner';
import NewsLetter from '@/app/components/common/news-letter/NewsLetter';
import BlogAutor from '@/app/components/blog-detail-author/BlogAutor';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RelatedBlogs from '@/app/components/related-blogs/RelatedBlogs';
import Link from 'next/link';

interface Author {
    data: {
        attributes: {
            name: string;
            image: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        };
    };
}

interface Image {
    data: {
        attributes: {
            url: string;
            formats: {
                large: {
                    url: string;
                };
            };
        };
    };
}

interface BlogData {
    id: number;
    attributes: {
        heading: string;
        description: string;
        author: Author;
        image: Image;
        updatedAt: string;
        category: {
            data: {
                id: number;
                attributes: {
                    name: string;
                }
            }
        }
        slug: string;
    };
}

interface BlogDetailsPage {
    id: number;
    attributes: {
        get_in_touch: {
            id: number;
            button_text: string;
            description: string;
            heading: string;
            background_image: {
                data: {
                    attributes: {
                        formats: {
                            large: {
                                url: string;
                            }
                        }
                    }
                }
            }
        }
        latest_info: {
            id: number;
            heading: string;
            background_image: {
                data: {
                    attributes: {
                        formats: {
                            large: {
                                url: string;
                            }
                        }
                    }
                }
            }
        }
        related_blogs: {
            id: number;
            heading: string;
            description: string;
            background_image: {
                data: {
                    attributes: {
                        formats: {
                            large: {
                                url: string;
                            }
                        }
                    }
                }
            }
        }
    }
}

const BlogPostPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState<BlogData | null>(null);
    const [blogData, setBlogData] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState(true);
    const [blogPageData, setBlogPageData] = useState<BlogDetailsPage | null>(null);
    const [relatedBlogsByCategory, setRelatedBlogsByCategory] = useState<BlogData[]>([]);

    useEffect(() => {
        const fetchBlogDetailsPage = async () => {
            try {
                const response = await fetchBlogDetail();
                setBlogPageData(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogDetailsPage();
    }, []);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const data = await fetchBlogsData();
                setBlogData(data.data);
                const blogSlug = Array.isArray(slug) ? slug[0] : slug;
                const blogPost = data.data.find((item: BlogData) => item.attributes.slug.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\//g, '-')
                .replace(/[^a-z0-9\-]/g, '') == decodeURIComponent(blogSlug).toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/\//g, '-')
                .replace(/[^a-z0-9\-]/g, ''));
                setBlog(blogPost || null);
                if (blogPost) {
                    const categoryName = blogPost.attributes.category.data.attributes.name;
                    const relatedBlogs = data.data.filter((item: BlogData) =>
                        item.attributes.category.data.attributes.name === categoryName && item.attributes.slug !== blogPost.attributes.slug
                    );
                    setRelatedBlogsByCategory(relatedBlogs);
                }
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlogData();
        }
    }, [slug]);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options); // You can change 'en-US' to your desired locale
    };

    if (loading || !blog) {
        return <LoaderSpinner />;
    }

    return (
        <div className='poppins'>
            <BlogPageBanner bannerData={blog?.attributes} />
            <div id='read-more-section' className='w-full h-full max-w-[1440px] mx-auto lg:py-16 py-6 flex lg:flex-row md:flex-row flex-col justify-between items-start lg:gap-8 gap-4 px-4'>
                <div className='w-full lg:max-w-[70%] max-w-full h-full flex flex-col lg:justify-between lg:items-center gap-4 relative'>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?.attributes?.image?.data?.attributes?.url}`}
                        alt='image'
                        className='w-full h-full rounded-2xl'
                    />
                    <div className='w-full h-full flex flex-col justify-center items-start'>
                        <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold mb-4'>{blog?.attributes?.heading}</h2>
                        <span className='flex justify-start items-center gap-4 mb-4'>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url}`}
                                alt={blog?.attributes?.author?.data?.attributes?.name}
                                className='w-12 h-12 rounded-full border-[1px]'
                            />
                            <span className='flex flex-col justify-center items-start'>
                                <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal'>{blog?.attributes?.author?.data?.attributes?.name}</p>
                                <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal'>{`Updated on : ${formatDate(blog?.attributes?.updatedAt)}`}</p>
                            </span>
                        </span>

                        <div className='lg:text-xl md:text-lg sm:text-md text-sm font-normal'>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h2: ({ children }) => <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold my-4">{children}</h2>,
                                    h3: ({ children }) => <h3 className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold my-3">{children}</h3>,
                                    p: ({ children }) => <p className="mb-4">{children}</p>,
                                    ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                                    li: ({ children }) => <li className="mb-2">{children}</li>,
                                    a: ({ href, children }) => {
                                        if (href && href.includes("mailto:")) {
                                            return (
                                                <a href={href} className="text-blue-500 hover:text-blue-800">{children}</a>
                                            );
                                        }
                                        return <a href={href} className="text-blue-500 hover:text-blue-800">{children}</a>;
                                    }
                                }}
                            >
                                {blog?.attributes?.description || ''}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[30%] md:max-w-[30%] max-w-full'>
                    <NewsLetter
                        latest_info={blogPageData?.attributes?.latest_info}
                        classNameOptional={true}
                        formClass={true}
                        isBanner={false}
                    />
                    <RelatedBlogs
                        related_blogs={blogPageData?.attributes?.related_blogs}
                        related_blogs_by_category={relatedBlogsByCategory}
                    />
                    {/* <div className='w-full h-full flex flex-col gap-4 md:p-8 p-4 md:mt-16 mt-8 bg-blue-300 rounded-3xl'>
                        <div className='w-full h-full flex flex-col gap-4'>
                            <h2 className='text-3xl font-semibold'>Categories</h2>
                            <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 gap-2'>
                                {blogData &&
                                    // Step 1: Convert Set to array using Array.from()
                                    Array.from(new Set(blogData.map((item: any) => item?.attributes?.category?.data?.attributes?.name))).map((categoryName: string, index: number) => (
                                        <Link
                                            href={`/category/${categoryName}`}
                                            key={index}
                                            className='w-full h-full flex p-4 rounded-lg bg-blue-400'
                                        >
                                            <p className='text-sm font-medium'>{categoryName}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <BlogAutor authorBlog={blog?.attributes?.author?.data?.attributes} />
        </div>
    );
};

export default BlogPostPage;
