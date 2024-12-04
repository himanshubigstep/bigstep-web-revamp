import React from 'react'

const MileStoneSubmenu = ({ homePageData }: { homePageData: any }) => {
    const milestonesData = Array.isArray(homePageData?.MilesTones)
        ? homePageData?.MilesTones
        : Object.values(homePageData?.MilesTones || {});
    const filteredData = milestonesData.filter((item: any) => item && item.id);
    const mappedData = filteredData
        .map((item: any) => ({
            id: item.id,
            heading: item.heading,
            subHeading: item.sub_heading,
            description: item.description,
        }))
        .sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
    return (
        <div className='w-full max-w-[1440px] mx-auto py-16 px-4'>
            <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8 lg:px-0 px-4'>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 text-black dark:text-white'>{homePageData?.outstanding_results?.heading}</h2>
                <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-black dark:text-white'>{homePageData?.outstanding_results?.description}</p>
            </div>
            <div className='w-full relative rounded-[3rem] lg:h-[28rem] md:h-[24rem] sm:h-[20rem] h-auto mt-8'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.outstanding_results?.background_image?.data?.attributes?.formats?.large?.url}`}
                    alt={homePageData?.milestones?.background_image?.data?.attributes?.name}
                    className='flex absolute left-0 right-0 top-0 bottom-0 w-full h-full rounded-[3rem] lg:object-fill object-cover'
                />
                <div className='relative w-full lg:items-center lg:h-full flex'>
                    <div className='lg:w-[65%] w-full grid lg:grid-cols-2 grid-cols-2 justify-center lg:items-center lg:px-16 px-8 lg:py-0 py-8 lg:gap-16 gap-2'>
                        {mappedData.map((item: any) => (
                            <div key={item.id} className='md:p-0 p-2'>
                                <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-2 text-white'>{item?.heading}</h2>
                                <h3 className='lg:text-xl md:text-lg sm:text-md text-sm font-bold text-white'>{item?.subHeading}</h3>
                                <p className='md:w-[90%] lg:text-sm md:text-xs sm:text-xs text-xs font-normal text-white'>{item?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MileStoneSubmenu