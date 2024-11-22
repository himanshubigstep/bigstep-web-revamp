import React from 'react';
import Button from '../button/Button';

interface Partner {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PartnerSectionData {
  heading: string;
  button_text?: string;
  description: string;
  background_image: {
    data: {
      attributes: {
        formats: {
          large: {
            url: string;
          };
        };
      };
    };
  }
}

interface PartnersBlockProps {
  homePageData: PartnerSectionData;
  partnerShipData: Partner[];
  headingClass: string
  descriptionClass: string
  mainClass: string
}

const PartnersBlock: React.FC<PartnersBlockProps> = ({ homePageData, partnerShipData, headingClass, descriptionClass, mainClass }) => {
  return (
    <div className={mainClass}>
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.background_image?.data?.attributes?.formats?.large?.url}`}
        alt='image'
        className='absolute top-0 bottom-0 w-full h-full flex justify-center object-top object-cover items-center text-center'
      />
      <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4'>
        <h2 className={headingClass}>{homePageData.heading}</h2>
        <p className={descriptionClass}>{homePageData.description}</p>
      </div>
      <div className='relative w-full max-w-[1140px] mx-auto bg-white rounded-2xl flex flex-wrap md:justify-center text-center mt-8'>
        <div className='dark:bg-gray-200 w-full h-full flex justify-center items-center bg-white md:rounded-xl py-8 relative'>
          <div className='flex flex-wrap w-full relative z-10 px-8 justify-center items-start'>
            {partnerShipData && partnerShipData.map((partner, index) => (
              <div key={index} className='md:w-1/4 w-1/2 px-4 flex justify-center items-start grayscale hover:grayscale-0 hover:scale-105 py-8'>
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {homePageData.button_text &&
        <div className='relative w-full h-auto px-4 pt-8 flex justify-center items-center'>
          <Button text={homePageData.button_text} className='py-4 px-8 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal' onClick={() => { }} />
        </div>
      }
    </div>
  );
};

export default PartnersBlock;
