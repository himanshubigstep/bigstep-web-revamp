import React from 'react'

const VideoPlayerComponent = ({ videoSectionData }: { videoSectionData: any }) => {
    return (
        <div className='w-full h-full relative lg:py-16 py-8'>
            <div className='w-full h-full max-w-[1440px] mx-auto flex justify-center items-center'>
                <div className='w-full h-full max-w-[1080px] mx-auto flex flex-col justify-center items-center'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'>
                        {videoSectionData?.heading}
                    </h2>
                    <p className='lg:text-lg md:text-md sm:text-sm text-xs font-normal text-center'>
                        {videoSectionData?.description}
                    </p>
                </div>
            </div>
            <div className='relative w-full max-w-[1440px] mx-auto lg:mt-16 mt-8 rounded-2xl'>
                {/* Embed YouTube video using iframe */}
                <video className='w-full h-full rounded-2xl' controls title={videoSectionData?.images?.data?.attributes?.name}>
                    <source
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${videoSectionData?.images?.data?.attributes?.url}`}
                        type="video/mp4"
                    />
                    <source
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${videoSectionData?.images?.data?.attributes?.url.replace('.mp4', '.webm')}`}
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default VideoPlayerComponent