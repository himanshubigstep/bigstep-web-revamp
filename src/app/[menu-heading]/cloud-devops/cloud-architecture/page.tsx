'use client'
import { fetchCloudArchitechChooseUs, fetchCloudArchitechData, fetchCloudArchitechTech, fetchHeaderData } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface CloudArchitechPageProps {
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
  cloud_intro: {
    backgroundImage: {
      data: {
        attributes: {
          url: string
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
    label: string
    link: string;
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
    button_link: string
    description: string
    heading: string
    background_image: {
      data: {
        attributes: {
          url: string
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

const CloudArchitech = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cloudArchitechData, setCloudArchitechData] = useState<CloudArchitechPageProps | null>(null)
  const [cloudArchitechChooseUs, setCloudArchitechChooseUs] = useState<any>([]);
  const [cloudArchitechTechData, setCloudArchitechTechData] = useState<any>([]);
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
    const fetchCloudArchitechResponse = async () => {
      try {
        const response = await fetchCloudArchitechData();
        setCloudArchitechData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudArchitechResponse();
  }, []);

  useEffect(() => {
    const fetchCloudArchitechTechResponse = async () => {
      try {
        const response = await fetchCloudArchitechTech();
        setCloudArchitechTechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudArchitechTechResponse();
  }, []);

  useEffect(() => {
    const cloudArchitechChoose = async () => {
      try {
        const response = await fetchCloudArchitechChooseUs();
        setCloudArchitechChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    cloudArchitechChoose();
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <TopBanner bannerData={cloudArchitechData?.cloud_intro} />
      <ServiceDataBlock
        title={cloudArchitechData?.why_choose?.heading || ''}
        description={cloudArchitechData?.why_choose?.description || ''}
        services={cloudArchitechChooseUs[0]?.attributes?.service_data || []}
        showButton={false}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
        serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/3 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-col gap-4 lg:items-center items-start'
        serviceItemDescription='w-full flex flex-col gap-2 lg:text-center md:text-center text-left'
        serviceHeding='lg:line-clamp-none lg:text-center md:text-center sm:text-left text-left line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
      />
      <Parterners
        title={cloudArchitechData?.technologies?.heading || ''}
        description={cloudArchitechData?.technologies?.description || ''}
        buttonText={cloudArchitechData?.technologies?.button_text || ''}
        buttonLink={cloudArchitechData?.technologies?.button_link || ''}
        techData={cloudArchitechTechData || []}
        bgImage={cloudArchitechData?.technologies?.background_image?.data?.attributes?.url || ''}
      />
      <AITech
        bannerTitle={cloudArchitechData?.blogs?.heading || ''}
        bannerDescription={cloudArchitechData?.blogs?.description || ''}
        buttonTitle={cloudArchitechData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={cloudArchitechData?.client_reviews?.heading || ''}
        description={cloudArchitechData?.client_reviews?.description || ''}
        bgImage={cloudArchitechData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${cloudArchitechData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      <ContactUs contactUsData={cloudArchitechData?.get_in_touch || []} />
    </div>
  )
}

export default CloudArchitech