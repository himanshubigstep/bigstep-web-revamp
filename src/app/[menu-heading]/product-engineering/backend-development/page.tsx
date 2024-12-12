'use client'
import { fetchBackendDevelopmentChooseUs, fetchBackendDevelopmentData, fetchBackendDevelopmentTech, fetchHeaderData, fetchModalBoxHomePage } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import ModelBox from '@/app/components/model-box/ModelBox';
import Head from 'next/head';
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
  }[]
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

const BackendEngineering = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [backendDevelopmentData, setBackendDevelopmentData] = useState<BackendDevelopmentPageData | null>(null)
  const [backendDevelopmentChooseUs, setBackendDevelopmentChooseUs] = useState<any>([]);
  const [backendDevelopmentTechData, setBackendDevelopmentTechData] = useState<any>([]);
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

  useEffect(() => {
    if (backendDevelopmentData) {
      // Set document title
      document.title = backendDevelopmentData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = backendDevelopmentData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = backendDevelopmentData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [backendDevelopmentData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <Head>
        <link rel="canonical" href={backendDevelopmentData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={backendDevelopmentData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={backendDevelopmentData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={backendDevelopmentData?.backend_intro[0]} />
      <ServiceDataBlock
        title={backendDevelopmentData?.why_choose[0].heading || ''}
        description={backendDevelopmentData?.why_choose[0].description || ''}
        services={backendDevelopmentChooseUs[0]?.attributes?.service_data || []}
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
        title={backendDevelopmentData?.technologies?.heading || ''}
        description={backendDevelopmentData?.technologies?.description || ''}
        buttonText={backendDevelopmentData?.technologies?.button_text || ''}
        buttonLink={backendDevelopmentData?.technologies?.button_link || ''}
        techData={backendDevelopmentTechData || []}
        bgImage={backendDevelopmentData?.technologies?.background_image?.data?.attributes?.url || ''}
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
      <div className='w-full h-full lg:py-16 py-8'>
        <ContactUs contactUsData={backendDevelopmentData?.get_in_touch || []} />
      </div>
      <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default BackendEngineering