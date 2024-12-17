'use client'
import { fetchBlogsData, fetchBlogsPageData } from '@/api-data/api';
import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import TopBanner from '../components/common/top-banner/TopBanner';
import NewsLetter from '../components/common/news-letter/NewsLetter';
import AITech from '../components/common/ai-tech/AITech';
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

        // Fetch the page data (static)
        const pageData = await fetchBlogsPageData();
        setBlogPageData(pageData);

        // Fetch all blog data with pagination
        let allBlogsData: BlogDataProps[] = [];
        let serviceResponse = await fetchBlogsData(1); // Start from the first page

        // Push the first page's data
        allBlogsData = allBlogsData.concat(serviceResponse?.data || []);

        // Loop through and fetch remaining pages
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
      // Set document title
      document.title = blogPageData?.attributes?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = blogPageData?.attributes?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = blogPageData?.attributes?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [blogPageData]);

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
      <TopBanner bannerData={blogPageData?.attributes?.intro[0]} />
      <NewsLetter latest_info={blogPageData?.attributes?.latest_info} />
      <AITech
        bannerTitle={blogPageData?.attributes?.blog_page_section.heading || ''}
        bannerDescription={blogPageData?.attributes?.blog_page_section.description || ''}
        isBlog={true}
      />
      <BlogsGrid
        categories={processedCategories()}
      />
    </div>
  )
}

export default Blogs