import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import BigsteLogo from '../../../assets/bigstep logo.png';

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
  services: Service[] | null; // Allow services to be null
  containerClassName?: string;
  logoClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  serviceContainerClassName?: string;
  serviceItemClassName?: string;
  serviceIconClassName?: string;
  buttonClassName?: string;
}

const CommonBlock: React.FC<CommonBlockProps> = ({ 
  title,
  description,
  services = [], // Default to empty array if services is null
  containerClassName = '',
  logoClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  serviceContainerClassName = '',
  serviceItemClassName = '',
  serviceIconClassName = '',
  buttonClassName = '',
 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 2;
  const totalItems = services ? services.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = isMobile ? services && services.slice(startIndex, startIndex + itemsPerPage) : services;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className={`${containerClassName}`}>
      <div className='absolute top-0 bottom-0 w-full flex justify-center items-center text-center py-8'>
        <Image
          src={BigsteLogo}
          alt='image'
          className={`${logoClassName}`}
        />
      </div>
      <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className={`${titleClassName}`}>{title}</h2>
        <p className={`${descriptionClassName}`}>{description}</p>
      </div>
      <div className={`${serviceContainerClassName}`}>
        {currentServices && currentServices.map((service, index) => (
          <div key={index} className={`${serviceItemClassName}`}>
            <div className={`${serviceIconClassName}`} style={{ backgroundColor: service?.attributes?.hex_code }}>
              <img className='w-12 p-2' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service?.attributes?.logo?.data?.attributes?.url}`} alt={service?.attributes?.heading} />
            </div>
            <div className='w-full text-left flex flex-col gap-2'>
              <h4 className='text-lg font-medium'>{service?.attributes?.heading}</h4>
              <p className='text-md font-normal'>{service?.attributes?.discription}</p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className='relative flex justify-between items-center mt-8'>
          <button onClick={handlePrevious} disabled={currentPage === 1} className={`${buttonClassName}`}>&lt; Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages} className={`${buttonClassName}`}>Next &gt;</button>
        </div>
      )}
    </div>
  );
}

export default CommonBlock;
