import React from 'react'
import headerLogo from '../../../assets/header_logo.svg'
import Image from 'next/image'

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div>
        <Image
            src={headerLogo}
            alt='logo'
            priority
            className={`${scrolled ? 'brightness-0 dark:brightness-200' : 'brightness-200'}`}
        />
    </div>
  )
}

export default Logo