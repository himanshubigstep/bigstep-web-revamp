import React from 'react'
import headerLogo from '../../../assets/header_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Link href={'/'}>
        <Image
            src={headerLogo}
            alt='logo'
            priority
            className={`${scrolled ? 'brightness-0 dark:brightness-200' : 'brightness-200'}`}
        />
    </Link>
  )
}

export default Logo