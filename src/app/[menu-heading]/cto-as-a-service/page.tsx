'use client'
import React, { useEffect, useState } from 'react'
import { fetchCtoAsServiceData, fetchCtoAsServiceHolisticApproach } from '@/api-data/api'
import Clients from '@/app/components/common/clients/Clients'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'
import MileStoneSubmenu from '@/app/components/common/milestones-data/MileStoneSubmenu'

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
        <ProductDevelopment developmentData={ctoAsServiceData} />
        <MileStoneSubmenu homePageData={ctoAsServiceData} />
        <div className='w-full h-full md:py-16 py-8'>
          <Clients
              title={ctoAsServiceData?.client_review?.heading || ''}
              description={ctoAsServiceData?.client_review?.description || ''}
              bgImage={ctoAsServiceData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${ctoAsServiceData.client_review?.background_image.data.attributes.formats.large.url}`  : ''} 
          />
        </div>
        <ContactUs contactUsData = {ctoAsServiceData?.client_query || []} />
    </div>
  )
}

export default CtoAsService