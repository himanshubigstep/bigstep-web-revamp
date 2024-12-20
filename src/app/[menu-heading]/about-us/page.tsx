'use client'
import { fetchAboutUsData } from '@/api-data/api'
import ImagesAboutUs from '@/app/components/bigstep-image-about/ImagesAboutUs'
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner'
import TeamMembers from '@/app/components/common/team-member-section/TeamMembers'
import TopBanner from '@/app/components/common/top-banner/TopBanner'
import ImageBlocks from '@/app/components/image-blocks/ImageBlocks'
import StarDom from '@/app/components/stardom/StarDom'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

interface AboutUsPageData {
  attributes: {
    id: number;
    about_intro: {
      id: number;
      backgroundImage: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
      button_text: string;
      heading: string;
      description: string;
      link: string;
    }
    empowering: {
      id: number;
      heading: string;
    }
    empowering_values: {
      id: number;
      heading: string;
      description: string;
      images: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
    }[]
    startdom_heading: {
      id: number;
      heading: string;
      description: string;
      images: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
    }
    stardom_data: {
      id: number;
      heading: string;
      description: string;
      images: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
    }[]
    visnories_heading: {
      heading: string;
    }
    visnories_data: {
      id: number;
      heading: string;
      description: string;
      images: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    }[]
    heartbeat_heading: {
      id: number;
      heading: string;
      description: string;
      button_text: string;
      button_link: string;
      background_image: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
    }
    heartbeat_data: {
      id: number;
      images: {
        data: {
          attributes: {
            url: string;
            formats: {
              large: {
                url: string;
              }
            }
          }
        }
      }
    }[]
    seo: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      canonicalURL: string;
    }
  }
}

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsPageData | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAboutUsDataResponse = async () => {
      try {
        const response = await fetchAboutUsData();
        setAboutUsData(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchAboutUsDataResponse();
  }, [])

  const firstRowData = aboutUsData?.attributes?.stardom_data.slice(0, 2)
  const secondRowData = aboutUsData?.attributes?.stardom_data.slice(2)



  useEffect(() => {
    if (aboutUsData) {
      // Set document title
      document.title = aboutUsData?.attributes?.seo?.metaTitle || "Default Title";

      // Select meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;

      // If meta description doesn't exist, create it
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }

      // Set content for the meta description
      metaDescription.content = aboutUsData?.attributes?.seo?.metaDescription || "Default description";

      // Select canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      // If canonical link doesn't exist, create it
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }

      // Set href for the canonical link
      canonicalLink.href = aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [aboutUsData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  const empoweringValues = Array.isArray(aboutUsData?.attributes?.empowering_values)
    ? aboutUsData?.attributes?.empowering_values
    : [];

  return (
    <div className='poppins relative w-full h-full'>
      <Head>
        <link rel="canonical" href={aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={aboutUsData?.attributes?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={aboutUsData?.attributes?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={aboutUsData?.attributes?.about_intro} isAboutUs={true} />
      <ImageBlocks
        topHeading={aboutUsData?.attributes?.empowering?.heading || ''}
        section={empoweringValues}
      />
      <StarDom
        backgroundImage={aboutUsData?.attributes?.startdom_heading?.images?.data?.attributes?.formats?.large?.url || ''}
        heading={aboutUsData?.attributes?.startdom_heading?.heading || ''}
        description={aboutUsData?.attributes?.startdom_heading?.description || ''}
        firstRowClass="grid w-full grid-cols-2 gap-8 justify-center items-center relative z-10"
        secondRowClass="grid w-full grid-cols-3 gap-8 justify-center items-center relative z-10 mt-8"
        firstRowData={firstRowData}
        secondRowData={secondRowData}
      />
      <TeamMembers
        heading={aboutUsData?.attributes?.visnories_heading?.heading || ''}
        members={aboutUsData?.attributes?.visnories_data || []}
      />
      <ImagesAboutUs
        heartHeading={aboutUsData?.attributes?.heartbeat_heading?.heading || ''}
        heartDescription={aboutUsData?.attributes?.heartbeat_heading?.description || ''}
        heartButtonText={aboutUsData?.attributes?.heartbeat_heading?.button_text || ''}
        heartButtonLink={aboutUsData?.attributes?.heartbeat_heading?.button_link || ''}
        heartBackgroundImage={aboutUsData?.attributes?.heartbeat_heading?.background_image?.data?.attributes?.formats?.large?.url || ''}
        images={aboutUsData?.attributes?.heartbeat_data || []}
      />
    </div>
  )
}

export default AboutUs