'use client'
import { fetchModalBoxHomePage, fetchPartnershipData, fetchPartnershipDataService, fetchPaternershipData } from '@/api-data/api';
import { useEffect, useState } from 'react';
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import TopBanner from '../components/common/top-banner/TopBanner';
import ContactUs from '../components/common/contact-us/ContactUs';
import ServiceDataBlock from '../components/common/service-data-block/ServiceDataBlock';
import PartnersBlock from '../components/common/partners-section/PartnersBlock';
import ModelBox from '../components/model-box/ModelBox';
import Head from 'next/head';
import SimpleContactForm from '../components/common/contact-us/simple-contact-form/SimpleContactForm';
// import CommonBlock from '@/app/components/common/common-blocks-division/CommonBlock'
// import ContactUs from '@/app/components/common/contact-us/ContactUs';
// import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
// import Parterners from '@/app/components/common/partner-common-block/Parterners'
// import TopBanner from '@/app/components/common/top-banner/TopBanner'
// import React, { useEffect, useState } from 'react'

interface PartnerShipData {
  get_in_touch: {
    background_image: {
      data: {
        attributes: {
          formats: {
            large: {
              large: {
                url: string
              }
            }
          }
        }
      }
    }
    button_text: string
    description: string
    heading: string
    id: number
  }
  technology_partnerships: {
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
    id: number
  }
  partner_Intro: {
    id: number
    description: string
    heading: string
    link: string;
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
  our_tech_stack: {
    id: number
    heading: string
    description: string
    images: {
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
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalURL: string;
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

const Partnership = () => {
  const [partnershipData, setPartnershipData] = useState<PartnerShipData | null>(null)
  const [partnershipPageServiceData, setPartnershipPageServiceData] = useState<any>([]);
  const [partnersData, setPartnersData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

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
    const fetchPartnershipDataResponse = async () => {
      try {
        const response = await fetchPartnershipData();
        setPartnershipData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartnershipDataResponse();
  }, []);

  useEffect(() => {
    const fetchPartnershipPageServiceData = async () => {
      try {
        const response = await fetchPartnershipDataService();
        setPartnershipPageServiceData(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchPartnershipPageServiceData();
  }, [])

  useEffect(() => {
    const fetchPartnersResponse = async () => {
      try {
        const partnerShipResponse = await fetchPaternershipData();
        const partners = partnerShipResponse.map((item: any) => {
          const attributes = item.attributes;
          const logo = attributes.logo.data ? attributes.logo.data.attributes : {};

          return {
            src: logo.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${logo.url}` : '',
            alt: attributes.heading,
            category: 'Unknown',
            width: 200,
            height: 80
          };
        });

        setPartnersData(partners);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartnersResponse();
  }, []);

  useEffect(() => {
    if (partnershipData) {
      // Set document title
      document.title = partnershipData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = partnershipData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = partnershipData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [partnershipData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <Head>
        <link rel="canonical" href={partnershipData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={partnershipData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={partnershipData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={partnershipData?.partner_Intro} />
      <PartnersBlock
        homePageData={{
          heading: partnershipData?.our_tech_stack?.heading || '',
          description: partnershipData?.our_tech_stack?.description || '',
          background_image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: partnershipData?.our_tech_stack?.images?.data?.attributes?.formats?.large?.url || '',
                  },
                },
              },
            },
          },
        }}
        mainClass='relative w-full lg:py-16 py-8'
        headingClass='text-3xl font-semibold text-center mb-4 text-white'
        descriptionClass='text-lg font-normal text-white'
        partnerShipData={partnersData}
      />
      <ServiceDataBlock
        title={partnershipData?.technology_partnerships?.heading || ''}
        description={partnershipData?.technology_partnerships?.description || ''}
        services={partnershipPageServiceData[0]?.attributes?.service_data || []}
        showButton={true}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 lg:px-0 md:px-0 sm:px-4 px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap lg:justify-center text-center'
        serviceItemClassName='lg:mt-8 mt-4 flex flex-col lg:w-1/3 w-1/2 lg:px-12 lg:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-col gap-4 items-center'
        serviceItemDescription='w-full flex flex-col gap-2 text-center'
        serviceHeding='lg:line-clamp-none text-center line-clamp-2 lg:text-xl md:text-lg sm:text-md text-sm font-semibold menu-item-text hover:text-blue-500'
      />
      {/* <ContactUs contactUsData={partnershipData?.get_in_touch} /> */}
      <SimpleContactForm contactUsData={partnershipData?.get_in_touch} />
      <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default Partnership