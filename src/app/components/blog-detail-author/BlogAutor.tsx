import React from 'react'

const BlogAutor = ({ authorBlog }: { authorBlog: any }) => {
  return (
    <div className='w-full h-full bg-blue-200 dark:bg-black py-8'>
        <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-between items-center gap-8'>
            <div className='w-full h-auto flex flex-col justify-center items-center text-center gap-2'>
                <img 
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${authorBlog?.image?.data?.attributes?.url}`}
                    alt={authorBlog?.data?.attributes?.name}
                    className='w-32 h-32 rounded-full object-cover border-8 border-x-blue-800 border-y-blue-400'
                />
                <div className='w-full h-full flex flex-col justify-center items-center text-center gap-2'>
                    <h4 className='font-semibold text-xl'>{authorBlog?.name}</h4>
                    <p className='font-normal text-lg'>{authorBlog?.designation}</p>
                </div>
            </div>
            <div className='w-ful h-full flex flex-col justify-center text-center gap-2'>
                <p className='font-normal text-lg text-center'>{authorBlog?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogAutor