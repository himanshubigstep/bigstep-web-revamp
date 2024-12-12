'use client'
import { fetchModalBoxHomePage, fetchtechnologies, fetchTechnologyData, fetchTechnologyDataService } from '@/api-data/api';
import React, { useEffect, useState } from 'react'
import TopBanner from '../components/common/top-banner/TopBanner';
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import PartnersTech from '../components/common/partner-common-block/PartnersTech';
import ServiceDataBlock from '../components/common/service-data-block/ServiceDataBlock';
import ContactUs from '../components/common/contact-us/ContactUs';
import ModelBox from '../components/model-box/ModelBox';
import Head from 'next/head';

interface TechnologiesPageData {
  get_in_touch: {
    background_image: {
      data: {
        attributes: {
          formats: {
            large: {
              large: {
                url: string
              }
            }
          }
        }
      }
    }
    button_text: string
    description: string
    heading: string
    id: number
  }
  technological_experties: {
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
    }
    button_text: string
    description: string
    heading: string
    id: number
  }
  technologies_introduction: {
    id: number
    description: string
    heading: string
    link: string;
    backgroundImage: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string
            }
          }
        }
      }[]
    }
  }
  our_tech_stack: {
    id: number
    heading: string
    description: string
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
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalURL: string;
  }
}

interface closingModalBoxData {
  id: number;
  attributes: {
    category: string;
    Modal_closing: {
      id: number;
      heading: string;
      description: string;
      label: string;
      link: string;
      buttonText: string;
      backgroundImage: {
        data: {
          id: number;
          attributes: {
            url: string;
          }
        }[]
      }
    }[]
  }
}

const Technologies = () => {
    const [technologyData, setTechnologyData] = useState<TechnologiesPageData | null>(null)
    const [technologiesData, setTechnologiesData] = useState<any>([]);
    const [techPageServiceData, setTechPageServiceData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [modalBoxData, setModalBoxData] = useState<closingModalBoxData | null>(null);
  
    useEffect(() => {
      const fetchModalBoxDataSection = async () => {
        try {
          const response = await fetchModalBoxHomePage();
          setModalBoxData(response);
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          setLoading(false);
        }
      }
  
      fetchModalBoxDataSection();
    }, [])
  
    useEffect(() => {
      const fetchTechnologyPageDataResponse = async () => {
        try {
          const response = await fetchTechnologyData();
          setTechnologyData(response.attributes)
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTechnologyPageDataResponse();
    }, []);
  
    useEffect(() => {
      const fetchTechnologiesData = async () => {
        try {
          let serviceResponse = await fetchtechnologies();
          let allServiceData = serviceResponse?.data || [];
  
          while (serviceResponse?.meta?.pagination.page < serviceResponse?.meta?.pagination.pageCount) {
            const nextPage = serviceResponse.meta.pagination.page + 1;
            serviceResponse = await fetchtechnologies(nextPage);
            allServiceData = allServiceData.concat(serviceResponse?.data || []);
          }
          setTechnologiesData(allServiceData);
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          setLoading(false);
        }
      }
  
      fetchTechnologiesData()
    }, [])

    useEffect(() => {
      const fetchtechPageServiceData = async () => {
        try {
          const response = await fetchTechnologyDataService();
          setTechPageServiceData(response);
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          setLoading(false);
        }
      }
  
      fetchtechPageServiceData();
    }, [])

    useEffect(() => {
      if (technologyData) {
        // Set document title
        document.title = technologyData?.seo?.metaTitle || "Default Title";
    
        // Select meta description tag
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
        // If meta description doesn't exist, create it
        if (!metaDescription) {
          metaDescription = document.createElement("meta");
          metaDescription.name = "description";
          document.head.appendChild(metaDescription);
        }
    
        // Set content for the meta description
        metaDescription.content = technologyData?.seo?.metaDescription || "Default description";
    
        // Select canonical link tag
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
        // If canonical link doesn't exist, create it
        if (!canonicalLink) {
          canonicalLink = document.createElement("link");
          canonicalLink.rel = "canonical";
          document.head.appendChild(canonicalLink);
        }
    
        // Set href for the canonical link
        canonicalLink.href = technologyData?.seo?.canonicalURL || "default-canonical-url";
      }
    }, [technologyData]);

    if (loading) {
      return <LoaderSpinner />;
    }

  return (
    <div className='poppins'>
        <Head>
          <link rel="canonical" href={technologyData?.seo?.canonicalURL || "default-canonical-url"} />
          <meta name="title" content={technologyData?.seo?.metaTitle || "Default description"} />
          <meta name="description" content={technologyData?.seo?.metaDescription || "Default Description"} />
        </Head>
        <TopBanner bannerData={technologyData?.technologies_introduction} />
        <PartnersTech
          title={technologyData?.our_tech_stack?.heading || ''}
          description={technologyData?.our_tech_stack?.description || ''}
          techData = {technologiesData}
          bannerImage={technologyData?.our_tech_stack?.images?.data?.attributes?.formats?.large?.url || ''}
        />
        <ServiceDataBlock
          title={technologyData?.technological_experties?.heading || ''}
          description={technologyData?.technological_experties?.description || ''}
          services={techPageServiceData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/3 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-center items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col gap-4 items-center'
          serviceItemDescription='w-full text-center flex flex-col gap-2'
          buttonText={technologyData?.technological_experties?.button_text || ''}
          serviceHeding='lg:line-clamp-none text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
        />
        <ContactUs contactUsData={technologyData?.get_in_touch} />
        <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default Technologies