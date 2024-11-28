import React from 'react'

interface EmpoweringValue {
    id: number;
    heading: string;
    description: string;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            }
          }
        }
      }
    }
  }

const ImageBlocks = ({ topHeading, section }: { topHeading: string, section: EmpoweringValue[] }) => {
  return (
    <div className='w-full max-w-[1440px] mx-auto md:py-16 py-8 px-4'>
        <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4 md:mb-16 mb-8'>
            <h2 className='text-3xl font-semibold text-center'>
                {topHeading}
            </h2>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center relative md:px-0 px-4'>
            <div className='w-full grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-8'>
                {section && section.map((item) => (
                    <div key={item.id} className='w-full h-full flex flex-col rounded-2xl border-[1px] border-gray-300 dark:border-gray-800'>
                        <div className='w-full h-72 flex justify-center items-center rounded-tl-2xl rounded-tr-2xl'>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.formats?.large?.url}`}
                                alt={item?.heading}
                                className='w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl'
                            />
                        </div>
                        <div className='w-full h-auto flex flex-col p-4'>
                            <h3 className='text-xl font-semibold'>{item?.heading}</h3>
                            <p className='text-md font-normal'>{item?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ImageBlocks