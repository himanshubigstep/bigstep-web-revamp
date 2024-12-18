'use client'
import React, { useEffect, useState } from 'react'
import { fetchCtoAsServiceData, fetchCtoAsServiceHolisticApproach, fetchModalBoxHomePage } from '@/api-data/api'
import Clients from '@/app/components/common/clients/Clients'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'
import MileStoneSubmenu from '@/app/components/common/milestones-data/MileStoneSubmenu'
import ModelBox from '@/app/components/model-box/ModelBox'
import Head from 'next/head'
import SimpleContactForm from '@/app/components/common/contact-us/simple-contact-form/SimpleContactForm'

interface CtoAsServiceProps {
  id: number;
  client_query: {
    id: number;
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
  client_review: {
    id: number;
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
  complete_product_development: {
    id: number;
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
    heading: string
    description: string
  }
  holistic_approach: {
    id: number;
    button_text: string
    button_link: string
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
  introduction: {
    id: number;
    buttonText: string;
    description: string;
    heading: string;
    label: string
    link: string;
    background_image: {
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
  outstanding_results: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
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
  MilesTones: {
    id: number;
    heading: string;
    sub_heading: string;
    description: string
  }
  product_development: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
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
  why_choose: {
    id: number;
    heading: string;
    description: string;
    button_text: string;
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
  why_choose_data: {
    id: number;
    heading: string;
    description: string
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

const CtoAsService = () => {
    const [ctoAsServiceData, setCtoAsServiceData] = useState<CtoAsServiceProps | null>(null)
    const [ctoAsServiceHolisticData, setCtoAsServiceHolisticData] = useState<any>([]);
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
      const fetchCtoAsServiceDataResponse = async () => {
        try {
          const response = await fetchCtoAsServiceData();
          setCtoAsServiceData(response.attributes);
  
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCtoAsServiceDataResponse();
    }, []);

    useEffect(() => {
      const fetchCtoAsServiceHolisticData = async () => {
        try {
          const response = await fetchCtoAsServiceHolisticApproach();
          setCtoAsServiceHolisticData(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchCtoAsServiceHolisticData();
    }, [])

    useEffect(() => {
      if (ctoAsServiceData) {
        // Set document title
        document.title = ctoAsServiceData?.seo?.metaTitle || "Default Title";
    
        // Select meta description tag
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
        // If meta description doesn't exist, create it
        if (!metaDescription) {
          metaDescription = document.createElement("meta");
          metaDescription.name = "description";
          document.head.appendChild(metaDescription);
        }
    
        // Set content for the meta description
        metaDescription.content = ctoAsServiceData?.seo?.metaDescription || "Default description";
    
        // Select canonical link tag
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
        // If canonical link doesn't exist, create it
        if (!canonicalLink) {
          canonicalLink = document.createElement("link");
          canonicalLink.rel = "canonical";
          document.head.appendChild(canonicalLink);
        }
    
        // Set href for the canonical link
        canonicalLink.href = ctoAsServiceData?.seo?.canonicalURL || "default-canonical-url";
      }
    }, [ctoAsServiceData]);

    if (loading) {
      return <LoaderSpinner />;
    }
    
  return (    
    <div className='poppins'>
        <Head>
          <link rel="canonical" href={ctoAsServiceData?.seo?.canonicalURL || "default-canonical-url"} />
          <meta name="title" content={ctoAsServiceData?.seo?.metaTitle || "Default description"} />
          <meta name="description" content={ctoAsServiceData?.seo?.metaDescription || "Default Description"} />
        </Head>
        <TopBanner bannerData={ctoAsServiceData?.introduction} />
        <HolisticApproach
          title={ctoAsServiceData?.holistic_approach?.heading || ''}
          description={ctoAsServiceData?.holistic_approach?.description || ''}
          buttonText={ctoAsServiceData?.holistic_approach?.button_text || ''}
          buttonLink={ctoAsServiceData?.holistic_approach?.button_link || ''}
          holisticData={ctoAsServiceHolisticData[0] || []}
        />
        <ProductDevelopment developmentData={ctoAsServiceData} />
        <MileStoneSubmenu homePageData={ctoAsServiceData} />
        <div className='w-full h-full'>
          <Clients
              title={ctoAsServiceData?.client_review?.heading || ''}
              description={ctoAsServiceData?.client_review?.description || ''}
              bgImage={ctoAsServiceData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${ctoAsServiceData.client_review?.background_image.data.attributes.formats.large.url}`  : ''} 
          />
        </div>
        {/* <ContactUs contactUsData = {ctoAsServiceData?.client_query || []} /> */}
        <div className='w-full h-full lg:mt-16 md:mt-16 mt-8'>
          <SimpleContactForm contactUsData={ctoAsServiceData?.client_query || []} />
        </div>
        <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default CtoAsService