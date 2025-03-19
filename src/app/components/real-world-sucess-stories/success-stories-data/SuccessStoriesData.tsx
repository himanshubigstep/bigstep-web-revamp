'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/Button'

const SuccessStoriesData = ({ successStoriesData }: { successStoriesData: any }) => {
  return (
    <div className='relative w-full mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

        {successStoriesData?.attributes?.RealWorld_SuccessStories_Data && successStoriesData?.attributes?.RealWorld_SuccessStories_Data.map((story: any) => (
          <div key={story.id} className='border-[1px] border-gray-200 dark:border-gray-800 rounded-3xl'>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${story.background_image?.data?.attributes?.url}`}
              alt='stories-image'
              className='w-full object-cover rounded-tl-3xl rounded-tr-3xl'
            />
            <div className='flex flex-col gap-2 p-4'>
              <h1 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold leading-[125%]'>{story.heading}</h1>
              <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal leading-[150%]'>{story.description}</p>
            </div>
            <div className='w-full mx-auto flex justify-center items-center mb-10'>
              <Button
                text={story.button_text}
                onClick={() => window.location.href = story.button_link}
                className='border-2 rounded-xl border-blue-500 px-8 py-4 text-blue-500 font-medium'
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SuccessStoriesData