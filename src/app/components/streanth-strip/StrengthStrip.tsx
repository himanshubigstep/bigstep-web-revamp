import React from 'react'

interface EmployeeData {
    id: number;
    heading: string;
    description: string;
}

const StrengthStrip = ({ employeeData }: { employeeData: EmployeeData[] | undefined }) => {
    return (
        <div className='relative w-full h-auto py-4 lg:py-8 bg-[#007AFF]'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center px-4'>
                <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center lg:items-center gap-4'>
                    {employeeData && employeeData.map((item) => (
                        <div key={item.id} className='w-full lg:h-full flex lg:flex-row md:flex-row sm:flex-row flex-col lg:items-center items-start gap-4'>
                            <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-white text-left'>{item.heading}</h2>
                            <p className='lg:text-lg md:text-md sm:text-sm text-xs text-white font-semibold text-left w-[50%]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StrengthStrip