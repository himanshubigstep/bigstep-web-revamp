'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import Button from '../common/button/Button'

const ModelBox = ({modalBoxData}: {modalBoxData: any}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
    const threshold = 100;
    const closeIconArea = {
      x: window.innerWidth - 50,
      y: 0,
      width: 50,
      height: 50
    };
    
    if (
      event.clientX >= closeIconArea.x - threshold &&
      event.clientX <= closeIconArea.x + closeIconArea.width + threshold &&
      event.clientY >= closeIconArea.y - threshold &&
      event.clientY <= closeIconArea.y + closeIconArea.height + threshold
    ) {
      if (!isVisible && !hasClosed) {
        setIsVisible(true);
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible, hasClosed]);

  return (
    <>
      {isVisible && (
        <>
          <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-10" />
          <div ref={modalRef} className='fixed z-20 top-[15%] left-0 right-0 mx-auto w-[95%] max-w-[80%] lg:h-[80%] md:h-[36rem] bg-white dark:bg-black rounded-2xl overflow-y-auto shadow-2xl'>
            <div className='w-full h-full flex lg:flex-row flex-col-reverse overflow-y-auto lg:p-8 p-4 gap-4 items-center'>
              <div className='lg:w-[50%] w-full h-full flex flex-col justify-center gap-8'>
                <span className='text-3xl font-semibold'>{modalBoxData[0]?.attributes?.Modal_closing[0]?.label}</span>
                <h2 className='text-xl font-semibold text-blue-400'>{modalBoxData[0]?.attributes?.Modal_closing[0]?.heading}</h2>
                <p className='text-lg font-normal'>{modalBoxData[0]?.attributes?.Modal_closing[0]?.description}</p>
                <Button
                  text={modalBoxData[0]?.attributes?.Modal_closing[0]?.buttonText}
                  onClick={() => window.location.href = modalBoxData[0]?.attributes?.Modal_closing[0]?.link}
                  className='lg:w-[75%] w-full py-4 px-8 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                />
              </div>
              <div className='lg:w-[50%] w-full h-full flex'>
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${modalBoxData[0]?.attributes?.Modal_closing[0]?.backgroundImage?.data[0]?.attributes?.url}`}
                  alt='image'
                  className='w-auto h-auto'
                />
              </div>
            </div>
            <IoClose
              onClick={handleClose}
              className='absolute top-2 right-2 text-4xl cursor-pointer text-black dark:text-white'
            />
          </div>
        </>
      )}
    </>
  );
};

export default ModelBox;

