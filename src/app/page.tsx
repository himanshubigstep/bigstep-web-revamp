'use client'
import { useEffect, useState } from "react";
import SlideShowText from "./components/common/slider/SlideShowText";
import CommonBlock from "./components/common/common-blocks-division/CommonBlock";
import SuccessStoriesBlocks from "./components/common/sucess-stories-blocks/SuccessStoriesBlocks";
import ClientCarousel from "./components/common/client-carousel/ClientCarousel";
import PartnersBlock from "./components/common/partners-section/PartnersBlock";
import { fetchHomepageData, fetchHomePageCarousel, fetchPaternershipData, fetchHeaderData, fetchServiceDataHome, fetchtrustedClients, fetchModalBoxHomePage } from "@/api-data/api";
import MilesTone from "./components/common/milestones-data/MilesTone";
import Clients from "./components/common/clients/Clients";
import NewsLetter from "./components/common/news-letter/NewsLetter";
import AITech from "./components/common/ai-tech/AITech";
import ContactUs from "./components/common/contact-us/ContactUs";
import LoaderSpinner from "./components/common/loader-spinner/LoadingSpinner";
import OurValues from "./components/our-values/OurValues";
import ModelBox from "./components/model-box/ModelBox";
import Head from "next/head";
import SimpleContactForm from "./components/common/contact-us/simple-contact-form/SimpleContactForm";

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
          url: string;
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
    background_image: {
      data: {
        attributes: {
          url: string;
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
  }[];
  milestones: {
    id: number;
    heading: string;
    button_text: string | null;
    description: string;
    background_image: {
      data: {
        attributes: {
          url: string;
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
    button_link: string;
    background_image: {
      data: {
        attributes: {
          url: string;
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
          url: string;
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
    background_image: {
      data: {
        attributes: {
          url: string;
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
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
          url: string;
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
  value: {
    id: number;
    description: string;
    title: string;
    value_1: {
      id: number;
      link: string;
      image: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }[]
    value_photos: {
      data: {
        id: number;
        attributes: {
          url: string;
          formats: {
            large: {
              url: string;
            }
          }
        }
      }[]
    }
  }
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalURL: string;
  }
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

// export const metadata: Metadata = {
//   title: "About Us - My Website"
// };

export default function Home() {
  const [homePageMetaData, setHomePageMetaData] = useState({ title: "Home Page" });
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null)
  const [homePageCarousel, setHomePageCarousel] = useState<HomePageCarousel[]>([])
  const [partnerShipData, setPartnerShipData] = useState<any>();
  const [headerDataLink, setHeaderDataLink] = useState<headerDataLink | null>(null);
  const [homePageServiceData, setHomePageServiceData] = useState<any>([]);
  const [truestedClientsData, setTrustedClientsData] = useState<any>([]);
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
        let serviceResponse = await fetchtrustedClients();
        let allServiceData = serviceResponse?.data || [];

        while (serviceResponse?.meta?.pagination.page < serviceResponse?.meta?.pagination.pageCount) {
          const nextPage = serviceResponse.meta.pagination.page + 1;
          serviceResponse = await fetchtrustedClients(nextPage);
          allServiceData = allServiceData.concat(serviceResponse?.data || []);
        }
        setTrustedClientsData(allServiceData);
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

  useEffect(() => {
    if (homePageData) {
      // Set document title
      document.title = homePageData?.seo?.metaTitle || "Default Title";
  
      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  
      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
  
      // Set content for the meta description
      metaDescription.content = homePageData?.seo?.metaDescription || "Default description";
  
      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
  
      // Set href for the canonical link
      canonicalLink.href = homePageData?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [homePageData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className="poppins w-full h-full">
      <Head>
        <link rel="canonical" href={homePageData?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={homePageData?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={homePageData?.seo?.metaDescription || "Default Description"} />
      </Head>
      <SlideShowText slides={homePageCarousel} />
      <CommonBlock
        title={homePageData?.technologies[0]?.heading || ''}
        description={homePageData?.technologies[0]?.description || ''}
        services={homePageServiceData}
        containerClassName='relative w-full max-w-[1440px] mx-auto lg:py-16 py-8 px-4'
        logoClassName='lg:w-auto w-auto lg:h-full lg:object-fill object-cover'
        titleClassName='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'
        descriptionClassName='lg:text-lg md:text-md sm:text-sm text-xs font-normal '
        serviceContainerClassName='relative w-full flex flex-wrap lg:justify-center text-center'
        serviceItemClassName='lg:mt-8 flex flex-col justify-center lg:w-1/3 md:w-1/3 w-1/2 lg:px-12 lg:py-6 px-4 py-4 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconClassName='rounded-full w-16 h-16 flex justify-center items-center lg:mr-4 lg:mb-0 mb-4'
        buttonClassName='rounded-full text-white px-4 py-2 mx-2 bg-blue-500 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none'
        serviceHeaderClassName="w-full text-left flex flex-col gap-2"
        backgroundImage={homePageData?.technologies[0]?.background_image?.data?.attributes?.url}
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
          button_link: homePageData?.partners[0]?.button_link || '',
          background_image: {
            data: {
              attributes: {
                formats: {
                  large: {
                    url: homePageData?.partners[0]?.background_image?.data?.attributes?.url || '',
                  },
                },
              },
            },
          },
        }}
        mainClass="relative w-full md:py-16 py-8"
        headingClass="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 dark:text-black"
        descriptionClass="lg:text-lg md:text-md sm:text-sm text-xs font-normal dark:text-black"
        partnerShipData={partnerShipData}
      />
      <MilesTone homePageData={homePageData} />
      <OurValues valuesData={homePageData?.value} />
      <Clients
        title={homePageData?.client_reviews[0].heading || ''}
        description={homePageData?.client_reviews[0].description || ''}
        bgImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.client_reviews[0].background_image.data.attributes.url}` : ''}
      />
      <NewsLetter
        latest_info={homePageData?.latest_info}
      />
      <AITech
        bannerTitle={homePageData?.home_page_blogs[0].heading || ''}
        bannerDescription={homePageData?.home_page_blogs[0].description || ''}
        buttonTitle={homePageData?.home_page_blogs[0].button_text || ''}
        onButtonClick={headerDataLink?.attributes?.heading_blogs?.link || ''}
        bannerImage={homePageData ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData.home_page_blogs[0].background_image.data.attributes.url}` : ''}
      />
      {/* <ContactUs contactUsData={homePageData?.get_in_touch[0]} /> */}
      <SimpleContactForm contactUsData={homePageData?.get_in_touch[0]} />
      <ModelBox modalBoxData={modalBoxData} />
    </div>
  );
}
