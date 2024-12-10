import React from 'react'
import Link from 'next/link'

const Logo = ({ scrolled, logo }: { scrolled: boolean, logo: any }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Force a page refresh
    window.location.href = '/';
  };
  return (
    <Link href={'/'} onClick={handleLogoClick}>
        <img
            src={scrolled ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${logo[1]?.attributes?.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${logo[0]?.attributes?.url}`}
            alt='logo'
            width={100}
            height={100}
            // priority
            className='w-48 h-auto object-contain'
        />
    </Link>
  )
}

export default Logo