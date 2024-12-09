import React from 'react'
import BigstepBlogDetailsBanner from '@/app/assets/bigstep-blog-details-banner.png'

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
        <div className='w-full relative lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[65vh] lg:px-4 px-4'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-black opacity-75' />
                <img
                    src={BigstepBlogDetailsBanner.src}
                    alt='image'
                    className='w-full h-full object-cover object-top'
                />
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex lg:justify-between lg:items-center relative'>
                <div className='lg:w-2/3 md:w-2/3 sm:w-2/3 mx-auto w-full h-full flex flex-col justify-center items-center'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold uppercase text-white lg:mb-4'>Blog</h2>
                    <h3 className='lg:text-2xl md:text-xl sm:text-lg text-md font-bold uppercase text-white lg:mb-4 text-center'>{formatDate(bannerData?.updatedAt)}</h3>
                    <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-white text-center lg:mb-4'>{bannerData?.heading}</h2>
                    <p className='lg:text-xl md:text-lg sm:text-md text-sm font-normal text-white line-clamp-3 w-full text-center'>{bannerData?.description}</p>
                    <a 
                        href="#read-more-section" 
                        className="lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-white lg:mt-4 hover:underline"
                    >
                        Read More
                    </a>
                    <div className='lg:mt-8 mt-4 rounded-full flex justify-center items-center lg:w-3/6 w-full py-4 bg-white dark:bg-black gap-4'>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full gap-4'>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bannerData?.author?.data?.attributes?.image?.data?.attributes?.url}`}
                                alt='image'
                                className='w-full h-full rounded-full border-[1px]'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h3 className='lg:text-md md:text-sm sm:text-xs text-xs font-semibold text-gray-600 dark:text-white'>{bannerData?.author?.data?.attributes?.name}</h3>
                            <p className='text-sm font-normal text-gray-400 dark:text-white'>{bannerData?.author?.data?.attributes?.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageBanner