'use client'
import { fetchContentManagementSystemsBenifits, fetchContentManagementSystemsData, fetchContentManagementSystemsFeatures, fetchContentManagementSystemsTechData, fetchHeaderData } from '@/api-data/api';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface ContentManagementSystemsData {
  get_in_touch: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
    background_image: {
      data: {
        id: number;
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
  engaging_streaming_experience: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
    background_image: {
      data: {
        id: number;
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
  introduction: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
    label: string
    link: string;
    backgroundImage: {
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
      }[]
    }
    displayImage: {
      data: {
        id: number;
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
  cutting_edge_technologies: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
    button_link: string;
    background_image: {
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
  }
  transformative_benefits: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
    background_image: {
      data: {
        id: number;
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

interface headerDataLink {
  id: number;
  attributes: {
    heading_blogs: {
      link: string
    }
    heading_company: {
      items_on_left: {
        item_link: string
      }[]
    }
    heading_how_we_do: {
      items_on_left: {
        item_link: string
      }[]
      items_on_right: {
        item_link: string
      }[]
    }
    heading_lets_talk: {
      item_link: string
    }
    heading_what_we_do: {
      items_on_left: {
        item_link: string
      }[]
      items_on_right: {
        item_link: string
      }[]
    }
  }
}

const ContentManagementSystems = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [contentManagementSystemsData, setContentManagementSystemsData] = useState<ContentManagementSystemsData | null>(null)
    const [contentManagementSystemsFeaturesData, setContentManagementSystemsFeaturesData] = useState<any>([]);
    const [contentManagementSystemsTechData, setContentManagementSystemsTechData] = useState<any>([]);
    const [contentManagementSystemsBenifitsData, setContentManagementSystemsbenifitsData] = useState<any>([]);
  
    const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);
  
    const router = useRouter();

    useEffect(() => {
        const fetchHeaderDataResponse = async () => {
          try {
            const response = await fetchHeaderData();
            setHeaderDataLink(response);
          } catch (error) {
            console.log(error);
            return null;
          }
        }
    
        fetchHeaderDataResponse();
      }, [])
      
      useEffect(() => {
        const fetchContentManagementSystemsDataResponse = async () => {
          try {
            const response = await fetchContentManagementSystemsData();
            setContentManagementSystemsData(response.attributes)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchContentManagementSystemsDataResponse();
      }, []);

      useEffect(() => {
        const contentManagementSystemsFeaturesData = async () => {
          try {
            const response = await fetchContentManagementSystemsFeatures();
            setContentManagementSystemsFeaturesData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        contentManagementSystemsFeaturesData();
      }, [])

      useEffect(() => {
        const contentManagementSystemsTechData = async () => {
          try {
            const response = await fetchContentManagementSystemsTechData();
            setContentManagementSystemsTechData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        contentManagementSystemsTechData();
      }, [])

      useEffect(() => {
        const contentManagementSystemsBenifits = async () => {
          try {
            const response = await fetchContentManagementSystemsBenifits();
            setContentManagementSystemsbenifitsData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        contentManagementSystemsBenifits();
      }, [])

      useEffect(() => {
        if (contentManagementSystemsData) {
          // Set document title
          document.title = contentManagementSystemsData?.seo?.metaTitle || "Default Title";
      
          // Select meta description tag
          let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      
          // If meta description doesn't exist, create it
          if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
          }
      
          // Set content for the meta description
          metaDescription.content = contentManagementSystemsData?.seo?.metaDescription || "Default description";
      
          // Select canonical link tag
          let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
          // If canonical link doesn't exist, create it
          if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.rel = "canonical";
            document.head.appendChild(canonicalLink);
          }
      
          // Set href for the canonical link
          canonicalLink.href = contentManagementSystemsData?.seo?.canonicalURL || "default-canonical-url";
        }
      }, [contentManagementSystemsData]);
    
      if (loading) {
        return <LoaderSpinner />;
      }
      
  return (
    <div className='poppins'>
        <Head>
          <link rel="canonical" href={contentManagementSystemsData?.seo?.canonicalURL || "default-canonical-url"} />
          <meta name="title" content={contentManagementSystemsData?.seo?.metaTitle || "Default description"} />
          <meta name="description" content={contentManagementSystemsData?.seo?.metaDescription || "Default Description"} />
        </Head>
        <TopBanner bannerData={contentManagementSystemsData?.introduction} />
        <ServiceDataBlock
          title={contentManagementSystemsData?.engaging_streaming_experience?.heading || ''}
          description={contentManagementSystemsData?.engaging_streaming_experience?.description || ''}
          services={contentManagementSystemsFeaturesData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/3 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col gap-4 items-center'
          serviceItemDescription='w-full text-center md:text-center sm:text-center text-left flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
        />
        <Parterners
          title={contentManagementSystemsData?.cutting_edge_technologies?.heading || ''}
          description={contentManagementSystemsData?.cutting_edge_technologies?.description || ''}
          buttonText={contentManagementSystemsData?.cutting_edge_technologies?.button_text || ''}
          buttonLink={contentManagementSystemsData?.cutting_edge_technologies?.button_link || ''}
          techData={contentManagementSystemsTechData || []}
          bgImage={contentManagementSystemsData?.cutting_edge_technologies?.background_image?.data?.attributes?.url || ''}
        />
        <ServiceDataBlock
          title={contentManagementSystemsData?.transformative_benefits?.heading || ''}
          description={contentManagementSystemsData?.transformative_benefits?.description || ''}
          services={contentManagementSystemsBenifitsData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-4 md:gap-4 sm:gap-4 gap-2 lg:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none text-left line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
          buttonText={contentManagementSystemsData?.transformative_benefits?.button_text || ''}
        />
        <ContactUs contactUsData = {contentManagementSystemsData?.get_in_touch || []} />
    </div>
  )
}

export default ContentManagementSystems