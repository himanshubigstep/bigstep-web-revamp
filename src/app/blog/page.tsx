'use client'
import { fetchBlogsData, fetchBlogsPageData } from '@/api-data/api';
import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import TopBanner from '../components/common/top-banner/TopBanner';
import NewsLetter from '../components/common/news-letter/NewsLetter';
import AITech from '../components/common/ai-tech/AITech';
import BlogsGrid from '../components/blogs-grid/BlogsGrid';

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