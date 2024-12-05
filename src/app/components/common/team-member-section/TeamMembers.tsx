import React from 'react'
import Button from '../button/Button';

const teamMembers = [
    {
        id: 1,
        name: 'Vidit Paliwal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 2,
        name: 'Niranjan Mangal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 3,
        name: 'Shiwani Sharma',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 4,
        name: 'Vinit Khandelwal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 5,
        name: 'Vidit Paliwal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 6,
        name: 'Niranjan Mangal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 7,
        name: 'Shiwani Sharma',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 8,
        name: 'Vinit Khandelwal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    },
    {
        id: 9,
        name: 'Vinit Khandelwal',
        designation: 'CEO, BigStep Technologies',
        image: 'https://www.clipartmax.com/png/full/231-2318072_if-you-are-self-employed-passport-size-photo-cartoon.png'
    }
]

interface TeamMembersProps {
    id: number;
    heading: string;
    description: string;
    images: {
        data: {
            attributes: {
                url: string;
            }
        }
    }
}

const TeamMembers = ({ heading, members }: { heading: string, members: TeamMembersProps[] }) => {
    const sortedTeamMembers = [...members].sort((a, b) => a.id - b.id);
    return (
        <div className='w-full h-full relative pb-8 lg:pb-16'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center px-4'>
                <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                    <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center mb-4'>{heading}</h2>
                </div>
                <div className='w-full h-full flex flex-col gap-16 justify-center items-center relative lg:pt-16 pt-8'>
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:gap-16 gap-8'>
                        {sortedTeamMembers && sortedTeamMembers.map((item) => (
                            <div className='w-full h-full flex flex-col rounded-2xl' key={item.id}>
                                <div className='w-full lg:h-full md:h-full h-42 flex rounded-2xl shadow-2xl'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.url}`}
                                        alt={item?.heading}
                                        className='w-auto lg:h-auto h-full object-cover rounded-2xl'
                                    />
                                </div>
                                <div className='w-full h-auto flex flex-col p-4'>
                                    <h3 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold'>{item?.heading}</h3>
                                    <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal'>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <Button
                        onClick={() => console.log('clicked')}
                        text='Meet Our Leaders'
                        className='py-4 px-8 lg:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 lg:text-lg md:text-md sm:text-sm text-xs text-white font-normal'
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default TeamMembers