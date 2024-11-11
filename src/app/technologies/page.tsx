'use client'
import { fetchTechnologyData } from '@/api-data/api';
import React, { useEffect, useState } from 'react'
import TopBanner from '../components/common/top-banner/TopBanner';

interface TechnologiesPageData {
  get_in_touch: {
    background_image: {
      data: {
        attributes: {
          formats: {
            large: {
              large: {
                url: string
              }
            }
          }
        }
      }
    }
    button_text: string
    description: string
    heading: string
    id: number
  }
  technological_experties: {
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
    id: number
  }
  technologies_introduction: {

  }
  our_tech_stack: string
}

const Technologies = () => {
    const [technologyData, setTechnologyData] = useState<TechnologiesPageData | null>(null)
    // const [homePageServiceData, setHomePageServiceData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchTechnologyPageDataResponse = async () => {
        try {
          const response = await fetchTechnologyData();
          setTechnologyData(response.attributes)
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTechnologyPageDataResponse();
    }, []);
  
    // useEffect(() => {
    //   const fetchHomePageServiceData = async () => {
    //     try {
    //       const response = await fetchServiceDataHome();
    //       setHomePageServiceData(response);
    //     } catch (error) {
    //       console.log(error);
    //       return null;
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
  
    //   fetchHomePageServiceData();
    // }, [])

    // if (loading) {
    //   return <LoaderSpinner />;
    // }

  return (
    <div className='poppins'>
        {/* <TopBanner bannerData={technologyData?.introduction} /> */}
        {/* <Parterners />
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
        <ContactUs buttonText="Send" contactUsData = {homePageData?.get_in_touch || []} /> */}
    </div>
  )
}

export default Technologies