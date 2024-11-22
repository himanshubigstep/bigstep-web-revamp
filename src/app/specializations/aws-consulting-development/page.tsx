'use client'
import { fetchAwsConsultingDevelopmentBenifits, fetchAwsConsultingDevelopmentData, fetchAwsConsultingDevelopmentFeatures, fetchAwsConsultingDevelopmentTechData, fetchHeaderData } from '@/api-data/api';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface AwsConsultingDevelopmentData {
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

const AwsConsultingDevelopment = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [awsConsultingDevelopmentData, setAwsConsultingDevelopmentData] = useState<AwsConsultingDevelopmentData | null>(null)
    const [awsConsultingDevelopmentFeaturesData, setAwsConsultingDevelopmentFeaturesData] = useState<any>([]);
    const [awsConsultingDevelopmentTechData, setAwsConsultingDevelopmentTechData] = useState<any>([]);
    const [awsConsultingDevelopmentBenifitsData, setAwsConsultingDevelopmentbenifitsData] = useState<any>([]);
  
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
        const fetchAwsConsultingDevelopmentDataResponse = async () => {
          try {
            const response = await fetchAwsConsultingDevelopmentData();
            setAwsConsultingDevelopmentData(response.attributes)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchAwsConsultingDevelopmentDataResponse();
      }, []);

      useEffect(() => {
        const awsConsultingDevelopmentFeaturesData = async () => {
          try {
            const response = await fetchAwsConsultingDevelopmentFeatures();
            setAwsConsultingDevelopmentFeaturesData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        awsConsultingDevelopmentFeaturesData();
      }, [])

      useEffect(() => {
        const awsConsultingDevelopmentTechData = async () => {
          try {
            const response = await fetchAwsConsultingDevelopmentTechData();
            setAwsConsultingDevelopmentTechData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        awsConsultingDevelopmentTechData();
      }, [])

      useEffect(() => {
        const awsConsultingDevelopmentBenifits = async () => {
          try {
            const response = await fetchAwsConsultingDevelopmentBenifits();
            setAwsConsultingDevelopmentbenifitsData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        awsConsultingDevelopmentBenifits();
      }, [])
    
      if (loading) {
        return <LoaderSpinner />;
      }
      
  return (
    <div className='poppins'>
        <TopBanner bannerData={awsConsultingDevelopmentData?.introduction} />
        <ServiceDataBlock
          title={awsConsultingDevelopmentData?.engaging_streaming_experience?.heading || ''}
          description={awsConsultingDevelopmentData?.engaging_streaming_experience?.description || ''}
          services={awsConsultingDevelopmentFeaturesData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-center items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-center flex flex-col gap-2'
        />
        <Parterners
          title={awsConsultingDevelopmentData?.cutting_edge_technologies?.heading || ''}
          description={awsConsultingDevelopmentData?.cutting_edge_technologies?.description || ''}
          techData={awsConsultingDevelopmentTechData || []}
          bgImage={awsConsultingDevelopmentData?.cutting_edge_technologies?.background_image?.data?.attributes?.url || ''}
        />
        <ServiceDataBlock
          title={awsConsultingDevelopmentData?.transformative_benefits?.heading || ''}
          description={awsConsultingDevelopmentData?.transformative_benefits?.description || ''}
          services={awsConsultingDevelopmentBenifitsData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/2 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col md:flex-row gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          buttonText={awsConsultingDevelopmentData?.transformative_benefits?.button_text || ''}
        />
        <ContactUs contactUsData = {awsConsultingDevelopmentData?.get_in_touch || []} />
    </div>
  )
}

export default AwsConsultingDevelopment