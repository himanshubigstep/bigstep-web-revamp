'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Address from '../common/address/Address'
import FooterTags from './footer-tags/FooterTags'
import Image from 'next/image'
import FooterNavigation from './footer-nav/FooterNavigation'
import FooterBottom from './footer-bottom/FooterBottom'
import { fetchFooterData } from '@/api-data/api'

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);
  useEffect(() => {
    const fetchHeaderDataResponse = async () => {
      try {
        const response = await fetchFooterData();
        setFooterData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeaderDataResponse();
  }, []);
  
  if (!footerData) {
    return;
  }

  const { attributes } = footerData;
  const logoSrc = attributes?.logo?.data[0]?.attributes?.url || null;
  const logoWidth = 240;
  const logoHeight = 100;
  return (
    <Fragment>
      <div className='poppins relative w-full bg-[#242424] dark:border-t-gray-800 dark:border-t-2 md:p-16 p-8'>
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${footerData?.attributes?.background_image?.data?.attributes?.url}`}
          alt='Footer Background'
          className='absolute left-0 right-0 top-0 bottom-0 w-full h-full object-contain bg-repeat-x opacity-80'
        />
        <div className='relative w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between'>
          <div className='h-full md:w-1/4 w-full flex flex-col'>
            <Image
              src={`http://103.209.145.167:4000${logoSrc}`}
              alt='Footer Logo'
              width={logoWidth}
              height={logoHeight}
              className='mb-12'
            />
            <Address attributes={attributes} />
            <FooterTags attributes={attributes} />
          </div>
          <FooterNavigation attributes={attributes} />
        </div>
      </div>
      <FooterBottom attributes={attributes} />
    </Fragment>
  )
}

export default Footer