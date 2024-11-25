'use client'
import React, { useEffect, useState } from 'react'
import TopBanner from '../components/common/top-banner/TopBanner'
import ContactUs from '../components/common/contact-us/ContactUs';
import { fetchContactUsPage } from '@/api-data/api';
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';

interface ContactUsData {
  attributes: {
    intro: {
      id: number;
      buttonText: string;
      description: string;
      heading: string;
      link: string;
      backgroundImage: {
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
    get_in_touch: {
      id: number;
      heading: string;
      description: string;
    }
  }
}

const ContactUsPage = () => {
  const [contactUsData, setContactUsData] = useState<ContactUsData | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContactUsDataResponse = async () => {
      try {
        const response = await fetchContactUsPage();
        setContactUsData(response);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    }

    fetchContactUsDataResponse();
  }, [])

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins w-full h-full'>
      <TopBanner bannerData={contactUsData?.attributes?.intro} />
      <div className='w-full h-full flex justify-center items-center md:pt-16 pt-8'>
        <ContactUs contactUsData={contactUsData?.attributes?.get_in_touch} />
      </div>
    </div>
  )
}

export default ContactUsPage