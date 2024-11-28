'use client';
import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Partner {
    id: number;
    attributes: {
        category: string;
        heading: string;
        logo: {
            data: {
                attributes: {
                    name: string;
                    url: string;
                }
            };
        };
    };
}

const PartnersTech = ({
    title,
    description,
    techData,
    bannerImage,
}: {
    title: string;
    description: string;
    techData: Partner[];
    bannerImage: string;
}) => {
    const [visibleStart, setVisibleStart] = useState(0);
    const buttonsPerPage = 5;

    const sortedTechData = techData.sort((a, b) => a.id - b.id);

    const [selectedPartner, setSelectedPartner] = useState<number | null>(sortedTechData.length > 0 ? sortedTechData[0].id : null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleButtonClick = (id: number) => {
        setSelectedPartner(id);
        console.log(selectedPartner);
    };

    const selectedPartnerData = sortedTechData.find(partner => partner.id === selectedPartner);

    const handleNext = () => {
        if (visibleStart + buttonsPerPage < uniqueCategories.length) {
            setVisibleStart(visibleStart + 1);
        }
    };

    const handlePrev = () => {
        if (visibleStart > 0) {
            setVisibleStart(visibleStart - 1);
        }
    };

    const uniqueCategories: string[] = [];
    sortedTechData.forEach((partner) => {
        if (partner.attributes.category && !uniqueCategories.includes(partner.attributes.category)) {
            uniqueCategories.push(partner.attributes.category);
        }
    });

    const sortedUniqueCategories = uniqueCategories.sort((a, b) => {
        const firstPartnerA = sortedTechData.find(partner => partner.attributes.category === a);
        const firstPartnerB = sortedTechData.find(partner => partner.attributes.category === b);

        if (firstPartnerA && firstPartnerB) {
            return firstPartnerA.id - firstPartnerB.id;
        }
        return 0;
    });

    const visibleCategories = sortedUniqueCategories.slice(visibleStart, visibleStart + buttonsPerPage);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredPartners = selectedCategory
        ? techData.filter(partner => partner.attributes.category === selectedCategory)
        : [];

    const sortedFilteredPartners = filteredPartners.sort((a, b) => a.id - b.id);

    const partnersPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedPartners = selectedCategory
        ? sortedFilteredPartners.slice(currentPage * partnersPerPage, (currentPage + 1) * partnersPerPage)
        : [];

    const totalPages = Math.ceil(sortedFilteredPartners.length / partnersPerPage);

    // Handle pagination controls
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        if (visibleCategories.length > 0 && !selectedCategory) {
            setSelectedCategory(visibleCategories[0]);
        }
    }, [visibleCategories, selectedCategory]);

    return (
        <div className="w-full h-full bg-black relative md:py-16 py-8 px-4">
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${bannerImage}`}
                alt="Background Image"
                className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover object-top"
            />
            <div className="relative w-full h-full max-w-[1440px] mx-auto px-4">
                <div className="w-full text-left flex flex-col gap-2 md:max-w-[75%] mx-auto">
                    <h4 className="font-semibold text-center text-3xl mb-4 text-white">{title}</h4>
                    <p className="font-normal text-center text-lg mb-16 text-white">{description}</p>
                </div>

                <div className="relative w-full h-full flex md:flex-none flex-wrap gap-6 md:items-center justify-center mb-16 mx-auto">
                    <div className='absolute top-[-4rem] right-0 flex justify-between items-center gap-4'>
                        {visibleStart > 0 && (
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-full"
                            >
                                <FaChevronLeft />
                            </button>
                        )}
                        {visibleStart + buttonsPerPage < uniqueCategories.length && (
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-full"
                            >
                                <FaChevronRight />
                            </button>
                        )}
                    </div>
                    <div className={`grid gap-6 md:grid-cols-5 grid-cols-2`}>
                        {visibleCategories.map((category, index) => (
                            <Button
                                key={index}
                                text={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`py-4 px-8 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-lg text-white font-medium' : 'bg-[#D1E7FF] hover:bg-blue-500 text-lg text-blue-500 hover:text-white font-medium'}`}
                            />
                        ))}
                    </div>
                </div>

                {selectedCategory && sortedFilteredPartners.length > 0 ? (
                    <div className="border-[1px] border-gray-500 rounded-2xl w-full h-full md:py-8 py-4">
                        <div className="w-full grid md:grid-cols-5 grid-cols-3 justify-center gap-8 items-start md:px-8 px-4">
                            {paginatedPartners.map((partner, index) => (
                                <div key={index} className='flex flex-col gap-4 justify-center items-center'>
                                    <div className="bg-white rounded-xl flex justify-center items-center md:p-4 p-2">
                                        {partner.attributes.logo.data && Array.isArray(partner.attributes.logo.data) ? (
                                            partner.attributes.logo.data.map((logo, logoIndex) => (
                                                <img
                                                    key={logoIndex}
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${logo.attributes.url}`}
                                                    alt={`partner logo for ${partner.attributes.heading}`}
                                                    className="object-contain w-[8rem] aspect-square"
                                                />
                                            ))
                                        ) : partner.attributes.logo.data ? (
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${partner.attributes.logo.data.attributes.url}`}
                                                alt={`partner logo for ${partner.attributes.heading}`}
                                                className="object-contain w-[8rem] aspect-square"
                                            />
                                        ) : (
                                            <div>No logo available</div>
                                        )}
                                    </div>
                                    <span className='text-lg md:w-[75%] mx-auto text-center text-white font-medium line-clamp-2'>
                                        {partner.attributes.heading}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Render pagination controls only if there are more than 10 partners */}
                        {sortedFilteredPartners.length > partnersPerPage && (
                            <div className="flex justify-between items-center max-w-[80%] mx-auto mt-8">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 0}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    Prev
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages - 1}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-white text-center">No partners available in this category.</div>
                )}

            </div>
        </div>
    );
}

export default PartnersTech;