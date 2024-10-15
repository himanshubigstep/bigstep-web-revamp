'use client'
import { fetchHeaderData, fetchHomepageData, fetchServiceDataHome } from '@/api-data/api';
import AITech from '@/app/components/common/ai-tech/AITech';
import Clients from '@/app/components/common/clients/Clients';
import CommonBlock from '@/app/components/common/common-blocks-division/CommonBlock'
import ContactUs from '@/app/components/common/contact-us/ContactUs';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import Parterners from '@/app/components/common/partner-common-block/Parterners';
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface HomePageData {
  id: number;
  home_introduction: {
    id: number;
    heading: string;
    button_text: string;
    description: string;
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
  }[];
  Message: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string;
    background_image: any
  };
  success_stories: {
    id: number;
    heading: string;
    button_text: string;
    description: string;
  };
  technologies: {
    id: number;
    heading: string;
    button_text: string;
    description: string;
  }[];
  milestones: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string;
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
  };
  milestones1: {
    id: number;
    Years: {
      id: number;
      description: string;
      heading: string;
    };
    cloud_projects: {
      id: number;
      description: string;
      heading: string;
    };
    deliveries: {
      id: number;
      description: string;
      heading: string;
    };
    experts: {
      id: number;
      description: string;
      heading: string;
    };
  }
  partners: {
    id: number;
    heading: string;
    button_text: string;
    description: string;
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
  }[];
  client_reviews: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string;
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
  }[];
  home_page_blogs: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string | null;
  }[];
  culture: {
    id: number;
    heading: string;
    description: string;
  };
  faq: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string;
  }[];
  trusted_by: {
    heading: string;
    description: string;
  };
  latest_info: {
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
    heading: string;
  }
  get_in_touch: any[];
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
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null)
  const [homePageServiceData, setHomePageServiceData] = useState<any>([]);

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
    const fetchHomePageDataResponse = async () => {
      try {
        const response = await fetchHomepageData();
        setHomePageData(response.attributes)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageDataResponse();
  }, []);
  
  useEffect(() => {
    const fetchHomePageServiceData = async () => {
      try {
        const response = await fetchServiceDataHome();
        setHomePageServiceData(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchHomePageServiceData();
  }, [])

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins'>
      <TopBanner />
      <CommonBlock
        title={homePageData?.technologies[0]?.heading || ''}
        description={homePageData?.technologies[0]?.description || ''}
        services={homePageServiceData}
        containerClassName='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 md:px-4'
        logoClassName='md:w-auto w-full md:h-full'
        titleClassName='text-3xl font-medium text-center mb-4'
        descriptionClassName='text-lg font-normal '
        serviceContainerClassName='relative w-full flex flex-wrap md:justify-center text-center'
        serviceItemClassName='mt-8 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-4 py-4 gap-4 justify-center items-center hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconClassName='rounded-full w-16 h-16 flex justify-center items-center'
        buttonClassName='px-4 py-2 mx-2 bg-gray-300 rounded'
        serviceHeaderClassName='w-full text-center flex flex-col gap-2'
        mainbutton='px-8 py-4 mx-2 bg-blue-500 hover:bg-blue-800 rounded-xl text-white'
      />
      <Parterners />
      <AITech
        bannerTitle={homePageData?.home_page_blogs[0].heading || ''}
        bannerDescription={homePageData?.home_page_blogs[0].description || ''}
        buttonTitle={homePageData?.home_page_blogs[0].button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <Clients
        title={homePageData?.client_reviews[0].heading || ''}
        description={homePageData?.client_reviews[0].description || ''}
        bgImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.client_reviews[0].background_image.data.attributes.formats.large.url}`  : ''} 
      />
      <ContactUs buttonText="Send" contactUsData = {homePageData?.get_in_touch || []} />
    </div>
  )
}

export default CloudServices