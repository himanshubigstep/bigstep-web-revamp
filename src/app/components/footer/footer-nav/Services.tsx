import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-full'>
        <h2 className='text-white not-italic text-xl'>Services</h2>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Digital Product Engineering
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Generative AI Development
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Cloud and DevOps Solutions
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Internet of Things
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Robotic Process Automation
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Services