import React from 'react'
import BigstepBlogDetailsBanner from '@/app/assets/bigstep-blog-details-banner.jpeg'

const BlogPageBanner = ({ bannerData }: { bannerData: any }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <div className='w-full relative h-[36rem] md:h-[42rem] md:px-4 px-4'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-black opacity-75' />
                <img
                    src={BigstepBlogDetailsBanner.src}
                    alt='image'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex md:justify-between md:items-center gap-4 relative'>
                <div className='md:w-2/5 mx-auto w-full h-full flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-3xl font-bold uppercase text-white'>Blog</h2>
                    <h3 className='text-2xl font-bold uppercase text-white mb-4 text-center'>{formatDate(bannerData?.updatedAt)}</h3>
                    <h2 className='text-4xl font-semibold text-white text-center'>{bannerData?.heading}</h2>
                    <p className='text-xl font-normal text-white line-clamp-3 w-full text-center'>{bannerData?.description}</p>
                    <a 
                        href="#read-more-section" 
                        className="text-lg font-semibold text-white mt-4 hover:underline"
                    >
                        Read More
                    </a>
                    <div className='mt-8 rounded-full flex justify-center items-center md:w-3/6 w-full py-4 bg-white dark:bg-black gap-4'>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full gap-4'>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bannerData?.author?.data?.attributes?.image?.data?.attributes?.url}`}
                                alt='image'
                                className='w-full h-full rounded-full border-[1px]'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h3 className='text-md font-semibold text-gray-600 dark:text-white'>{bannerData?.author?.data?.attributes?.name}</h3>
                            <p className='text-sm font-normal text-gray-400 dark:text-white'>{bannerData?.author?.data?.attributes?.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageBanner