import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className='w-full h-full'>
        <h2 className='text-white not-italic text-xl'>About Us</h2>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Company
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Leaders
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Partnerships
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Join Us
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Culture
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Products
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default AboutUs