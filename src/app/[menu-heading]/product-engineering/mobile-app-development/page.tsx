'use client'
import { fetchHeaderData, fetchMobileAppDevelopmentChooseUs, fetchMobileAppDevelopmentData, fetchMobileAppDevelopmentTech, fetchModalBoxHomePage } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import ModelBox from '@/app/components/model-box/ModelBox';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface MobileAppDevelopmentPageData {
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
  mobile_intro: {
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
  }[]
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

const MobileAppDevelopment = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mobileAppDevelopmentData, setMobileAppDevelopmentData] = useState<MobileAppDevelopmentPageData | null>(null)
  const [customerSoftwareDevelopmentChooseUs, setCustomerSoftwareDevelopmentChooseUs] = useState<any>([]);
  const [customerSoftwareDevelopmentTechData, setCustomerSoftwareDevelopmenttechData] = useState<any>([]);
  const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);

  const router = useRouter();

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
    const fetchcustomerSoftwareDevelopmentResponse = async () => {
      try {
        const response = await fetchMobileAppDevelopmentData();
        setMobileAppDevelopmentData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchcustomerSoftwareDevelopmentResponse();
  }, []);

  useEffect(() => {
    const fetchcustomerSoftwareDevelopmentTechResponse = async () => {
      try {
        const response = await fetchMobileAppDevelopmentTech();
        setCustomerSoftwareDevelopmenttechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchcustomerSoftwareDevelopmentTechResponse();
  }, []);

  useEffect(() => {
    const customerSoftwareDevelopmentChoose = async () => {
      try {
        const response = await fetchMobileAppDevelopmentChooseUs();
        setCustomerSoftwareDevelopmentChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    customerSoftwareDevelopmentChoose();
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <TopBanner bannerData={mobileAppDevelopmentData?.mobile_intro} />
      <ServiceDataBlock
        title={mobileAppDevelopmentData?.why_choose?.heading || ''}
        description={mobileAppDevelopmentData?.why_choose?.description || ''}
        services={customerSoftwareDevelopmentChooseUs[0]?.attributes?.service_data || []}
        showButton={false}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
        serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/3 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-col gap-4 items-center'
        serviceItemDescription='w-full flex flex-col gap-2 text-center'
        serviceHeding='lg:line-clamp-none text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
      />
      <Parterners
        title={mobileAppDevelopmentData?.technologies[0].heading || ''}
        description={mobileAppDevelopmentData?.technologies[0].description || ''}
        buttonText={mobileAppDevelopmentData?.technologies[0].button_text || ''}
        buttonLink={mobileAppDevelopmentData?.technologies[0].button_link || ''}
        techData={customerSoftwareDevelopmentTechData || []}
        bgImage={mobileAppDevelopmentData?.technologies[0]?.background_image?.data?.attributes?.url || ''}
      />
      <AITech
        bannerTitle={mobileAppDevelopmentData?.blogs?.heading || ''}
        bannerDescription={mobileAppDevelopmentData?.blogs?.description || ''}
        buttonTitle={mobileAppDevelopmentData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={mobileAppDevelopmentData?.client_reviews?.heading || ''}
        description={mobileAppDevelopmentData?.client_reviews?.description || ''}
        bgImage={mobileAppDevelopmentData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${mobileAppDevelopmentData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      <div className='w-full h-full lg:py-16 py-8'>
        <ContactUs contactUsData={mobileAppDevelopmentData?.get_in_touch || []} />
      </div>
      <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default MobileAppDevelopment