import React from 'react'
import Image, { StaticImageData } from 'next/image'
import BigsteLogo from '../../../assets/bigstep logo.png'

interface ServiceAttributes {
  hex_code: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  heading: string;
  discription: string;
}

interface Service {
  icon: string | StaticImageData;
  attributes: ServiceAttributes;
}

interface CommonBlockProps {
  title: string;
  description: string;
  services: Service[];
}

const CommonBlock: React.FC<CommonBlockProps> = ({ title, description, services }) => {
  return (
    <div className='relative w-full max-w-[1440px] mx-auto md:py-16 py-8'>
      <div className='absolute top-0 bottom-0 w-full flex justify-center items-center text-center py-8'>
        <Image
          src={BigsteLogo}
          alt='image'
          className='md:w-auto w-full md:h-full'
        />
      </div>
      <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-3xl font-medium text-center mb-4'>{title}</h2>
        <p className='text-lg font-normal'>{description}</p>
      </div>
      <div className='relative w-full flex flex-wrap md:justify-center text-center'>
        {services.map((service, index) => (
          <div key={index} className=' mt-8 flex flex-col md:w-1/3 w-1/2 md:px-12 md:py-6 px-4 py-4 gap-4 justify-start items-start hover:shadow-2xl hover:bg-white hover:rounded-2xl dark:hover:bg-black'>
            <div className='rounded-full w-16 h-16 flex justify-center items-center' style={{ backgroundColor: service?.attributes?.hex_code }}>
              <img className='w-12 p-2' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.attributes?.logo?.data?.attributes?.url}`} alt={service?.attributes?.heading} />
            </div>
            <div className='text-left flex flex-col gap-2'>
              <h4 className='text-lg font-medium'>{service?.attributes?.heading}</h4>
              <p className='text-md font-normal'>{service?.attributes?.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommonBlock