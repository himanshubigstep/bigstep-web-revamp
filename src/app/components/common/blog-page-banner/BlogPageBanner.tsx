import React from 'react'

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
        <div className='w-full relative h-[30vh] lg:px-4 px-4 bg-blue-500'>
            <div className='w-full h-full absolute right-0 left-0 top-0 bottom-0'>
                <div className='w-full h-full absolute top-0 bottom-0 bg-black opacity-20' />
            </div>
            <div className='w-full max-w-[1440px] mx-auto h-full flex lg:justify-between lg:items-center relative'>
                <div className='lg:w-2/3 md:w-2/3 sm:w-2/3 mx-auto w-full h-full flex flex-col justify-center items-center'>
                    <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold uppercase text-white pt-8'>Blog</h2>
                </div>
            </div>
        </div>
    )
}

export default BlogPageBanner