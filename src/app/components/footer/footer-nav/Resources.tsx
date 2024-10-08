import React from 'react'
import Link from 'next/link'

const Resources = () => {
  return (
    <div className='w-full h-full'>
        <h2 className='text-white not-italic text-xl'>Resources</h2>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Blog
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Case Studies
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Testimonials
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    How We Work
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Best Practices
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Technologies
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Resources