import React from 'react'

const MilesTone = ({ homePageData }: { homePageData: any }) => {
    const milestonesData = Array.isArray(homePageData?.milestones1)
        ? homePageData?.milestones1
        : Object.values(homePageData?.milestones1 || {});
    const filteredData = milestonesData.filter((item: any) => item && item.id);
    const mappedData = filteredData
        .map((item: any) => ({
            id: item.id,
            heading: item.heading,
            description: item.description,
        }))
        .sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
    return (
        <div className='w-full max-w-[1440px] mx-auto py-16 px-4'>
            <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8 lg:px-0 px-4'>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4 text-black dark:text-white'>{homePageData?.milestones?.heading}</h2>
                <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-black dark:text-white'>{homePageData?.milestones?.description}</p>
            </div>
            <div className='w-full relative rounded-[3rem] lg:h-[28rem] md:h-[24rem] sm:h-[20rem] h-auto mt-8'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.milestones?.background_image?.data?.attributes?.url}`}
                    alt={homePageData?.milestones?.background_image?.data?.attributes?.name}
                    className='flex absolute left-0 right-0 top-0 bottom-0 w-full h-full rounded-[3rem] lg:object-fill object-cover'
                />
                <div className='relative w-full lg:items-center lg:h-full flex'>
                    <div className='lg:w-[65%] w-full grid lg:grid-cols-3 grid-cols-2 justify-center lg:px-16 px-8 lg:py-0 py-8 lg:gap-16 gap-2'>
                        {mappedData.map((item: any) => (
                            <div key={item.id} className='lg:p-0 p-2'>
                                <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-4 text-white'>{item?.heading}</h2>
                                <p className='lg:w-[90%] lg:text-2xl md:text-xl sm:text-lg text-md font-semibold text-white'>{item?.description}</p>
                            </div>
                        ))}
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.milestones1?.bigstep_logo?.data?.attributes?.formats?.large?.url}`}
                            alt={homePageData?.milestones?.background_image?.data?.attributes?.name}
                            className='flex w-16'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MilesTone