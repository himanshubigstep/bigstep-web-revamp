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
      document.title = aboutUsData?.attributes?.seo?.metaTitle || "Default Title";
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = aboutUsData?.attributes?.seo?.metaDescription || "Default description";
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url";

      // Open Graph meta tags
      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = aboutUsData?.attributes?.seo?.metaTitle || "Default Title";

      let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
      if (!ogDescription) {
        ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        document.head.appendChild(ogDescription);
      }
      ogDescription.content = aboutUsData?.attributes?.seo?.metaDescription || "Default description";

      let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
      if (!ogUrl) {
        ogUrl = document.createElement("meta");
        ogUrl.setAttribute("property", "og:url");
        document.head.appendChild(ogUrl);
      }
      ogUrl.content = aboutUsData?.attributes?.seo?.canonicalURL || window.location.href;
    }
  }, [aboutUsData]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  if (loading) {
    return <LoaderSpinner />;
  }

  const empoweringValues = Array.isArray(aboutUsData?.attributes?.empowering_values)
    ? aboutUsData?.attributes?.empowering_values
    : [];

  return (
    <div className='poppins relative w-full h-full'>
      <Head>
        <meta property="og:title" content={aboutUsData?.attributes?.seo?.metaTitle || "Default Title"} />
        <meta property="og:description" content={aboutUsData?.attributes?.seo?.metaDescription || "Default description"} />
        <meta property="og:url" content={aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
        <meta property="og:type" content="website" />

        {/* For Twitter cards */}
        <meta name="twitter:title" content={aboutUsData?.attributes?.seo?.metaTitle || "Default Title"} />
        <meta name="twitter:description" content={aboutUsData?.attributes?.seo?.metaDescription || "Default description"} />
        <meta property="twitter:url" content={aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Standard meta tags */}
        <meta name="title" content={aboutUsData?.attributes?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={aboutUsData?.attributes?.seo?.metaDescription || "Default Description"} />
        <link rel="canonical" href={aboutUsData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
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