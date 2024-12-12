'use client'
import { fetchCulturePageData } from '@/api-data/api';
import CommonBlock from '@/app/components/common/common-blocks-division/CommonBlock';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import CultureServiceBlock from '@/app/components/culture-service-block/CultureServiceBlock';
import CultureTopSlider from '@/app/components/culture-top-slider/CultureTopSlider'
import StarDom from '@/app/components/stardom/StarDom';
import StrengthStrip from '@/app/components/streanth-strip/StrengthStrip';
import VideoPlayerComponent from '@/app/components/video-player-component/VideoPlayerComponent';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'

interface CulturePageData {
  id: number;
  bigstep_annual_heading: {
    id: number;
    heading: string;
    description: string;
  }
  core_values_heading: {
    id: number;
    heading: string;
    description: string;
  }
  core_values_data: {
    id: number;
    heading: string;
    description: string;
    hex_code: string;
    serviceLogo: {
      data: {
        attributes: {
          formats: {
            url: string
          }
        }
      }
    }
  }[]
  cultural_bigstepians: {
    id: number;
    heading: string;
    description: string;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
  }
  cultural_bigstepians_data: {
    id: number;
    heading: string;
    description: string;
    image: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
  }[]
  employee_data: {
    id: number;
    heading: string;
    description: string;
  }[]
  intro: {
    id: number;
    heading: string;
    description: string;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
  }[]
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalURL: string;
  }
}

const CulturePage = () => {
  const [culturalPageData, setCulturalPageData] = useState<CulturePageData | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCulturePageDataResponse = async () => {
      try {
        const response = await fetchCulturePageData();
        setCulturalPageData(response.attributes);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCulturePageDataResponse();
  }, []);

  useEffect(() => {
    if (culturalPageData) {
      // Set document title
      document.title = culturalPageData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = culturalPageData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = culturalPageData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [culturalPageData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  const firstRowData = culturalPageData?.cultural_bigstepians_data.slice(0, 3)
  const secondRowData = culturalPageData?.cultural_bigstepians_data.slice(3)

  const mappedSlides = culturalPageData?.intro?.map((item) => ({
    id: item.id,
    attributes: {
      button_link: '',
      button_text: '',
      category: '',
      text_body: item.description,
      title: item.heading,
      image: {
        data: {
          attributes: {
            url: item.images.data.attributes.url,
            ext: item.images.data.attributes.formats.large.url.split('.').pop() || '',
          },
        },
      },
    },
  }));

  return (
    <div className='poppins relative w-full h-full'>
      <Head>
        <link rel="canonical" href={culturalPageData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={culturalPageData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={culturalPageData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <CultureTopSlider slides={mappedSlides} />
      <StrengthStrip employeeData={culturalPageData?.employee_data} />
      <CultureServiceBlock
        title={culturalPageData?.core_values_heading?.heading || ''}
        description={culturalPageData?.core_values_heading?.description || ''}
        services={culturalPageData?.core_values_data}
        containerClassName='relative w-full max-w-[1440px] mx-auto lg:pt-16 md:pt-16 pt-8 px-4'
        logoClassName='lg:w-auto w-full lg:h-full lg:object-fill object-cover'
        titleClassName='text-3xl font-semibold text-center mb-4'
        descriptionClassName='text-lg font-normal '
        serviceContainerClassName='relative w-full flex flex-wrap text-center'
        serviceItemClassName='lg:mt-8 flex flex-col justify-center lg:w-1/3 md:w-1/3 w-1/2 lg:px-12 lg:py-6 lg:px-4 py-4 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconClassName='rounded-full w-16 h-16 flex justify-center items-center lg:mr-4 md:mr-4 mr-0 lg:mb-0 md:mb-0 mb-4'
        buttonClassName='rounded-full text-white px-4 py-2 mx-2 bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none'
        serviceHeaderClassName="w-[calc(100%-4rem)] text-left flex flex-col gap-2"
      />
      <StarDom
        heading={culturalPageData?.cultural_bigstepians?.heading || ''}
        description={culturalPageData?.cultural_bigstepians?.description || ''}
        backgroundImage={culturalPageData?.cultural_bigstepians?.images?.data?.attributes?.formats?.large?.url || ''}
        firstRowClass="grid w-full grid-cols-3 gap-8 justify-center items-center px-8 relative z-10"
        secondRowClass="grid w-full grid-cols-3 gap-8 justify-center items-center px-8 relative z-10 mt-8"
        firstRowData={firstRowData}
        secondRowData={secondRowData}
      />
      <VideoPlayerComponent
        videoSectionData={culturalPageData?.bigstep_annual_heading}
      />
    </div>
  )
}

export default CulturePage