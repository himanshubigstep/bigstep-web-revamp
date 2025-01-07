'use client'
import { fetchBlogsData, fetchBlogsPageData } from '@/api-data/api';
import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import TopBanner from '../components/common/top-banner/TopBanner';
import BlogsGrid from '../components/blogs-grid/BlogsGrid';
import Head from 'next/head';

interface Author {
  data: {
    attributes: {
      name: string;
      image: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }
  }
}

interface Category {
  data: {
    attributes: {
      name: string;
    }
  }
}

interface Image {
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

interface BlogDataProps {
  id: number;
  attributes: {
    heading: string;
    description: string;
    author: Author;
    category: Category;
    image: Image;
    seo: {
      metaTitle: string;
      metaDescription: string;
      canonicalURL: string;
    }
  }
}

interface blogPageProps {
  attributes: {
    intro: {
      background_image: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string
              }
            }
          }
        }[]
      };
      heading: string;
      description: string;
      link: string;
    }[];
    latest_info: {
      background_image: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string
              }
            }
          }
        }
      };
      button_text: string;
      description: string;
    }
    blog_page_section: {
      heading: string;
      description: string;
    }
    seo: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      canonicalURL: string;
    }
  }
}

const Blogs = () => {
  const [blogPageData, setBlogPageData] = useState<blogPageProps | null>(null);
  const [categories, setCategories] = useState<BlogDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const pageData = await fetchBlogsPageData();
        setBlogPageData(pageData);
        let allBlogsData: BlogDataProps[] = [];
        let serviceResponse = await fetchBlogsData(1);

        allBlogsData = allBlogsData.concat(serviceResponse?.data || []);
        while (serviceResponse?.meta?.pagination.page < serviceResponse?.meta?.pagination.pageCount) {
          const nextPage = serviceResponse.meta.pagination.page + 1;
          serviceResponse = await fetchBlogsData(nextPage);
          allBlogsData = allBlogsData.concat(serviceResponse?.data || []);
        }

        setCategories(allBlogsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (blogPageData) {
      document.title = blogPageData?.attributes?.seo?.metaTitle || "Default Title";
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = blogPageData?.attributes?.seo?.metaDescription || "Default description";
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = blogPageData?.attributes?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [blogPageData]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  if (loading) {
    return <LoaderSpinner />
  }

  const processedCategories = () => {
    const uniqueCategoriesMap = new Map();
    categories.forEach(item => {
      const categoryName = item?.attributes?.category?.data?.attributes?.name;
      if (categoryName) {
        if (!uniqueCategoriesMap.has(categoryName)) {
          uniqueCategoriesMap.set(categoryName, {
            name: categoryName,
            items: [item]
          });
        } else {
          uniqueCategoriesMap.get(categoryName).items.push(item);
        }
      }
    });

    return Array.from(uniqueCategoriesMap.values());
  };

  return (
    <div className='poppins relative bg-white dark:bg-black w-full h-full'>
      <Head>
        <link rel="canonical" href={blogPageData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={blogPageData?.attributes?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={blogPageData?.attributes?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={blogPageData?.attributes?.intro[0]} isBlog={true} />
      <BlogsGrid
        categories={processedCategories()}
      />
    </div>
  )
}

export default Blogs