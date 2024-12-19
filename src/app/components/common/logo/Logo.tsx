import React from 'react'
import Link from 'next/link'

const Logo = ({ scrolled, logo, isBlogPage }: { scrolled: boolean, logo: any, isBlogPage: boolean }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = '/'
  }
  const logoUrl = isBlogPage
    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${logo[1]?.attributes?.url}`
    : `${process.env.NEXT_PUBLIC_IMAGE_URL}${scrolled ? logo[1]?.attributes?.url : logo[0]?.attributes?.url}`;
  return (
    <Link href={'/'} onClick={handleLogoClick}>
        <img
            src={logoUrl}
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