'use client'
import { fetchBackendDevelopmentChooseUs, fetchBackendDevelopmentData, fetchBackendDevelopmentTech, fetchHeaderData } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface BackendDevelopmentPageData {
  id: number;
  blogs: {
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
  }
  client_reviews: {
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
  }
  backend_intro: {
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
    buttonText: string
    description: string
    heading: string
  }[]
  get_in_touch: {
    button_text: string
    description: string
    heading: string
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
  }
  technologies: {
    button_text: string
    description: string
    heading: string
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
  }
  why_choose: {
    buttonText: string
    description: string
    heading: string
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
  }[]
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

const BackendEngineering = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [backendDevelopmentData, setBackendDevelopmentData] = useState<BackendDevelopmentPageData | null>(null)
  const [backendDevelopmentChooseUs, setBackendDevelopmentChooseUs] = useState<any>([]);
  const [backendDevelopmentTechData, setBackendDevelopmentTechData] = useState<any>([]);
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
    const fetchBackendDevelopmentResponse = async () => {
      try {
        const response = await fetchBackendDevelopmentData();
        setBackendDevelopmentData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBackendDevelopmentResponse();
  }, []);

  useEffect(() => {
    const backendDevelopmentTechResponse = async () => {
      try {
        const response = await fetchBackendDevelopmentTech();
        setBackendDevelopmentTechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    backendDevelopmentTechResponse();
  }, []);

  useEffect(() => {
    const backendDevelopmentChoose = async () => {
      try {
        const response = await fetchBackendDevelopmentChooseUs();
        setBackendDevelopmentChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    backendDevelopmentChoose();
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <TopBanner bannerData={backendDevelopmentData?.backend_intro[0]} />
      <ServiceDataBlock
        title={backendDevelopmentData?.why_choose[0].heading || ''}
        description={backendDevelopmentData?.why_choose[0].description || ''}
        services={backendDevelopmentChooseUs[0]?.attributes?.service_data || []}
        showButton={false}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
        serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-row md:flex-col gap-4 md:items-center items-start'
        serviceItemDescription='w-full flex flex-col gap-2'
      />
      <Parterners
        title={backendDevelopmentData?.technologies?.heading || ''}
        description={backendDevelopmentData?.technologies?.description || ''}
        techData={backendDevelopmentTechData || []}
      />
      <AITech
        bannerTitle={backendDevelopmentData?.blogs?.heading || ''}
        bannerDescription={backendDevelopmentData?.blogs?.description || ''}
        buttonTitle={backendDevelopmentData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={backendDevelopmentData?.client_reviews?.heading || ''}
        description={backendDevelopmentData?.client_reviews?.description || ''}
        bgImage={backendDevelopmentData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${backendDevelopmentData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      <ContactUs contactUsData={backendDevelopmentData?.get_in_touch || []} />
    </div>
  )
}

export default BackendEngineering