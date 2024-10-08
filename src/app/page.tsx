'use client'
import { useEffect, useState } from "react";
import SlideShowText from "./components/common/slider/SlideShowText";
import CommonBlock from "./components/common/common-blocks-division/CommonBlock";
import SuccessStoriesBlocks from "./components/common/sucess-stories-blocks/SuccessStoriesBlocks";
import ClientCarousel from "./components/common/client-carousel/ClientCarousel";
import PartnersBlock from "./components/common/partners-section/PartnersBlock";
import { fetchHomepageData, fetchHomePageCarousel, fetchPaternershipData, fetchHeaderData, fetchServiceDataHome } from "@/api-data/api";
import MilesTone from "./components/common/milestones-data/MilesTone";
import Clients from "./components/common/clients/Clients";
import NewsLetter from "./components/common/news-letter/NewsLetter";
import AITech from "./components/common/ai-tech/AITech";
import ContactUs from "./components/common/contact-us/ContactUs";

const clients = [
  'https://bigsteptech.com/wp-content/uploads/2024/01/jio.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/vts.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/leap.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/play-day.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/invest-india.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/melophy.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/fliksta.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/hod.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/ey.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/vmly.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/accenture.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/policy-boss.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/gathering-us.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/airmeet.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/bizzabo.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/infinity-learn.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/firebolt.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/balbo.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/travel-me.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/agora.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/make-in-india.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/tcc.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/Torum.png',
  'https://bigsteptech.com/wp-content/uploads/2024/01/soundcore.png'
]

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
    const fetchHomePageServiceData = async () => {
      try {
        const response = await fetchServiceDataHome();
        setHomePageServiceData(response);
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    fetchHomePageServiceData();
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
      }
    }

    fetchHomePageCarouselData();
  }, [])

  return (
    <div className="w-full h-full bg-white dark:bg-black">
      <SlideShowText slides={homePageCarousel} />
      <CommonBlock
        title={homePageData?.technologies[0]?.heading || ''}
        description={homePageData?.technologies[0]?.description || ''}
        services={homePageServiceData}
      />
      <SuccessStoriesBlocks sucessStoriesData={homePageData?.success_stories} />
      <ClientCarousel
        clients={clients}
        heading={homePageData?.trusted_by?.heading || ''}
        description={homePageData?.trusted_by?.description || ''}
      />
      <PartnersBlock
        homePageData={homePageData?.partners[0]}
        partnerShipData={partnerShipData}
      />
      <MilesTone homePageData={homePageData} />
      <Clients
        title={homePageData?.client_reviews[0].heading || ''}
        description={homePageData?.client_reviews[0].description || ''}
        bgImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.client_reviews[0].background_image.data.attributes.formats.large.url}`  : ''} 
      />
      <NewsLetter latest_info={homePageData?.latest_info} buttonText="Subscribe" />
      <AITech
        bannerTitle={homePageData?.home_page_blogs[0].heading || ''}
        bannerDescription={homePageData?.home_page_blogs[0].description || ''}
        buttonTitle={homePageData?.home_page_blogs[0].button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
      />
      <ContactUs buttonText="Send" contactUsData = {homePageData?.get_in_touch || []} />
    </div>
  );
}
