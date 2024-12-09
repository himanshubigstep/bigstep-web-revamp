'use client'
import React from 'react'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const TopBanner = ({ bannerData }: { bannerData: any }) => {
    const router = useRouter()
    const handleClick = () => {
        if (bannerData?.link) {
            router.push(bannerData?.link)
        } else {
            console.log('No link provided')
        }
    }
    const imageUrl = bannerData?.backgroundImage?.data
        ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${bannerData?.backgroundImage?.data[0]?.attributes?.url}`
        : null;
    return (
        <div className='w-full relative lg:h-[80vh] md:h-[80vh] sm:h-screen h-[45vh] lg:px-4'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-gradient-to-r from-black to-transparent' />
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt='image'
                        className='w-full h-full object-cover lg:object-top md:object-top object-right'
                    />
                )}
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex lg:justify-between lg:items-center gap-4 relative px-4'>
                <div className='lg:w-[70%] md:w-[70%] w-full h-full flex flex-col lg:justify-center md:justify-center justify-end lg:pb-0 md:pb-0 pb-8 items-start gap-4'>
                    <h3 className='lg:text-2xl lg:t-xl sm:text-lg text-md font-light uppercase text-white lg:block md:block hidden'>{bannerData?.label}</h3>
                    <h2 className='lg:text-4xl md:text-3xl sm:text-lg text-lg font-semibold text-white'>{bannerData?.heading}</h2>
                    <p className='lg:text-xl md:text-lg sm:text-md text-sm font-normal text-white lg:block md:block sm:hidden hidden'>{bannerData?.description}</p>
                    {bannerData?.buttonText &&
                        // <Button
                        //     onClick={handleClick}
                        //     text={bannerData?.buttonText}
                        //     className='py-4 px-8 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                        // />
                        <Link href={bannerData?.link} passHref target='_blank'
                            className='py-4 px-8 rounded-xl bg-blue-500 hover:bg-blue-800 lg:text-md text-xs text-white font-normal'>
                            {bannerData?.buttonText}
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBanner