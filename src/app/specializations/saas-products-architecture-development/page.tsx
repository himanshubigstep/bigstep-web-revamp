'use client'
import { fetchHeaderData, fetchSaasProductDevelopmentBenifits, fetchSaasProductDevelopmentData, fetchSaasProductDevelopmentFeatures, fetchSaasProductDevelopmentTechData } from '@/api-data/api';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface SaasProductDevelopmentData {
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
    backgroundImage: {
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

const SaasProductDevelopment = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [saasProductDevelopmentData, setSaasProductDevelopmentData] = useState<SaasProductDevelopmentData | null>(null)
    const [saasProductDevelopmentFeaturesData, setSaasProductDevelopmentFeaturesData] = useState<any>([]);
    const [saasProductDevelopmentTechData, setSaasProductDevelopmentTechData] = useState<any>([]);
    const [saasProductDevelopmentBenifitsData, setSaasProductDevelopmentbenifitsData] = useState<any>([]);
  
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
        const fetchSaasProductDevelopmentDataResponse = async () => {
          try {
            const response = await fetchSaasProductDevelopmentData();
            setSaasProductDevelopmentData(response.attributes)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchSaasProductDevelopmentDataResponse();
      }, []);

      useEffect(() => {
        const saasProductDevelopmentFeaturesData = async () => {
          try {
            const response = await fetchSaasProductDevelopmentFeatures();
            setSaasProductDevelopmentFeaturesData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        saasProductDevelopmentFeaturesData();
      }, [])

      useEffect(() => {
        const saasProductDevelopmentTechData = async () => {
          try {
            const response = await fetchSaasProductDevelopmentTechData();
            setSaasProductDevelopmentTechData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        saasProductDevelopmentTechData();
      }, [])

      useEffect(() => {
        const saasProductDevelopmentBenifits = async () => {
          try {
            const response = await fetchSaasProductDevelopmentBenifits();
            setSaasProductDevelopmentbenifitsData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        saasProductDevelopmentBenifits();
      }, [])
    
      if (loading) {
        return <LoaderSpinner />;
      }
      
  return (
    <div className='poppins'>
        <TopBanner bannerData={saasProductDevelopmentData?.introduction} />
        <ServiceDataBlock
          title={saasProductDevelopmentData?.engaging_streaming_experience?.heading || ''}
          description={saasProductDevelopmentData?.engaging_streaming_experience?.description || ''}
          services={saasProductDevelopmentFeaturesData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-center items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-center flex flex-col gap-2'
        />
        <Parterners
          title={saasProductDevelopmentData?.cutting_edge_technologies?.heading || ''}
          description={saasProductDevelopmentData?.cutting_edge_technologies?.description || ''}
          techData={saasProductDevelopmentTechData || []}
        />
        <ServiceDataBlock
          title={saasProductDevelopmentData?.transformative_benefits?.heading || ''}
          description={saasProductDevelopmentData?.transformative_benefits?.description || ''}
          services={saasProductDevelopmentBenifitsData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/2 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col md:flex-row gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          buttonText={saasProductDevelopmentData?.transformative_benefits?.button_text || ''}
          bgImage={saasProductDevelopmentData?.transformative_benefits?.background_image?.data?.attributes?.formats?.large?.url || ''}
          logoClassName='md:w-auto w-full md:h-full'
        />
        <ContactUs contactUsData = {saasProductDevelopmentData?.get_in_touch || []} />
    </div>
  )
}

export default SaasProductDevelopment