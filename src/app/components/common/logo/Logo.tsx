import React from 'react'
import headerLogo from '../../../assets/header_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ scrolled, logo }: { scrolled: boolean, logo: any }) => {
  console.log(logo[1]?.attributes?.url)
  return (
    <Link href={'/'}>
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