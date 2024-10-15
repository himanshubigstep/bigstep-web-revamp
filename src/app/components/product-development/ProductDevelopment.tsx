import React from 'react'

const ProductDevelopment = () => {
    const productDevelopmentData = [
        {
            id: 1,
            heading: 'Full Ownership',
            description: 'We manage the entire lifecycle, providing a hassle-free experience.',
        },
        {
            id: 2,
            heading: 'Turnkey Solution',
            description: 'Comprehensive services from concept to deployment and beyond.',
        },
        {
            id: 3,
            heading: 'Agile Methodologies',
            description: 'Ensuring flexibility and continuous improvement throughout the project.',
        },
        {
            id: 4,
            heading: 'High-Quality Deliverables',
            description: 'Delivering robust, scalable, and feature-rich products.',
        },
    ]
    return (
        <div className='w-full h-full relative md:py-16 py-8 bg-black'>
            <div className='relative w-full max-w-[1080px] mx-auto flex flex-col items-center'>
                <img src='' alt='' />
                <div className='w-full flex flex-col justify-center items-center text-center'>
                    <h2 className='text-3xl font-bold text-center mb-4 text-white'>Our Holistic Approach to Product Development</h2>
                    <p className='text-lg text-white'>Our process integrates multiple disciplines into a cohesive workflow to deliver a complete, high-quality product.</p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:mt-8 mt-4'>
                    {productDevelopmentData.map((item: any) => (
                        <div className='w-full flex justify-between items-start gap-4'>
                            <div className='flex flex-col justify-center text-white text-4xl'>
                            <span
                                    style={{
                                        color: 'transparent',
                                        WebkitTextStroke: '1px white'
                                    }}
                                >
                                    {item.id}
                                </span>
                            </div>
                            <div key={item.id} className='w-full flex flex-col justify-center'>
                                <h2 className='text-lg font-bold text-white'>{item?.heading}</h2>
                                <p className='text-md text-white'>{item?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDevelopment