import React from 'react'
import Link from 'next/link'

const Specialization = () => {
  return (
    <div className='w-full h-full'>
        <h2 className='text-white not-italic text-xl'>Specializations</h2>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Live Video & Media Streaming
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Content Management Systems
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    SaaS Product Development
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    React & React Native Development
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Document Summarization & Intelligence
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    Agentic Workflows
                </Link>
            </li>
            <li className='text-gray-500 text-md'>
                <Link href='/'>
                    AWS Consulting & Development
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Specialization