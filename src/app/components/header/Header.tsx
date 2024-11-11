'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../common/logo/Logo'
import Navigation from './Navigation'
import { fetchHeaderData } from '@/api-data/api'

const Header = () => {
  const [menuItems, setMenuItems] = useState<any>([]);
  const [logo, setLogo] = useState<any>([])
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchHeaderDataResponse = async () => {
      try {
        const response = await fetchHeaderData();
        setLogo(response.attributes.Main_logo.data)
        const menuArr = Object.keys(response.attributes)
          .filter((menu) => menu.split("_")[0] === "heading")
          .map((menu) => response.attributes[menu]);

        setMenuItems(menuArr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeaderDataResponse();
  }, []);

  return (
    <div
      className={`poppins w-full h-[100px] fixed left-0 right-0 top-0 z-30 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white dark:bg-black shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className='md:px-4 relative w-full px-4 max-w-[1440px] mx-auto h-full flex items-center justify-between md-gap-0 gap-4'>
        <Logo scrolled={scrolled} logo={logo} />
        <Navigation menuItems={menuItems} scrolled={scrolled} />
      </div>
    </div>
  );
};

export default Header;
