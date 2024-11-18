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
        <div className='w-full h-full relative py-8 md:py-16'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4'>
                <div className='relative w-full max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center'>
                    <h2 className='text-3xl font-semibold text-center mb-4'>{heading}</h2>
                </div>
                <div className='w-full h-full flex flex-col gap-16 justify-center items-center relative md:pt-16 pt-8'>
                    <div className='w-full grid md:grid-cols-4 grid-cols-2 md:gap-16 gap-8'>
                        {sortedTeamMembers && sortedTeamMembers.map((item) => (
                            <div className='w-full h-full flex flex-col rounded-2xl' key={item.id}>
                                <div className='w-full md:h-full h-42 flex rounded-2xl shadow-2xl'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.url}`}
                                        alt={item?.heading}
                                        className='w-auto md:h-auto h-full object-cover rounded-2xl'
                                    />
                                </div>
                                <div className='w-full h-auto flex flex-col p-4'>
                                    <h3 className='text-xl font-semibold'>{item?.heading}</h3>
                                    <p className='text-md font-normal'>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => console.log('clicked')}
                        text='Meet Our Leaders'
                        className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamMembers