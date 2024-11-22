'use client';
import React, { useEffect, useState } from 'react';
import Button from '../button/Button';

interface Logo {
    attributes: {
        name: string;
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
    bgImage,
}: {
    title: string;
    description: string;
    techData: Partner[];
    bgImage: string;
}) => {
    const sortedTechData = techData.sort((a, b) => a.id - b.id);

    const [selectedPartner, setSelectedPartner] = useState<number | null>(sortedTechData.length > 0 ? sortedTechData[0].id : null);
    useEffect(() => {
        if (sortedTechData.length > 0) {
            setSelectedPartner(sortedTechData[0].id);
        }
    }, [sortedTechData]);
    const handleButtonClick = (id: number) => {
        setSelectedPartner(id);
    };
    const selectedPartnerData = sortedTechData.find(partner => partner.id === selectedPartner);

    return (
        <div className="w-full h-full bg-black relative md:py-16 py-8 px-4">
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bgImage}`}
                alt="Background Image"
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover object-top"
            />
            <div className="relative w-full h-full max-w-[1440px] mx-auto">
                <div className="w-full text-left flex flex-col gap-2 md:max-w-[75%] mx-auto">
                    <h4 className="font-semibold text-center text-3xl mb-4 text-white">{title}</h4>
                    <p className="font-normal text-center text-lg mb-16 text-white">{description}</p>
                </div>

                <div className="w-full h-full flex md:flex-none flex-wrap gap-6 md:items-center justify-center mb-16 md:max-w-[75%] mx-auto">
                    {sortedTechData.map((partner) => (
                        <Button
                            key={partner.id}
                            text={partner.attributes.heading}
                            onClick={() => handleButtonClick(partner.id)}
                            className={`py-4 px-8 rounded-md ${selectedPartner === partner.id ? 'bg-blue-800 text-lg text-white font-medium' : 'bg-[#D1E7FF] hover:bg-blue-800 text-lg text-blue-500 hover:text-white font-medium'}`}
                        />
                    ))}
                </div>

                <div className="border-[1px] border-gray-500 md:max-w-[75%] mx-auto rounded-2xl w-full h-full md:py-8 py-4">
                    <div className="md:flex w-full grid grid-cols-2 justify-center gap-8 items-start md:px-8 px-4">
                        {selectedPartnerData && selectedPartnerData.attributes.logos.data?.length > 0 ? (
                            selectedPartnerData.attributes.logos.data.map((logo, index) => (
                                <div key={index} className='flex flex-col gap-4 justify-center items-center'>
                                    <div className="bg-white rounded-xl flex justify-center items-center md:p-4 p-2">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logo.attributes.url}`}
                                            alt="partner logo"
                                            className="object-contain w-[8rem] aspect-square"
                                        />
                                    </div>
                                    <span className='text-lg md:w-[75%] mx-auto text-center text-white font-medium'>{logo.attributes.name.replace(/\.[^.]+$/, '')}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-lg text-white text-center">No Data Available for this Section.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Partners;
