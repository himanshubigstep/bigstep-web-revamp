import React from 'react'

const ProductDevelopment = ({ developmentData }: { developmentData: any }) => {
    const productDevelopmentData = developmentData?.why_choose_data
    return (
        <div className='w-full h-full relative lg:bg-transparent bg-black'>
            <div className='relative w-full flex flex-col items-center lg:py-16 py-8 lg:px-0 px-4'>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${developmentData?.why_choose?.images?.data?.attributes?.formats?.large?.url}`}
                    alt={developmentData?.images?.data?.attributes?.name}
                    className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover object-top"
                />
                <div className='relative w-full flex flex-col justify-center items-center text-center'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-center mb-4 text-white'>{developmentData?.why_choose?.heading}</h2>
                    {/* <p className='text-lg text-white'>Our process integrates multiple disciplines into a cohesive workflow to deliver a complete, high-quality product.</p> */}
                </div>
                <div className='relative w-full max-w-[1080px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-8 mt-4'>
                    {productDevelopmentData && productDevelopmentData.map((item: any, index: number) => (
                        <div key={item.id} className='w-full flex justify-between items-start gap-4 mb-4'>
                            <div className='flex flex-col justify-center text-white text-4xl'>
                            <span
                                    style={{
                                        color: 'transparent',
                                        WebkitTextStroke: '1px white'
                                    }}
                                >
                                    {index + 1}
                                </span>
                            </div>
                            <div key={item.id} className='w-full flex flex-col justify-center'>
                                <h2 className='lg:text-lg md:text-md sm:text-sm text-xs font-bold text-white'>{item?.heading}</h2>
                                <p className='lg:text-md md:text-sm sm:text-xs text-xs text-white'>{item?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDevelopment