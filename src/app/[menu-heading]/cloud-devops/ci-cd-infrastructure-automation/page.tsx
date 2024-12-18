'use client'
import { fetchCiCdChooseUs, fetchCiCdData, fetchCiCdTech, fetchHeaderData } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import SimpleContactForm from '@/app/components/common/contact-us/simple-contact-form/SimpleContactForm';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface CiCdPageProps {
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
  ci_cd_intro: {
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

const CiCd = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [ciCdData, setCiCdhData] = useState<CiCdPageProps | null>(null)
  const [ciCdChooseUs, setCiCdChooseUs] = useState<any>([]);
  const [ciCdTechData, setCiCdTechData] = useState<any>([]);
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
    const fetchCiCdResponse = async () => {
      try {
        const response = await fetchCiCdData();
        setCiCdhData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCiCdResponse();
  }, []);

  useEffect(() => {
    const fetchCiCdTechResponse = async () => {
      try {
        const response = await fetchCiCdTech();
        setCiCdTechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCiCdTechResponse();
  }, []);

  useEffect(() => {
    const ciCdChoose = async () => {
      try {
        const response = await fetchCiCdChooseUs();
        setCiCdChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    ciCdChoose();
  }, []);

  useEffect(() => {
    if (ciCdData) {
      // Set document title
      document.title = ciCdData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = ciCdData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = ciCdData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [ciCdData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <Head>
        <link rel="canonical" href={ciCdData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={ciCdData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={ciCdData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={ciCdData?.ci_cd_intro} />
      <ServiceDataBlock
        title={ciCdData?.why_choose?.heading || ''}
        description={ciCdData?.why_choose?.description || ''}
        services={ciCdChooseUs[0]?.attributes?.service_data || []}
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
        title={ciCdData?.technologies?.heading || ''}
        description={ciCdData?.technologies?.description || ''}
        buttonText={ciCdData?.technologies?.button_text || ''}
        buttonLink={ciCdData?.technologies?.button_link || ''}
        techData={ciCdTechData || []}
        bgImage={ciCdData?.technologies?.background_image?.data?.attributes?.url || ''}
      />
      <AITech
        bannerTitle={ciCdData?.blogs?.heading || ''}
        bannerDescription={ciCdData?.blogs?.description || ''}
        buttonTitle={ciCdData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={ciCdData?.client_reviews?.heading || ''}
        description={ciCdData?.client_reviews?.description || ''}
        bgImage={ciCdData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${ciCdData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      {/* <ContactUs contactUsData={ciCdData?.get_in_touch || []} /> */}
      <div className='w-full h-full lg:pt-16 pt-8'>
        <SimpleContactForm contactUsData={ciCdData?.get_in_touch || []} />
      </div>
    </div>
  )
}

export default CiCd