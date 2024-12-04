'use client'
import { fetchHeaderData, fetchModalBoxHomePage, fetchRpaData, fetchRpaImplimentationSubSection, fetchRpaManagedSubSection, fetchRpaServiceHelp, fetchRpaTechnologiesused, fetchRpaTrustedPartner } from '@/api-data/api'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import Parterners from '@/app/components/common/partner-common-block/Parterners'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import AITech from '@/app/components/common/ai-tech/AITech'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock'
import ModelBox from '@/app/components/model-box/ModelBox'

interface rpaPageData {
  software: {
    id: number;
    heading: string;
    description: string;
    buttonText: string;
    backgroundimage: {
      data: any;
    }
    technologyText: {
      id: number;
      technologyDetails: string;
      technologyLinks: string;
    }[]
  }
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
  how_can_we_help: {
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
  latest_info: {
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
  information: {
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
    label: string;
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
  technologies_we_use: {
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
  trusted_partner: {
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

const RPA = () => {
  const [rpaPageData, setRpaPageData] = useState<rpaPageData | null>(null)
  const [rpaPageHelpServiceData, setRpaPageHelpServiceData] = useState<any>([]);
  const [rpaTechData, setRpaTechData] = useState<any>([]);
  const [rpaPageTrustedData, setRpaPageTrustedData] = useState<any>([]);

  const [rpaPageImplimentationSubData, setRpaPageImplimentationSubData] = useState<any>([]);
  const [rpaPageManagedSubData, setRpaPageManagedSubData] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);

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
    const fetchrpaPage = async () => {
      try {
        const response = await fetchRpaData();
        setRpaPageData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchrpaPage();
  }, [])

  useEffect(() => {
    const rpaHelpService = async () => {
      try {
        const response = await fetchRpaServiceHelp();
        setRpaPageHelpServiceData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    rpaHelpService();
  }, [])

  useEffect(() => {
    const rpaTechnologies = async () => {
      try {
        const response = await fetchRpaTechnologiesused();
        setRpaTechData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    rpaTechnologies();
  }, [])

  useEffect(() => {
    const rpaTrustedData = async () => {
      try {
        const response = await fetchRpaTrustedPartner();
        setRpaPageTrustedData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    rpaTrustedData();
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
    const fetchImplimentSubResponse = async () => {
      try {
        const response = await fetchRpaImplimentationSubSection();
        setRpaPageImplimentationSubData(response);
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    fetchImplimentSubResponse();
  }, [])
  
  useEffect(() => {
    const fetchManagedSubResponse = async () => {
      try {
        const response = await fetchRpaManagedSubSection();
        setRpaPageManagedSubData(response);
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    fetchManagedSubResponse();
  }, [])

  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <div className='poppins'>
        <TopBanner bannerData={rpaPageData?.introduction} />
        <ServiceDataBlock
          title={rpaPageData?.how_can_we_help?.heading || ''}
          services={rpaPageHelpServiceData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col lg:flex-row gap-4 lg:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none text-left line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
          rpaPageImplimentationSubData={rpaPageImplimentationSubData[0]?.attributes?.service_data}
          rpaPageManagedSubData={rpaPageManagedSubData[0]?.attributes?.service_data}
        />
        <Parterners
          title={rpaPageData?.technologies_we_use?.heading || ''}
          description={rpaPageData?.technologies_we_use?.description || ''}
          techData={rpaTechData || []}
          bgImage={rpaPageData?.technologies_we_use?.background_image?.data?.attributes?.url || ''}
        />
        <ServiceDataBlock
          title={rpaPageData?.trusted_partner?.heading || ''}
          description={rpaPageData?.trusted_partner?.description || ''}
          services={rpaPageTrustedData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col lg:flex-row gap-4 lg:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none text-left line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
          buttonText={rpaPageData?.trusted_partner?.button_text || ''}
          bgImage={rpaPageData?.trusted_partner?.background_image?.data?.attributes?.formats?.large?.url || ''}
          logoClassName='lg:w-auto w-full lg:h-full'
        />
        <AITech
          bannerTitle={rpaPageData?.latest_info?.heading || ''}
          bannerDescription={rpaPageData?.latest_info?.description || ''}
          buttonTitle={rpaPageData?.latest_info?.button_text || ''}
          onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
        />
        <ContactUs contactUsData = {rpaPageData?.get_in_touch} />
        <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default RPA
