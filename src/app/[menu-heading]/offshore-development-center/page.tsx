'use client'
import React, { useEffect, useState } from 'react'
import { fetchOffShoreDevelopmentData, fetchOffShoreDevelopmentHolisticApproach } from '@/api-data/api'
import Clients from '@/app/components/common/clients/Clients'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import MilesTone from '@/app/components/common/milestones-data/MilesTone'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'

interface OffShoreDevelopmentProps {
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

const OffShoreDevelopment = () => {
    const [offShoreProductDevelopmentData, setOffShoreDevelopmentData] = useState<OffShoreDevelopmentProps | null>(null)
    const [offShoreDevelopmentHolisticData, setOffShoreDevelopmentHolisticData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchOffShoreDevelopmentDataResponse = async () => {
        try {
          const response = await fetchOffShoreDevelopmentData();
          setOffShoreDevelopmentData(response.attributes);
  
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchOffShoreDevelopmentDataResponse();
    }, []);

    useEffect(() => {
      const fetchOffShoreDevelopmentHolisticData = async () => {
        try {
          const response = await fetchOffShoreDevelopmentHolisticApproach();
          setOffShoreDevelopmentHolisticData(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchOffShoreDevelopmentHolisticData();
    }, [])

    if (loading) {
      return <LoaderSpinner />;
    }
    
  return (    
    <div className='poppins'>
        <TopBanner bannerData={offShoreProductDevelopmentData?.introduction} />
        <HolisticApproach
          title={offShoreProductDevelopmentData?.holistic_approach?.heading || ''}
          description={offShoreProductDevelopmentData?.holistic_approach?.description || ''}
          buttonText={offShoreProductDevelopmentData?.holistic_approach?.button_text || ''}
          holisticData={offShoreDevelopmentHolisticData[0] || []}
        />
        <ProductDevelopment />
        {/* <MilesTone homePageData={homePageData} /> */}
        <Clients
            title={offShoreProductDevelopmentData?.client_review?.heading || ''}
            description={offShoreProductDevelopmentData?.client_review?.description || ''}
            bgImage={offShoreProductDevelopmentData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${offShoreProductDevelopmentData.client_review?.background_image.data.attributes.formats.large.url}`  : ''} 
        />
        <ContactUs contactUsData = {offShoreProductDevelopmentData?.client_query || []} />
    </div>
  )
}

export default OffShoreDevelopment