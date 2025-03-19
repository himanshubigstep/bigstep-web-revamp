import React from 'react'

const ImageData = ({problemSolvingImage}: {problemSolvingImage: string}) => {
  return (
    <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${problemSolvingImage}`}
        alt='image'
        className='lg:w-[570px] lg:h-[570px] w-full h-full object-cover rounded-3xl mr-0 ml-auto'
    />
  )
}

export default ImageData