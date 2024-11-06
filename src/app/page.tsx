'use client'
import { useEffect, useState } from "react";
import SlideShowText from "./components/common/slider/SlideShowText";
import CommonBlock from "./components/common/common-blocks-division/CommonBlock";
import SuccessStoriesBlocks from "./components/common/sucess-stories-blocks/SuccessStoriesBlocks";
import ClientCarousel from "./components/common/client-carousel/ClientCarousel";
import PartnersBlock from "./components/common/partners-section/PartnersBlock";
import { fetchHomepageData, fetchHomePageCarousel, fetchPaternershipData, fetchHeaderData, fetchServiceDataHome, fetchtrustedClients } from "@/api-data/api";
import MilesTone from "./components/common/milestones-data/MilesTone";
import Clients from "./components/common/clients/Clients";
import NewsLetter from "./components/common/news-letter/NewsLetter";
import AITech from "./components/common/ai-tech/AITech";
import ContactUs from "./components/common/contact-us/ContactUs";
import LoaderSpinner from "./components/common/loader-spinner/LoadingSpinner";
import OurValues from "./components/our-values/OurValues";
import ModelBox from "./components/model-box/ModelBox";

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

interface HomePageCarousel {
  id: number;
  attributes: {
    button_link: string;
    button_text: string;
    category: string;
    text_body: string;
    title: string;
    image: {
      data: {
        attributes: {
          url: string;
          ext: string;
          formats: {
            large: {
              url: string;
            }
          }
        }
      }
    }
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

export default function Home() {
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null)
  const [homePageCarousel, setHomePageCarousel] = useState<HomePageCarousel[]>([])
  const [partnerShipData, setPartnerShipData] = useState<any>();
  const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);
  const [homePageServiceData, setHomePageServiceData] = useState<any>([]);
  const [truestedClientsData, setTrustedClientsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchHeaderDataResponse = async () => {
      try {
        const response = await fetchHeaderData();
        setHeaderDataLink(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchHeaderDataResponse();
  }, [])
  
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

  useEffect(() => {
    const fetchtrustedClientsData = async () => {
      try {
        const response = await fetchtrustedClients();
        setTrustedClientsData(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchtrustedClientsData()
  }, [])

  useEffect(() => {
    const fetchHomePageDataResponse = async () => {
      try {
        const response = await fetchHomepageData();
        setHomePageData(response.attributes);

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
        
        setPartnerShipData(partners);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageDataResponse();
  }, []);

  useEffect(() => {
    const fetchHomePageCarouselData = async () => {
      try {
        const response = await fetchHomePageCarousel();
        setHomePageCarousel(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchHomePageCarouselData();
  }, [])

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className="poppins w-full h-full bg-white dark:bg-black">
      <SlideShowText slides={homePageCarousel} />
      <CommonBlock
        title={homePageData?.technologies[0]?.heading || ''}
        description={homePageData?.technologies[0]?.description || ''}
        services={homePageServiceData}
        containerClassName= 'relative w-full max-w-[1440px] mx-auto md:py-16 py-8 px-4'
        logoClassName= 'md:w-auto w-full md:h-full md:object-fill object-cover'
        titleClassName= 'text-3xl font-semibold text-center mb-4'
        descriptionClassName= 'text-lg font-normal '
        serviceContainerClassName= 'relative w-full flex flex-wrap md:justify-center text-center'
        serviceItemClassName= 'md:mt-8 flex flex-col justify-center md:w-1/3 w-1/2 md:px-12 md:py-6 md:px-4 py-4 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconClassName='rounded-full w-16 h-16 flex justify-center items-center md:mr-4 md:mb-0 mb-4'
        buttonClassName= 'px-4 py-2 mx-2 bg-gray-300 rounded'
        serviceHeaderClassName="w-full text-left flex flex-col gap-2"
      />
      <SuccessStoriesBlocks sucessStoriesData={homePageData?.success_stories} />
      <ClientCarousel
        clients={truestedClientsData}
        heading={homePageData?.trusted_by?.heading || ''}
        description={homePageData?.trusted_by?.description || ''}
      />
      <PartnersBlock
         homePageData={{
          heading: homePageData?.partners[0]?.heading || '',
          button_text: homePageData?.partners[0]?.button_text || '',
          description: homePageData?.partners[0]?.description || '',
          background_image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: homePageData?.partners[0]?.background_image?.data?.attributes?.formats?.large?.url || '',
                  },
                },
              },
            },
          },
        }}
        partnerShipData={partnerShipData}
      />
      <MilesTone homePageData={homePageData} />
      <OurValues />
      <Clients
        title={homePageData?.client_reviews[0].heading || ''}
        description={homePageData?.client_reviews[0].description || ''}
        bgImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.client_reviews[0].background_image.data.attributes.formats.large.url}`  : ''} 
      />
      <NewsLetter latest_info={homePageData?.latest_info} />
      <AITech
        bannerTitle={homePageData?.home_page_blogs[0].heading || ''}
        bannerDescription={homePageData?.home_page_blogs[0].description || ''}
        buttonTitle={homePageData?.home_page_blogs[0].button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <ContactUs contactUsData = {homePageData?.get_in_touch[0]} />
      <ModelBox />
    </div>
  );
}
