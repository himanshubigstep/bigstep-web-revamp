import React from 'react'
import TopHeader from '../problem-solving/TopHeader'
import ExpertiesData from './experties_data/ExpertiesData'

const ExpertiesAccolades = ({successStoriesData}: {successStoriesData: any}) => {
  return (
    <div className='w-full max-w-[1440px] mx-auto relative lg:py-16 py-8 px-4'>
        <TopHeader
            headingClassName='text-center'
            headingText={successStoriesData?.attributes?.BigStep_Accolades_Introduction?.heading}
            paragraphText={successStoriesData?.attributes?.BigStep_Accolades_Introduction?.description}        
        />
        <ExpertiesData
          ExpertiesData={successStoriesData}
        />
    </div>
  )
}

export default ExpertiesAccolades