import React from 'react'
import Button from '../button/Button';

const PartnersBlock = ({ homePageData, partnerShipData }: { homePageData: any, partnerShipData: any }) => {
  return (
    <div className='relative w-full md:py-16 py-8'>
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.background_image?.data?.attributes?.formats?.large?.url}`}
        alt='image'
        className='dark:invert absolute top-0 bottom-0 w-full h-full object-cover'
      />
      <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-3xl font-medium text-center mb-4'>{homePageData?.heading}</h2>
        <p className='text-lg font-normal'>{homePageData?.description}</p>
      </div>
      <div className='relative w-full max-w-[1140px] mx-auto bg-white rounded-2xl flex flex-wrap md:justify-center text-center mt-8'>
        <div className='dark:bg-gray-200 w-full h-full flex justify-center items-center bg-white md:rounded-xl py-8 relative'>
          <div className='flex flex-wrap w-full relative z-10 px-8 justify-center items-center'>
            {partnerShipData && partnerShipData.map((partner: { src: any; alt: any; width: any; height: any }, index: React.Key | null | undefined) => (
              <div key={index} className='md:w-1/4 w-1/2 px-4 flex justify-center items-center grayscale hover:grayscale-0'>
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain w-auto h-[10rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative w-full h-auto px-4 pt-8 flex justify-center items-center'>
        <Button text={homePageData?.button_text} className='py-4 px-8 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal' onClick={() => { }} />
      </div>
    </div>
  )
}

export default PartnersBlock