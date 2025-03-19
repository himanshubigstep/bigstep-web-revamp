import React from 'react'

const TopHeader = ({ headingClassName, headingText, paragraphText }: { headingClassName: string, headingText: string, paragraphText: string }) => {
  return (
    <div className='relative mx-auto mb-16'>
        <h1 className={`${headingClassName} lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold mb-4 leading-[130%]`}>{headingText}</h1>
        <p className={`${headingClassName} lg:text-lg md:text-md sm:text-sm text-xs font-normal leading-[150%]`}>{paragraphText}</p>
    </div>
  )
}

export default TopHeader