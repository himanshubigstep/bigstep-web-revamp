'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchBlogDetail, fetchBlogsData } from '@/api-data/api';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import BlogAutor from '@/app/components/blog-detail-author/BlogAutor';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RelatedBlogs from '@/app/components/related-blogs/RelatedBlogs';
import Head from 'next/head';

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
        upload_date: string;
        category: {
            data: {
                id: number;
                attributes: {
                    name: string;
                }
            }
        }
        slug: string;
        seo: {
            metaTitle: string;
            metaDescription: string;
            canonicalURL: string;
        }
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
                let allBlogsData: BlogData[] = [];
                let serviceResponse = await fetchBlogsData(1);

                allBlogsData = allBlogsData.concat(serviceResponse?.data || []);
                while (serviceResponse?.meta?.pagination.page < serviceResponse?.meta?.pagination.pageCount) {
                    const nextPage = serviceResponse.meta.pagination.page + 1;
                    serviceResponse = await fetchBlogsData(nextPage);
                    allBlogsData = allBlogsData.concat(serviceResponse?.data || []);
                }

                setBlogData(allBlogsData);

                const blogSlug = Array.isArray(slug) ? slug[0] : slug;
                const blogPost = allBlogsData.find(
                    (item: BlogData) =>
                        item.attributes.slug
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/\//g, '-')
                            .replace(/[^a-z0-9\-]/g, '') ===
                        decodeURIComponent(blogSlug)
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/\//g, '-')
                            .replace(/[^a-z0-9\-]/g, '')
                );

                setBlog(blogPost || null);

                if (blogPost) {
                    const categoryName = blogPost.attributes.category.data.attributes.name;
                    const relatedBlogs = allBlogsData.filter(
                        (item: BlogData) =>
                            item.attributes.category.data.attributes.name === categoryName &&
                            item.attributes.slug !== blogPost.attributes.slug
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
        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        if (blog) {
            document.title = blog?.attributes?.seo?.metaTitle || "Default Title";
            let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
            if (!metaDescription) {
                metaDescription = document.createElement("meta");
                metaDescription.name = "description";
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = blog?.attributes?.seo?.metaDescription || "Default description";
            let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!canonicalLink) {
                canonicalLink = document.createElement("link");
                canonicalLink.rel = "canonical";
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.href = blog?.attributes?.seo?.canonicalURL || "default-canonical-url";
        }
    }, [blog]);

    useEffect(() => {
        if (!loading) {
            window.scrollTo(0, 0);
        }
    }, [loading]);

    if (loading || !blog) {
        return <LoaderSpinner />;
    }

    return (
        <div className='poppins'>
            <Head>
                <link rel="canonical" href={blog?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
                <meta name="title" content={blog?.attributes?.seo?.metaTitle || "Default description"} />
                <meta name="description" content={blog?.attributes?.seo?.metaDescription || "Default Description"} />
            </Head>
            <div id='read-more-section' className='w-full h-full max-w-[1440px] mx-auto lg:py-16 py-6 flex lg:flex-row md:flex-row flex-col justify-between items-start lg:gap-8 gap-4 px-4'>
                <div className='w-full lg:max-w-[70%] max-w-full h-full flex flex-col lg:justify-between lg:items-center gap-4 relative'>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?.attributes?.image?.data?.attributes?.url}`}
                        alt='image'
                        className='w-full h-full rounded-2xl'
                    />
                    <div className='w-full h-full flex flex-col justify-center items-start'>
                        <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold my-4'>{blog?.attributes?.heading}</h2>
                        <span className='flex justify-start items-center gap-4 mb-4'>
                            <span className='flex flex-col justify-center items-start'>
                                <p className='lg:text-lg md:text-md sm:text-sm text-xs font-semibold'>{`Published on : ${formatDate(blog?.attributes?.upload_date)}`}</p>
                            </span>
                        </span>

                        <div className='lg:text-xl md:text-lg sm:text-md text-sm font-normal w-full'>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h2: ({ children }) => <h2 className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold my-4">{children}</h2>,
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
                                        return <a href={href} className="text-blue-500 hover:text-blue-800" target='_blank'>{children}</a>;
                                    }
                                }}
                            >
                                {blog?.attributes?.description || ''}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[30%] md:max-w-[30%] max-w-full'>
                    <RelatedBlogs
                        related_blogs={blogPageData?.attributes?.related_blogs}
                        related_blogs_by_category={relatedBlogsByCategory}
                    />
                </div>
            </div>
            <BlogAutor authorBlog={blog?.attributes?.author?.data?.attributes} />
        </div>
    );
};

export default BlogPostPage;
