'use client'
import { fetchHeaderData, fetchProductEngineeringData, fetchProductEngineeringServiceHelp, fetchProductEngineeringTechnologiesused, fetchProductEngineeringTrustedPartner } from '@/api-data/api'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import Parterners from '@/app/components/common/partner-common-block/Parterners'
import SectionInnerCarousel from '@/app/components/common/section-inner-carousel/SectionInnerCarousel'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import AITech from '@/app/components/common/ai-tech/AITech'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock'

interface productEngineeringPageData {
  custom_software: {
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
  product_information: {
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
  product_introduction: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
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
  technologies_we_use: {
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

const ProductEngineering = () => {
  const [productEngineeringData, setProductEngineeringData] = useState<productEngineeringPageData | null>(null)
  const [productEngineeringPageHelpServiceData, setProductEngineeringPageHelpServiceData] = useState<any>([]);
  const [productEngineeringTechData, setProductEngineeringTechData] = useState<any>([]);
  const [productEngineeringPageTrustedData, setProductEngineeringPageTrustedData] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProductEngineeringPage = async () => {
      try {
        const response = await fetchProductEngineeringData();
        setProductEngineeringData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductEngineeringPage();
  }, [])

  useEffect(() => {
    const productEngineeringHelpService = async () => {
      try {
        const response = await fetchProductEngineeringServiceHelp();
        setProductEngineeringPageHelpServiceData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    productEngineeringHelpService();
  }, [])

  useEffect(() => {
    const productEngineeringTechnologies = async () => {
      try {
        const response = await fetchProductEngineeringTechnologiesused();
        setProductEngineeringTechData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    productEngineeringTechnologies();
  }, [])

  useEffect(() => {
    const productEngineeringTrustedData = async () => {
      try {
        const response = await fetchProductEngineeringTrustedPartner();
        setProductEngineeringPageTrustedData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    productEngineeringTrustedData();
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

  if (loading) {
    return <LoaderSpinner />;
  }
  
  return (
    <div className='poppins'>
        <TopBanner bannerData={productEngineeringData?.product_introduction} />
        <SectionInnerCarousel carouselProductEngineerData={productEngineeringData?.custom_software} />
        <ServiceDataBlock
          title={productEngineeringData?.how_can_we_help?.heading || ''}
          services={productEngineeringPageHelpServiceData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:pb-16 pb-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/2 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col md:flex-row gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
        />
        <Parterners
          title={productEngineeringData?.technologies_we_use?.heading || ''}
          description={productEngineeringData?.technologies_we_use?.description || ''}
          techData={productEngineeringTechData || []}
        />
        <ServiceDataBlock
          title={productEngineeringData?.trusted_partner?.heading || ''}
          description={productEngineeringData?.trusted_partner?.description || ''}
          services={productEngineeringPageTrustedData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
          serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/2 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col md:flex-row gap-4 md:items-center items-start'
          serviceItemDescription='w-full text-left flex flex-col gap-2'
          buttonText={productEngineeringData?.trusted_partner?.button_text || ''}
          bgImage={productEngineeringData?.trusted_partner?.background_image?.data?.attributes?.formats?.large?.url || ''}
          logoClassName='md:w-auto w-full md:h-full'
        />
        <AITech
          bannerTitle={productEngineeringData?.latest_info?.heading || ''}
          bannerDescription={productEngineeringData?.latest_info?.description || ''}
          buttonTitle={productEngineeringData?.latest_info?.button_text || ''}
          onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
        />
        <ContactUs contactUsData = {productEngineeringData?.get_in_touch} />
    </div>
  )
}

export default ProductEngineering