'use client'
import React, { useEffect, useState } from 'react'
import TopBanner from '../components/common/top-banner/TopBanner'
import { fetchContactUsPage } from '@/api-data/api';
import LoaderSpinner from '../components/common/loader-spinner/LoadingSpinner';
import Head from 'next/head';
import SimpleContactForm from '../components/common/contact-us/simple-contact-form/SimpleContactForm';

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
    seo: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      canonicalURL: string;
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

  useEffect(() => {
    if (contactUsData) {
      document.title = contactUsData?.attributes?.seo?.metaTitle || "Default Title";
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = contactUsData?.attributes?.seo?.metaDescription || "Default description";
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = contactUsData?.attributes?.seo?.canonicalURL || "default-canonical-url";
    }
  }, [contactUsData]);

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='poppins w-full h-full'>
      <Head>
        <link rel="canonical" href={contactUsData?.attributes?.seo?.canonicalURL || "default-canonical-url"} />
        <meta name="title" content={contactUsData?.attributes?.seo?.metaTitle || "Default description"} />
        <meta name="description" content={contactUsData?.attributes?.seo?.metaDescription || "Default Description"} />
      </Head>
      <TopBanner bannerData={contactUsData?.attributes?.intro} />
      <div className='w-full h-full flex justify-center items-center'>
        <SimpleContactForm contactUsData={contactUsData?.attributes?.get_in_touch} />
      </div>
    </div>
  )
}

export default ContactUsPage