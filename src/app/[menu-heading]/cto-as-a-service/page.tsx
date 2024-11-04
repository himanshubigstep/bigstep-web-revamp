'use client'
import React, { useEffect, useState } from 'react'
import { fetchCtoAsServiceData, fetchCtoAsServiceHolisticApproach, fetchRemoteEngineeringTeamData, fetchRemoteEngineeringTeamHolisticApproach } from '@/api-data/api'
import Clients from '@/app/components/common/clients/Clients'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import MilesTone from '@/app/components/common/milestones-data/MilesTone'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'

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
}

const CtoAsService = () => {
    const [ctoAsServiceData, setCtoAsServiceData] = useState<CtoAsServiceProps | null>(null)
    const [ctoAsServiceHolisticData, setCtoAsServiceHolisticData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    if (loading) {
      return <LoaderSpinner />;
    }
    
  return (    
    <div className='poppins'>
        <TopBanner bannerData={ctoAsServiceData?.introduction} />
        <HolisticApproach
          title={ctoAsServiceData?.holistic_approach?.heading || ''}
          description={ctoAsServiceData?.holistic_approach?.description || ''}
          buttonText={ctoAsServiceData?.holistic_approach?.button_text || ''}
          holisticData={ctoAsServiceHolisticData[0] || []}
        />
        <ProductDevelopment />
        {/* <MilesTone homePageData={homePageData} /> */}
        <Clients
            title={ctoAsServiceData?.client_review?.heading || ''}
            description={ctoAsServiceData?.client_review?.description || ''}
            bgImage={ctoAsServiceData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${ctoAsServiceData.client_review?.background_image.data.attributes.formats.large.url}`  : ''} 
        />
        <ContactUs contactUsData = {ctoAsServiceData?.client_query || []} />
    </div>
  )
}

export default CtoAsService