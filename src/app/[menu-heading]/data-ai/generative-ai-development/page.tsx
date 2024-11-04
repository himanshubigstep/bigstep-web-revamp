'use client'
import { fetchGenerativeAiChooseUs, fetchGenerativeAiData, fetchGenerativeAiTech, fetchHeaderData } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface GenerativeAiPageData {
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
  gai_intro: {
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
  }
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

const GenerativeAiDevelopment = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [generativeAiData, setGenerativeAiData] = useState<GenerativeAiPageData | null>(null)
  const [generativeAiChooseUs, setGenerativeAiChooseUs] = useState<any>([]);
  const [generativeAiTechData, setGenerativeAiTechData] = useState<any>([]);
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
    const fetchGenrativeAiResponse = async () => {
      try {
        const response = await fetchGenerativeAiData();
        setGenerativeAiData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenrativeAiResponse();
  }, []);

  useEffect(() => {
    const fetchgenerativeAiTechResponse = async () => {
      try {
        const response = await fetchGenerativeAiTech();
        setGenerativeAiTechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchgenerativeAiTechResponse();
  }, []);

  useEffect(() => {
    const generativeAiChoose = async () => {
      try {
        const response = await fetchGenerativeAiChooseUs();
        setGenerativeAiChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    generativeAiChoose();
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <TopBanner bannerData={generativeAiData?.gai_intro} />
      <ServiceDataBlock
        title={generativeAiData?.why_choose?.heading || ''}
        description={generativeAiData?.why_choose?.description || ''}
        services={generativeAiChooseUs[0]?.attributes?.service_data || []}
        showButton={false}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
        serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-row md:flex-col gap-4 md:items-center items-start'
        serviceItemDescription='w-full flex flex-col gap-2'
      />
      <Parterners
        title={generativeAiData?.technologies?.heading || ''}
        description={generativeAiData?.technologies?.description || ''}
        techData={generativeAiTechData || []}
      />
      <AITech
        bannerTitle={generativeAiData?.blogs?.heading || ''}
        bannerDescription={generativeAiData?.blogs?.description || ''}
        buttonTitle={generativeAiData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={generativeAiData?.client_reviews?.heading || ''}
        description={generativeAiData?.client_reviews?.description || ''}
        bgImage={generativeAiData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${generativeAiData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      <ContactUs contactUsData={generativeAiData?.get_in_touch || []} />
    </div>
  )
}

export default GenerativeAiDevelopment