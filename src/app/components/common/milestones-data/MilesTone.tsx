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
            <div className='w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center mb-8 md:px-0 px-4'>
                <h2 className='text-3xl font-semibold text-center mb-4 text-black dark:text-white'>{homePageData?.milestones?.heading}</h2>
                <p className='text-lg font-normal text-black dark:text-white'>{homePageData?.milestones?.description}</p>
            </div>
            <div className='w-full relative md:rounded-[3rem] md:h-[32rem] mt-8'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${homePageData?.milestones?.background_image?.data?.attributes?.formats?.large?.url}`}
                    alt={homePageData?.milestones?.background_image?.data?.attributes?.name}
                    className='flex absolute left-0 right-0 top-0 bottom-0 w-full md:h-auto h-full md:rounded-[3rem] md:object-fill object-cover'
                />
                <div className='relative w-full md:items-center md:h-full flex'>
                    <div className='md:w-[65%] w-full grid md:grid-cols-3 grid-cols-2 justify-center md:px-16 px-8 md:py-0 py-8 md:gap-16 gap-2'>
                        {mappedData.map((item: any) => (
                            <div key={item.id} className='md:p-0 p-2'>
                                <h2 className='md:text-5xl text-3xl font-bold mb-4 text-white'>{item?.heading}</h2>
                                <p className='md:w-3/4 md:text-2xl text-lg font-semibold text-white'>{item?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MilesTone