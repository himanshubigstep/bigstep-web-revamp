'use client'
import React from 'react'
import bulb from '../../assets/bulb.png'
import pencil from '../../assets/pencil.png'
import code from '../../assets/code.png'
import medal from '../../assets/medal.png'
import rocket from '../../assets/rocket.png'
import settings from '../../assets/settings.png'
import Image from 'next/image'
import Button from '../common/button/Button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface HolisticData {
    id: number;
    heading: string;
    description: string;
    hex_code: string;
    serviceLogo?: {
        data?: {
            attributes: {
                url: string;
            };
        };
    };
}

interface HolisticApproachProps {
    title: string;
    description: string;
    buttonText: string;
    holisticData: {
        attributes: {
            service_data: HolisticData[];
        };
    };
}

const HolisticApproach: React.FC<HolisticApproachProps> = ({ title, description, buttonText, holisticData }) => {
    const holisticApproach = holisticData?.attributes?.service_data || [];
    const sortedApproach = holisticApproach.sort((a, b) => a.id - b.id);
    
    const addOpacityToHex = (hex: string, opacity: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };
    return (
        <div className='w-full h-full md:py-16 py-8 px-4 flex flex-col justify-center items-center'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-bold text-center mb-4'>{title}</h2>
                <p className='text-lg'>{description}</p>
            </div>
            <div className='relative w-full max-w-[1440px] mx-auto mt-8 md:h-[36rem] h-auto'>
                <div className='flex w-full h-1 bg-[#E1E1E1] absolute top-1/2 z-10 px-8 justify-evenly items-center' />
                <div className='w-full h-full flex justify-evenly items-center'>
                        {sortedApproach.map((item, index) => (
                            <div
                                key={item.id}
                                className='w-12 h-12 rounded-full relative z-20 flex justify-center items-center text-2xl font-semibold'
                                style={{ backgroundColor: addOpacityToHex(item.hex_code, 0.5),
                                    color: item.hex_code, }}
                            >
                                {index + 1}
                                <div
                                    className='w-[1px] h-24 absolute'
                                    style={{
                                        borderColor: item.hex_code,
                                        borderWidth: 1,
                                        borderStyle: 'dashed',
                                        bottom: item.id % 2 !== 0 ? '110%' : 'auto',
                                        top: item.id % 2 === 0 ? '110%' : 'auto',
                                    }}
                                />
                                <div
                                    className='absolute top-0 flex flex-col justify-center items-center w-72'
                                    style={{
                                        bottom: item.id % 2 !== 0 ? '340%' : 'auto',
                                        top: item.id % 2 === 0 ? '340%' : 'auto',
                                    }}
                                >
                                    <h3 className='text-center text-xl font-semibold dark:text-white text-black'>{item.heading}</h3>
                                    <p className='text-center text-sm font-normal dark:text-white text-black'>{item.description}</p>
                                </div>
                                <div
                                    className='absolute'
                                    style={{
                                        bottom: item.id % 2 === 0 ? '140%' : 'auto',
                                        top: item.id % 2 !== 0 ? '140%' : 'auto',
                                    }}
                                >
                                    {item.serviceLogo?.data?.attributes?.url && (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.serviceLogo.data.attributes.url}`}
                                            alt="icon"
                                            className='w-16 object-contain'
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    {/* </div> */}
                </div>
            </div>
            <Button
                text={buttonText}
                onClick={() => console.log('clicked')}
                className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
            />
        </div>
    )
}

export default HolisticApproach