import React from 'react'

const MilesTone = ({ homePageData }: { homePageData: any }) => {
    const milestonesData = homePageData?.milestones1 || []
    const mappedData = Object.keys(milestonesData).filter(key => key !== 'id').map(key => {
        const item = milestonesData[key];
        return {
            id: item.id,
            heading: item.heading,
            description: item.description
        };
    });
    return (
        <div className='w-full max-w-[1440px] mx-auto py-16'>
            <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8'>
                <h2 className='text-3xl font-medium text-center mb-4 text-black dark:text-white'>{homePageData?.milestones?.heading}</h2>
                <p className='text-lg font-normal text-black dark:text-white'>{homePageData?.milestones?.description}</p>
            </div>
            <div className='w-full relative md:rounded-[3rem] md:h-[30rem] mt-8 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.milestones?.background_image?.data?.attributes?.formats?.large?.url}`}
                    alt={homePageData?.milestones?.background_image?.data?.attributes?.name}
                    className='flex absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover opacity-80 md:rounded-[3rem]'
                />
                <div className='relative w-full md:items-center md:h-full flex'>
                    <div className='md:w-3/4 w-full md:p-16 p-8 flex flex-wrap items-center'>
                        {mappedData.map((item: any) => (
                            <div key={item.id} className='md:w-1/3 w-1/2 md:p-0 p-2 mb-12'>
                                <h2 className='text-4xl font-medium mb-4 text-white'>{item?.heading}</h2>
                                <p className='text-xl font-normal text-white'>{item?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MilesTone