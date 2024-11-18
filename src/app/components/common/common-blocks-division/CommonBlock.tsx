import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import BigsteLogo from '../../../assets/bigstep logo.png';
import Button from '../button/Button';

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
  id: number;
  attributes: ServiceAttributes;
}

interface CommonBlockProps {
  title: string;
  description?: string;
  services: Service[] | null;
  containerClassName?: string;
  logoClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  serviceContainerClassName?: string;
  serviceItemClassName?: string;
  serviceIconClassName?: string;
  buttonClassName?: string;
  serviceHeaderClassName?: string;
  mainbutton?: string
}

const CommonBlock: React.FC<CommonBlockProps> = ({ 
  title,
  description,
  services = [],
  containerClassName = '',
  logoClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  serviceContainerClassName = '',
  serviceItemClassName = '',
  serviceIconClassName = '',
  buttonClassName = '',
  serviceHeaderClassName = '',
  mainbutton = ''
 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 4;
  
  const sortedServices = services?.sort((a, b) => a.id - b.id) || [];
  const totalItems = sortedServices.length;
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
  const currentServices = isMobile ? sortedServices.slice(startIndex, startIndex + itemsPerPage) : sortedServices;

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
      <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center text-center py-8'>
        <Image
          src={BigsteLogo}
          alt='image'
          className={`${logoClassName}`}
        />
      </div>
      <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className={`${titleClassName}`}>{title}</h2>
        {description &&
          <p className={`${descriptionClassName}`}>{description}</p>
        }
      </div>
      <div className={`${serviceContainerClassName}`}>
        {currentServices.map((service, index) => (
          <div key={service.id} className={`${serviceItemClassName}`}>
            <div className='w-full flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center'>
              <div className={`${serviceIconClassName}`} style={{ backgroundColor: service.attributes.hex_code }}>
                <img
                  className='w-12 p-2'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${service.attributes.logo.data.attributes.url}`}
                  alt={service.attributes.heading}
                />
              </div>
              <h4 className='md:w-[60%] w-full md:text-left text-center md:text-xl text-lg font-semibold menu-item-text hover:text-blue-500'>{service.attributes.heading}</h4>
            </div>
            <div className={serviceHeaderClassName}>
              <p className='text-md font-normal md:flex hidden'>{service.attributes.discription}</p>
            </div>
          </div>
        ))}
      </div>
      {mainbutton &&
        <div className='relative w-full h-auto px-4 pt-8 flex justify-center items-center'>
          <Button
            text='Learn more about our Best Practices'
            onClick={() => console.log('Get Started')}
            className={`${mainbutton}`}
          />
        </div>
      }
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
