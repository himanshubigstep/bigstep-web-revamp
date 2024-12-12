'use client'
import { fetchDataAndAiData, fetchDataAndAiServiceHelp, fetchDataAndAITechnologiesused, fetchDataAndAITrustedPartner, fetchHeaderData } from '@/api-data/api'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import Parterners from '@/app/components/common/partner-common-block/Parterners'
import SectionInnerCarousel from '@/app/components/common/section-inner-carousel/SectionInnerCarousel'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import AITech from '@/app/components/common/ai-tech/AITech'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock'
import Head from 'next/head'

interface dataandAiPageData {
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

const DataAndAI = () => {
  const [dataandAiPageData, setDataandAiPageData] = useState<dataandAiPageData | null>(null)
  const [dataAndAIPageHelpServiceData, setDataAndAIPageHelpServiceData] = useState<any>([]);
  const [dataAndAITechData, setDataAndAITechData] = useState<any>([]);
  const [dataAndAIPageTrustedData, setDataAndAIPageTrustedData] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchDatAndAiPage = async () => {
      try {
        const response = await fetchDataAndAiData();
        setDataandAiPageData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatAndAiPage();
  }, [])

  useEffect(() => {
    const dataAndAIHelpService = async () => {
      try {
        const response = await fetchDataAndAiServiceHelp();
        setDataAndAIPageHelpServiceData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    dataAndAIHelpService();
  }, [])

  useEffect(() => {
    const dataAndAiTechnologies = async () => {
      try {
        const response = await fetchDataAndAITechnologiesused();
        setDataAndAITechData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    dataAndAiTechnologies();
  }, [])

  useEffect(() => {
    const dataAndAiTrustedData = async () => {
      try {
        const response = await fetchDataAndAITrustedPartner();
        setDataAndAIPageTrustedData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    dataAndAiTrustedData();
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
    if (dataandAiPageData) {
      // Set document title
      document.title = dataandAiPageData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = dataandAiPageData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = dataandAiPageData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [dataandAiPageData]);

  if (loading) {
    return <LoaderSpinner />;
  }
  
  return (
    <div className='poppins'>
        <Head>
          <link rel="canonical" href={dataandAiPageData?.seo?.canonicalURL || "default-canonical-url"} />
          <meta name="title" content={dataandAiPageData?.seo?.metaTitle || "Default description"} />
          <meta name="description" content={dataandAiPageData?.seo?.metaDescription || "Default Description"} />
        </Head>
        <TopBanner bannerData={dataandAiPageData?.introduction} />
        <SectionInnerCarousel carouselProductEngineerData={dataandAiPageData?.software} />
        <ServiceDataBlock
          title={dataandAiPageData?.how_can_we_help?.heading || ''}
          services={dataAndAIPageHelpServiceData[0]?.attributes?.service_data || []}
          showButton={false}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:pb-16 pb-8 lg:px-4 dark:lg:pt-16 dark:pt-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start lg:items-start md:items-start sm:items-start items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col lg:flex-row gap-4 lg:items-center lg:items-start md:items-start sm:items-start items-center'
          serviceItemDescription='w-full lg:text-left md:text-left sm:text-left text-center flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none lg:text-left md:text-left sm:text-left text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
        />
        <Parterners
          title={dataandAiPageData?.technologies_we_use?.heading || ''}
          description={dataandAiPageData?.technologies_we_use?.description || ''}
          buttonText={dataandAiPageData?.technologies_we_use?.button_text || ''}
          buttonLink={dataandAiPageData?.technologies_we_use?.button_link || ''}
          techData={dataAndAITechData || []}
          bgImage={dataandAiPageData?.technologies_we_use?.background_image?.data?.attributes?.url || ''}
        />
        <ServiceDataBlock
          title={dataandAiPageData?.trusted_partner?.heading || ''}
          description={dataandAiPageData?.trusted_partner?.description || ''}
          services={dataAndAIPageTrustedData[0]?.attributes?.service_data || []}
          showButton={true}
          mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
          headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
          serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
          serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/2 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start lg:items-start md:items-start sm:items-start items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
          serviceIconHeader='w-full flex flex-col lg:flex-row gap-4 lg:items-center lg:items-start md:items-start sm:items-start items-center'
          serviceItemDescription='w-full lg:text-left md:text-left sm:text-left text-center flex flex-col gap-2'
          serviceHeding='lg:line-clamp-none lg:text-left md:text-left sm:text-left text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
          logoClassName='lg:w-auto w-full lg:h-full'
          buttonText={dataandAiPageData?.trusted_partner?.button_text || ''}
          bgImage={dataandAiPageData?.trusted_partner?.background_image?.data?.attributes?.formats?.large?.url || ''}
        />
        <AITech
          bannerTitle={dataandAiPageData?.latest_info?.heading || ''}
          bannerDescription={dataandAiPageData?.latest_info?.description || ''}
          buttonTitle={dataandAiPageData?.latest_info?.button_text || ''}
          onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
        />
        <ContactUs contactUsData = {dataandAiPageData?.get_in_touch} />
    </div>
  )
}

export default DataAndAI