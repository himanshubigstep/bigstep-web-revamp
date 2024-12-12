'use client'
import React, { useEffect, useState } from 'react'
import { fetchModalBoxHomePage, fetchRemoteEngineeringTeamData, fetchRemoteEngineeringTeamHolisticApproach } from '@/api-data/api'
import Clients from '@/app/components/common/clients/Clients'
import ContactUs from '@/app/components/common/contact-us/ContactUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import HolisticApproach from '@/app/components/holistic-approach/HolisticApproach'
import ProductDevelopment from '@/app/components/product-development/ProductDevelopment'
import MileStoneSubmenu from '@/app/components/common/milestones-data/MileStoneSubmenu'
import ModelBox from '@/app/components/model-box/ModelBox'
import Head from 'next/head'

interface RemoteEngineeringTeamProps {
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

const RemoteEngineeringTeam = () => {
    const [remoteEngineeringTeamData, setRemoteEngineeringTeamData] = useState<RemoteEngineeringTeamProps | null>(null)
    const [remoteEngineeringTeamHolisticData, setRemoteEngineeringTeamHolisticData] = useState<any>([]);
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
      const fetchRemoteEngineeringTeamDataResponse = async () => {
        try {
          const response = await fetchRemoteEngineeringTeamData();
          setRemoteEngineeringTeamData(response.attributes);
  
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRemoteEngineeringTeamDataResponse();
    }, []);

    useEffect(() => {
      const fetchRemoteEngineeringTeamHolisticData = async () => {
        try {
          const response = await fetchRemoteEngineeringTeamHolisticApproach();
          setRemoteEngineeringTeamHolisticData(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchRemoteEngineeringTeamHolisticData();
    }, [])

    useEffect(() => {
      if (remoteEngineeringTeamData) {
        // Set document title
        document.title = remoteEngineeringTeamData?.seo?.metaTitle || "Default Title";
    
        // Select meta description tag
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
        // If meta description doesn't exist, create it
        if (!metaDescription) {
          metaDescription = document.createElement("meta");
          metaDescription.name = "description";
          document.head.appendChild(metaDescription);
        }
    
        // Set content for the meta description
        metaDescription.content = remoteEngineeringTeamData?.seo?.metaDescription || "Default description";
    
        // Select canonical link tag
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
        // If canonical link doesn't exist, create it
        if (!canonicalLink) {
          canonicalLink = document.createElement("link");
          canonicalLink.rel = "canonical";
          document.head.appendChild(canonicalLink);
        }
    
        // Set href for the canonical link
        canonicalLink.href = remoteEngineeringTeamData?.seo?.canonicalURL || "default-canonical-url";
      }
    }, [remoteEngineeringTeamData]);

    if (loading) {
      return <LoaderSpinner />;
    }
    
  return (    
    <div className='poppins'>
        <Head>
          <link rel="canonical" href={remoteEngineeringTeamData?.seo?.canonicalURL || "default-canonical-url"} />
          <meta name="title" content={remoteEngineeringTeamData?.seo?.metaTitle || "Default description"} />
          <meta name="description" content={remoteEngineeringTeamData?.seo?.metaDescription || "Default Description"} />
        </Head>
        <TopBanner bannerData={remoteEngineeringTeamData?.introduction} />
        <HolisticApproach
          title={remoteEngineeringTeamData?.holistic_approach?.heading || ''}
          description={remoteEngineeringTeamData?.holistic_approach?.description || ''}
          buttonText={remoteEngineeringTeamData?.holistic_approach?.button_text || ''}
          buttonLink={remoteEngineeringTeamData?.holistic_approach?.button_link || ''}
          holisticData={remoteEngineeringTeamHolisticData[0] || []}
        />
        <ProductDevelopment developmentData={remoteEngineeringTeamData} />
        <MileStoneSubmenu homePageData={remoteEngineeringTeamData} />
        <div className='w-full h-full'>
          <Clients
              title={remoteEngineeringTeamData?.client_review?.heading || ''}
              description={remoteEngineeringTeamData?.client_review?.description || ''}
              bgImage={remoteEngineeringTeamData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${remoteEngineeringTeamData.client_review?.background_image.data.attributes.formats.large.url}`  : ''} 
          />
        </div>
        <ContactUs contactUsData = {remoteEngineeringTeamData?.client_query || []} />
        <ModelBox modalBoxData={modalBoxData} />
    </div>
  )
}

export default RemoteEngineeringTeam