'use client'
import { fetchCloudServicesChooseUs, fetchCloudServicesData, fetchCloudServicesTech, fetchHeaderData } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import ServiceDataBlock from '@/app/components/common/service-data-block/ServiceDataBlock';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface CloudServicesPageProps {
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

const CloudServices = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cloudServicesData, setCloudServiceshData] = useState<CloudServicesPageProps | null>(null)
  const [cloudServicesChooseUs, setCloudServicesChooseUs] = useState<any>([]);
  const [cloudServicesTechData, setCloudServicesTechData] = useState<any>([]);
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
    const fetchCloudServicesResponse = async () => {
      try {
        const response = await fetchCloudServicesData();
        setCloudServiceshData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudServicesResponse();
  }, []);

  useEffect(() => {
    const fetchCloudServicesTechResponse = async () => {
      try {
        const response = await fetchCloudServicesTech();
        setCloudServicesTechData(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudServicesTechResponse();
  }, []);

  useEffect(() => {
    const cloudServicesChoose = async () => {
      try {
        const response = await fetchCloudServicesChooseUs();
        setCloudServicesChooseUs(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    cloudServicesChoose();
  }, []);

  useEffect(() => {
    if (cloudServicesData) {
      // Set document title
      document.title = cloudServicesData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = cloudServicesData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = cloudServicesData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [cloudServicesData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <Head>
        <link rel="canonical" href={cloudServicesData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={cloudServicesData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={cloudServicesData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={cloudServicesData?.cloud_intro} />
      <ServiceDataBlock
        title={cloudServicesData?.why_choose?.heading || ''}
        description={cloudServicesData?.why_choose?.description || ''}
        services={cloudServicesChooseUs[0]?.attributes?.service_data || []}
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
        title={cloudServicesData?.technologies?.heading || ''}
        description={cloudServicesData?.technologies?.description || ''}
        buttonText={cloudServicesData?.technologies?.button_text || ''}
        buttonLink={cloudServicesData?.technologies?.button_link || ''}
        techData={cloudServicesTechData || []}
        bgImage={cloudServicesData?.technologies?.background_image?.data?.attributes?.url || ''}
      />
      <AITech
        bannerTitle={cloudServicesData?.blogs?.heading || ''}
        bannerDescription={cloudServicesData?.blogs?.description || ''}
        buttonTitle={cloudServicesData?.blogs?.button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={cloudServicesData?.client_reviews?.heading || ''}
        description={cloudServicesData?.client_reviews?.description || ''}
        bgImage={cloudServicesData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${cloudServicesData.client_reviews?.background_image.data.attributes.formats.large.url}` : ''}
      />
      <ContactUs contactUsData={cloudServicesData?.get_in_touch || []} />
    </div>
  )
}

export default CloudServices