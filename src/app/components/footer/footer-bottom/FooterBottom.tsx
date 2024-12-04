import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface FooterBottomProps {
    attributes: {
        facebook: {
            id: number;
            link: string;
        }
        instagram: {
            id: number;
            link: string;
        }
        copyright_text: string;
        about_tags: Array<{
            id: number;
            technologyDetails: string;
            technologyLinks: string;
        }>
    }
}

const FooterBottom: React.FC<FooterBottomProps> = ({ attributes }) => {
  return (
    <div className='w-full lg:h-[100px] h-full flex lg:items-center bg-[#101010] px-4'>
        <div className='w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:gap-0 gap-4 lg:justify-between lg:items-center'>
            <p className='text-md text-white'>
                {attributes?.copyright_text} 
            </p>
            <ul className='flex flex-wrap lg:flex-nowrap gap-4 text-white'>
                {attributes?.about_tags?.map((tag, index) => (
                    <li key={tag.id} className='text-md text-white'>
                        <Link className='pr-4' href={tag.technologyLinks}>
                            {tag.technologyDetails}
                        </Link>
                        {index < attributes?.about_tags.length - 1 && '|'}
                    </li>
                ))}
            </ul>
            <div className='relative w-auto'>
                <ul className='flex items-center gap-4'>
                    <li className='text-md text-white'>
                        <Link className='text-3xl' href={attributes?.instagram?.link} target='_blank'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li className='text-md text-white'>
                        <Link className='text-3xl' href={attributes?.facebook?.link} target='_blank'>
                            <FaLinkedinIn />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom