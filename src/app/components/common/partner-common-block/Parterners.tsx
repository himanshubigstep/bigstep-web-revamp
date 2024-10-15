'use client'
import React, { useState } from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import javalogo from '../../../assets/java_logo.png'
import microsoftnet from '../../../assets/microsoft-net-logo.png'
import nodejs from '../../../assets/nodejs_icon.png'
import python from '../../../assets/python_icon.png'
import ror from '../../../assets/ror.png'

const Parterners = () => {
    const partnersData = [
        {
            id: 1,
            title: 'Backend Engineering',
            images: [
                javalogo, microsoftnet, nodejs, python, ror
            ]
        },
        {
            id: 2,
            title: 'Frontend Engineering',
            images: [
                javalogo, microsoftnet, nodejs, python, ror
            ]
        },
        {
            id: 3,
            title: 'Mobile App',
            images: [
                javalogo, microsoftnet, nodejs, python, ror
            ]
        },
        {
            id: 4,
            title: 'Cloud',
            images: [
                javalogo, microsoftnet, nodejs, python, ror
            ]
        }
    ];

    const [selectedPartner, setSelectedPartner] = useState<number | null>(partnersData[0]?.id || null);

    const handleButtonClick = (id: number) => {
        setSelectedPartner(id);
    };

    return (
        <div className="w-full h-full bg-black relative md:py-16 py-8 px-4">
            <Image
                src=''
                alt='Background Image'
                className='w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0'
            />
            <div className="relative w-full h-full max-w-[1440px] mx-auto">
                <div className='w-full text-left flex flex-col gap-2'>
                    <h4 className='font-medium text-center text-3xl mb-4 text-white'>Powering Solutions with Cutting-Edge Technologies</h4>
                    <p className='font-normal text-center text-lg mb-16 text-white'>We leverage a diverse array of cutting-edge technologies to deliver robust, scalable, and innovative solutions. Some of the key technologies that we use in Custom Software and Cloud-Native Application Development include</p>
                </div>
                
                <div className='w-full h-full flex md:flex-none flex-wrap gap-6 md:items-center mb-16'>
                    {partnersData.map(partner => (
                        <Button
                            key={partner.id}
                            text={partner.title}
                            onClick={() => handleButtonClick(partner.id)}
                            className={`py-4 px-8 rounded-md ${selectedPartner === partner.id ? 'bg-blue-800 text-lg text-white font-medium' : 'bg-[#D1E7FF] hover:bg-blue-800 text-lg text-blue-500 hover:text-white font-medium'}`}
                        />
                    ))}
                </div>

                <div className='bg-white rounded-2xl w-full h-full md:py-8 py-4'>
                    <div className='flex w-full justify-center items-center md:px-8 px-4'>
                        {selectedPartner && partnersData.find(partner => partner.id === selectedPartner)?.images.map((image, index) => (
                            <div key={index} className='md:w-1/4 flex justify-center items-center md:p-4 p-2'>
                                <Image
                                    src={image}
                                    alt='partner logo'
                                    className={`object-contain w-auto h-auto`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Parterners;
