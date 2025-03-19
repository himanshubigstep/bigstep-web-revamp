import React from 'react'
import TopHeader from '../problem-solving/TopHeader'
import SuccessStoriesData from './success-stories-data/SuccessStoriesData'

const RealWorldSuccessStories = ({successStoriesData}: {successStoriesData: any}) => {
  return (
    <div className='w-full max-w-[1440px] mx-auto relative lg:py-16 py-8 px-4'>
        <TopHeader
            headingClassName='text-left max-w-3xl'
            headingText={successStoriesData?.attributes?.RealWorld_SuccessStories_Introduction?.heading}
            paragraphText={successStoriesData?.attributes?.RealWorld_SuccessStories_Introduction?.description}
        />
        <SuccessStoriesData
          successStoriesData={successStoriesData}
        />
    </div>
  )
}

export default RealWorldSuccessStories