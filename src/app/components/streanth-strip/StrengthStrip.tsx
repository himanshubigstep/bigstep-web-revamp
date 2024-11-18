import React from 'react'

interface EmployeeData {
    id: number;
    heading: string;
    description: string;
}

const StrengthStrip = ({ employeeData }: { employeeData: EmployeeData[] | undefined }) => {
    return (
        <div className='relative w-full h-auto py-4 md:py-8 bg-[#007AFF]'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4'>
                <div className='w-full h-full grid md:grid-cols-4 grid-cols-2 justify-center md:items-center gap-4'>
                    {employeeData && employeeData.map((item) => (
                        <div key={item.id} className='w-full md:h-full flex md:flex-row flex-col md:items-center items-start gap-4'>
                            <h2 className='text-3xl font-bold text-white text-left'>{item.heading}</h2>
                            <p className='text-lg text-white font-semibold text-left w-[50%]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StrengthStrip