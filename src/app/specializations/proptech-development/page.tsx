'use client'
import { fetchHeaderData, fetchModalBoxPropTechPage, fetchPropTechDevelopmentBenifits, fetchPropTechDevelopmentData, fetchPropTechDevelopmentFeatures, fetchPropTechDevelopmentTechData } from '@/api-data/api';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import ModelBox from '@/app/components/model-box/ModelBox';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface PropTechDevelopmentData {
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
  engaging_streamin_experties: {
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
  cutting_edge_technology: {
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
  transformative_benifits: {
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

const PropTechDevelopment = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [propsTechDevelopmentData, setPropTechDevelopmentData] = useState<PropTechDevelopmentData | null>(null)
    const [propsTechDevelopmentFeaturesData, setPropsTechDevelopmentFeaturesData] = useState<any>([]);
    const [propsTechDevelopmentTechData, setPropsTechDevelopmentTechData] = useState<any>([]);
    const [propsTechDevelopmentBenifitsData, setPropsTechDevelopmentBenifitsData] = useState<any>([]);
  
    const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);
  
    const router = useRouter();

    const [modalBoxData, setModalBoxData] = useState<closingModalBoxData | null>(null);
  
    useEffect(() => {
      const fetchModalBoxDataSection = async () => {
        try {
          const response = await fetchModalBoxPropTechPage();
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
        const fetchLiveStreamingDataResponse = async () => {
          try {
            const response = await fetchPropTechDevelopmentData();
            setPropTechDevelopmentData(response.attributes)
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchLiveStreamingDataResponse();
      }, []);

      useEffect(() => {
        const propsTechDevelopmentFeaturesData = async () => {
          try {
            const response = await fetchPropTechDevelopmentFeatures();
            setPropsTechDevelopmentFeaturesData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        propsTechDevelopmentFeaturesData();
      }, [])

      useEffect(() => {
        const propsTechDevelopmentTechData = async () => {
          try {
            const response = await fetchPropTechDevelopmentTechData();
            setPropsTechDevelopmentTechData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        propsTechDevelopmentTechData();
      }, [])

      useEffect(() => {
        const liveStreamingBenifits = async () => {
          try {
            const response = await fetchPropTechDevelopmentBenifits();
            setPropsTechDevelopmentBenifitsData(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
    
        liveStreamingBenifits();
      }, [])
    
      if (loading) {
        return <LoaderSpinner />;
      }
      
  return (
    <div className='poppins'>
        <TopBanner bannerData={propsTechDevelopmentData?.introduction} />
        <ServiceDataBlock
          title={propsTechDevelopmentData?.engaging_streamin_experties?.heading || ''}
          description={propsTechDevelopmentData?.engaging_streamin_experties?.description || ''}
          services={propsTechDevelopmentFeaturesData[0]?.attributes?.service_data || []}
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
          title={propsTechDevelopmentData?.cutting_edge_technology?.heading || ''}
          description={propsTechDevelopmentData?.cutting_edge_technology?.description || ''}
          buttonText={propsTechDevelopmentData?.cutting_edge_technology?.button_text || ''}
          buttonLink={propsTechDevelopmentData?.cutting_edge_technology?.button_link || ''}
          techData={propsTechDevelopmentTechData || []}
          bgImage={propsTechDevelopmentData?.cutting_edge_technology?.background_image?.data?.attributes?.url || ''}
        />
        <ServiceDataBlock
          title={propsTechDevelopmentData?.transformative_benifits?.heading || ''}
          description={propsTechDevelopmentData?.transformative_benifits?.description || ''}
          services={propsTechDevelopmentBenifitsData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-row lg:gap-4 md:gap-4 sm:gap-4 gap-2 lg:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none text-left line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
          buttonText={propsTechDevelopmentData?.transformative_benifits?.button_text || ''}
        />
        <ContactUs contactUsData = {propsTechDevelopmentData?.get_in_touch || []} />
        <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default PropTechDevelopment