import React from 'react'

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
                    <div className='w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-16 gap-8'>
                        {sortedTeamMembers && sortedTeamMembers.map((item) => (
                            <div className='w-full aspect-square flex flex-col rounded-full' key={item.id}>
                                <div className='w-full aspect-square flex rounded-full'>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.images?.data?.attributes?.url}`}
                                        alt={item?.heading}
                                        className='w-auto aspect-square object-cover rounded-full'
                                    />
                                </div>
                                <div className='w-full h-auto flex flex-col p-4'>
                                    <h3 className='lg:text-xl md:text-lg sm:text-md text-sm font-semibold'>{item?.heading}</h3>
                                    <p className='lg:text-md md:text-sm sm:text-xs text-xs font-normal'>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembers