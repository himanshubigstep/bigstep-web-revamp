import Image from 'next/image'
import React from 'react'

const ProblemSolvingList = ({ problemSolvingList }: { problemSolvingList: any }) => {
    return (
        <div className='flex flex-col gap-8'>
            {problemSolvingList && problemSolvingList.map((item: any) => (
                <div key={item.id} className='flex flex-row gap-4 items-center'>
                    <div className='w-20 h-20 rounded-full flex justify-center items-center' style={{ backgroundColor: item?.hex_code }}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.image?.data?.attributes?.url}`}
                            alt='Problem Solving Icon'
                            className='w-12 h-12'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold lg:text-xl md:text-lg sm:text-md text-sm leading-[125%]'>{item?.heading}</h4>
                        <p className='font-light lg:text-md md:text-sm sm:text-xs text-xs leading-[150%]'>{item?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProblemSolvingList