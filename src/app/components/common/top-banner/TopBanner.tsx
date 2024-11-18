'use client'
import React from 'react'
import Button from '../button/Button'

const TopBanner = ({bannerData}: {bannerData: any}) => {
    console.log(bannerData)
    return (
        <div className='w-full relative h-[52rem] md:h-[48rem] md:px-4 px-4'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-gradient-to-r from-black to-transparent' />
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bannerData?.backgroundImage?.data[0]?.attributes?.formats?.large?.url}`}
                    alt='image'
                    className='w-full h-full'
                />
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex md:justify-between md:items-center gap-4 relative'>
                <div className='md:w-2/5 w-full h-full flex flex-col justify-center items-start gap-4'>
                    <h3 className='text-2xl font-light uppercase text-white'>{bannerData?.label}</h3>
                    <h2 className='text-4xl font-semibold text-white'>{bannerData?.heading}</h2>
                    <p className='text-xl font-normal text-white'>{bannerData?.description}</p>
                    {bannerData?.buttonText &&
                        <Button
                            onClick={() => console.log('clicked')}
                            text={bannerData?.buttonText}
                            className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBanner