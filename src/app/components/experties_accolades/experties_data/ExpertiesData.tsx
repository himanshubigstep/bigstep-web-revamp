import React from 'react'

const ExpertiesData = ({ ExpertiesData }: { ExpertiesData: any }) => {
  return (
    <div className='relative w-full mx-auto'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>

        {ExpertiesData?.attributes?.BigStep_Accolades_Data && ExpertiesData?.attributes?.BigStep_Accolades_Data.map((story: any) => (
          <div key={story.id} className='border-[1px] border-gray-200 dark:border-gray-800 rounded-3xl py-24 px-8 gap-8 flex flex-col justify-center items-center'>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${story.images?.data?.attributes?.url}`}
              alt='stories-image'
              className='object-contain mx-auto'
            />
            <div className='flex flex-col gap-2 text-center max-w-[80%]'>
              <h1 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold leading-[125%]'>{story.heading}</h1>
              <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal leading-[150%]'>{story.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ExpertiesData