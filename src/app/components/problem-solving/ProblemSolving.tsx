import React from 'react'
import TopHeader from './TopHeader'
import ImageData from './ImageData'
import ProblemSolvingList from './ProblemSolvingList'

const ProblemSolving = ({problemSolvingData}: {problemSolvingData: any}) => {
  return (
    <div className='lg:py-16 py-8 px-4'>
        <TopHeader
          headingClassName = 'text-center'
          headingText={problemSolvingData?.attributes?.problem_solving_introduction?.heading}
          paragraphText={problemSolvingData?.attributes?.problem_solving_introduction?.description}
        />
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 items-center max-w-[1440px] mx-auto'>
            <ImageData
              problemSolvingImage={problemSolvingData?.attributes?.problem_solving_introduction?.background_image?.data?.attributes?.url}
            />
            <ProblemSolvingList
              problemSolvingList={problemSolvingData?.attributes?.problem_solving_data}
            />
        </div>
    </div>
  )
}

export default ProblemSolving