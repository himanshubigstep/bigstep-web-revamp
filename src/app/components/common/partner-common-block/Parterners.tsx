'use client';
import React, { useState } from 'react';
import Button from '../button/Button';
import Image from 'next/image';

interface Logo {
    attributes: {
        url: string;
    };
}

interface Partner {
    id: number;
    attributes: {
        heading: string;
        logos: {
            data: Logo[];
        };
    };
}

const Partners = ({
    title,
    description,
    techData,
}: {
    title: string;
    description: string;
    techData: Partner[];
}) => {
    const sortedTechData = techData.sort((a, b) => a.id - b.id);
    
    const [selectedPartner, setSelectedPartner] = useState<number | null>(sortedTechData.length > 0 ? sortedTechData[0].id : null);

    const handleButtonClick = (id: number) => {
        setSelectedPartner(id);
    };

    return (
        <div className="w-full h-full bg-black relative md:py-16 py-8 px-4">
            <Image
                src=""
                alt="Background Image"
                className="w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0"
            />
            <div className="relative w-full h-full max-w-[1440px] mx-auto">
                <div className="w-full text-left flex flex-col gap-2">
                    <h4 className="font-semibold text-center text-3xl mb-4 text-white">{title}</h4>
                    <p className="font-normal text-center text-lg mb-16 text-white">{description}</p>
                </div>

                <div className="w-full h-full flex md:flex-none flex-wrap gap-6 md:items-center mb-16">
                    {sortedTechData.map((partner) => (
                        <Button
                            key={partner.id}
                            text={partner.attributes.heading}
                            onClick={() => handleButtonClick(partner.id)}
                            className={`py-4 px-8 rounded-md ${selectedPartner === partner.id ? 'bg-blue-800 text-lg text-white font-medium' : 'bg-[#D1E7FF] hover:bg-blue-800 text-lg text-blue-500 hover:text-white font-medium'}`}
                        />
                    ))}
                </div>

                <div className="bg-white rounded-2xl w-full h-full md:py-8 py-4">
                    <div className="flex w-full justify-evenly items-center md:px-8 px-4">
                        {selectedPartner && sortedTechData.find(partner => partner.id === selectedPartner)?.attributes.logos.data.map((logo, index) => (
                            <div key={index} className="aspect-square flex justify-center items-center md:p-4 p-2">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logo.attributes.url}`}
                                    alt="partner logo"
                                    className="object-contain w-36 aspect-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
