'use client'
import { fetchModalBoxHomePage, fetchPartnershipData, fetchPartnershipDataService, fetchPaternershipData } from '@/api-data/api';
import { useEffect, useState } from 'react';
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import TopBanner from '../components/common/top-banner/TopBanner';
import ContactUs from '../components/common/contact-us/ContactUs';
import ServiceDataBlock from '../components/common/service-data-block/ServiceDataBlock';
import PartnersBlock from '../components/common/partners-section/PartnersBlock';
import ModelBox from '../components/model-box/ModelBox';
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

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
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
        mainClass='relative w-full md:py-16 py-8'
        headingClass='text-3xl font-semibold text-center mb-4 text-white'
        descriptionClass='text-lg font-normal text-white'
        partnerShipData={partnersData}
      />
      <ServiceDataBlock
        title={partnershipData?.technology_partnerships?.heading || ''}
        description={partnershipData?.technology_partnerships?.description || ''}
        services={partnershipPageServiceData[0]?.attributes?.service_data || []}
        showButton={true}
        mainContainerClass='relative w-full max-w-[1440px] mx-auto md:py-24 py-12 md:px-4'
        headingClassName='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'
        serviceBlockClassName='relative w-full flex flex-wrap md:justify-center text-center'
        serviceItemClassName='md:mt-8 mt-4 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-2 py-2 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconHeader='w-full flex flex-row md:flex-col gap-4 md:items-center items-start'
        serviceItemDescription='w-full flex flex-col gap-2'
        buttonText={partnershipData?.technology_partnerships?.button_text || ''}
      />
      <ContactUs contactUsData={partnershipData?.get_in_touch} />
      <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default Partnership