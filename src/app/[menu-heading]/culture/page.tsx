'use client'
import { fetchCulturePageData } from '@/api-data/api';
import CommonBlock from '@/app/components/common/common-blocks-division/CommonBlock';
import LoaderSpinner from '@/app/components/common/loader-spinner/LoadingSpinner';
import CultureServiceBlock from '@/app/components/culture-service-block/CultureServiceBlock';
import CultureTopSlider from '@/app/components/culture-top-slider/CultureTopSlider'
import StarDom from '@/app/components/stardom/StarDom';
import StrengthStrip from '@/app/components/streanth-strip/StrengthStrip';
import VideoPlayerComponent from '@/app/components/video-player-component/VideoPlayerComponent';
import React, { useEffect, useState } from 'react'

interface CulturePageData {
  id: number;
  bigstep_annual_heading: {
    id: number;
    heading: string;
    description: string;
  }
  core_values_heading: {
    id: number;
    heading: string;
    description: string;
  }
  core_values_data: {
    id: number;
    heading: string;
    description: string;
    hex_code: string;
    serviceLogo: {
      data: {
        attributes: {
          formats: {
            url: string
          }
        }
      }
    }
  }[]
  cultural_bigstepians: {
    id: number;
    heading: string;
    description: string;
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
  cultural_bigstepians_data: {
    id: number;
    heading: string;
    description: string;
    image: {
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
  }[]
  employee_data: {
    id: number;
    heading: string;
    description: string;
  }[]
  intro: {
    id: number;
    heading: string;
    description: string;
    images: {
      data: {
        id: number;
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
  }[]
}

const CulturePage = () => {
  const [culturalPageData, setCulturalPageData] = useState<CulturePageData | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCulturePageDataResponse = async () => {
      try {
        const response = await fetchCulturePageData();
        setCulturalPageData(response.attributes);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCulturePageDataResponse();
  }, []);

  if (loading) {
    return <LoaderSpinner />;
  }

  const firstRowData = culturalPageData?.cultural_bigstepians_data.slice(0, 3)
  const secondRowData = culturalPageData?.cultural_bigstepians_data.slice(3)

  const mappedSlides = culturalPageData?.intro?.map((item) => ({
    id: item.id,
    attributes: {
      button_link: '',
      button_text: '',
      category: '',
      text_body: item.description,
      title: item.heading,
      image: {
        data: {
          attributes: {
            url: item.images.data.attributes.url,
            ext: item.images.data.attributes.formats.large.url.split('.').pop() || '',
          },
        },
      },
    },
  }));

  return (
    <div className='poppins relative w-full h-full'>
      <CultureTopSlider slides={mappedSlides} />
      <StrengthStrip employeeData={culturalPageData?.employee_data} />
      <CultureServiceBlock
        title={culturalPageData?.core_values_heading?.heading || ''}
        description={culturalPageData?.core_values_heading?.description || ''}
        services={culturalPageData?.core_values_data}
        containerClassName='relative w-full max-w-[1440px] mx-auto md:py-16 py-8 px-4'
        logoClassName='md:w-auto w-full md:h-full md:object-fill object-cover'
        titleClassName='text-3xl font-semibold text-center mb-4'
        descriptionClassName='text-lg font-normal '
        serviceContainerClassName='relative w-full flex flex-wrap text-center'
        serviceItemClassName='md:mt-8 flex flex-col justify-center md:w-1/3 w-1/2 md:px-12 md:py-6 md:px-4 py-4 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'
        serviceIconClassName='rounded-full w-16 h-16 flex justify-center items-center md:mr-4 md:mb-0 mb-4'
        buttonClassName='px-4 py-2 mx-2 bg-gray-300 rounded'
        serviceHeaderClassName="w-auto text-left flex flex-col gap-2"
      />
      <StarDom
        heading={culturalPageData?.cultural_bigstepians?.heading || ''}
        description={culturalPageData?.cultural_bigstepians?.description || ''}
        backgroundImage={culturalPageData?.cultural_bigstepians?.images?.data?.attributes?.formats?.large?.url || ''}
        firstRowClass="grid w-full grid-cols-3 gap-8 justify-center items-center px-8 relative z-10"
        secondRowClass="grid w-full grid-cols-3 gap-8 justify-center items-center px-8 relative z-10 mt-8"
        firstRowData={firstRowData}
        secondRowData={secondRowData}
      />
      <VideoPlayerComponent
        videoSectionData={culturalPageData?.bigstep_annual_heading}
      />
    </div>
  )
}

export default CulturePage