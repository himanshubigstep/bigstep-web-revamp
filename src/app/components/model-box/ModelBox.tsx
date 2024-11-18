'use client'
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

const ModelBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
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

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible, hasClosed]);

  return (
    <>
      {isVisible && (
        <>
          <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-10" />
          <div className='fixed z-20 top-[20%] left-0 right-0 mx-auto w-full max-w-[960px] h-[60%] bg-white dark:bg-black rounded-2xl p-16 overflow-y-auto shadow-2xl'>
            <h2>Your Modal Content</h2>
            <IoMdClose
              onClick={handleClose}
              className='absolute top-4 right-4 text-3xl cursor-pointer text-black dark:text-white'
            />
          </div>
        </>
      )}
    </>
  );
};

export default ModelBox;

