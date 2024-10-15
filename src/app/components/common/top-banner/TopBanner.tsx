'use client'
import React from 'react'
import Button from '../button/Button'
import topBanner from '../../../assets/top-banner.png'
import Image from 'next/image'

const TopBanner = () => {
    return (
        <div className='w-full relative h-[52rem] md:h-[48rem] md:px-4 px-4'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-gradient-to-r from-black to-transparent' />
                <Image
                    src={topBanner}
                    alt='image'
                    className='w-full h-full'
                />
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex md:justify-between md:items-center gap-4 relative'>
                <div className='md:w-2/5 w-full h-full flex flex-col justify-center items-start gap-4'>
                    <h3 className='text-3xl font-light uppercase text-white'>Product Engineering</h3>
                    <h2 className='text-4xl font-medium text-white'>Transform your Ideas into Reality with our Expert Product Engineering</h2>
                    <p className='text-xl font-normal text-white'>Transform concepts into market-ready products that are not only elegant and user-friendly but also functionally robust and scalable. Our expertise ensures your product distinguishes itself in the competitive market, positioning you at the forefront of the industry.</p>
                    <Button
                        onClick={() => console.log('clicked')}
                        text='Discuss your Project'
                        className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBanner