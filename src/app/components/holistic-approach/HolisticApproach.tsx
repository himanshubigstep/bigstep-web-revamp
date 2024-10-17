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

const HolisticApproach = () => {
    const holisticApproachData = [
        {
            id: 1,
            heading: 'Initial Concept and Ideation',
            description: 'Understanding your vision and goals to create a detailed project roadmap.',
            icon: bulb,
            bgCode: '#E4F3E8',
            color: '#1EB047'
        },
        {
            id: 2,
            heading: 'Design',
            description: 'Crafting user-centric designs through wireframes, prototypes, and user feedback.',
            icon: pencil,
            bgCode: '#F5DFC3',
            color: '#D5AC78'
        },
        {
            id: 3,
            heading: 'Development',
            description: 'Implementing agile methodologies for iterative and flexible development.',
            icon: code,
            bgCode: '#FCDADA',
            color: '#ECA5A5'
        },
        {
            id: 4,
            heading: 'Quality Assurance',
            description: 'Conducting rigorous testing to ensure reliability and performance.',
            icon: medal,
            bgCode: '#FFDAFB',
            color: '#D090C9'
        },
        {
            id: 5,
            heading: 'Deployment',
            description: 'Seamlessly launching your product in the live environment.',
            icon: rocket,
            bgCode: '#DEEFD7',
            color: '#8DB87C'
        },
        {
            id: 6,
            heading: 'Maintenance',
            description: 'Providing ongoing support and updates to keep your product running smoothly.',
            icon: settings,
            bgCode: '#F0F7FF',
            color: '#007AFF'
        },
    ]
    return (
        <div className='w-full h-full md:py-16 py-8 px-4 flex flex-col justify-center items-center'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-3xl font-bold text-center mb-4'>Our Holistic Approach to Product Development</h2>
                <p className='text-lg'>Our process integrates multiple disciplines into a cohesive workflow to deliver a complete, high-quality product.</p>
            </div>
            <div className='relative w-full max-w-[1440px] mx-auto mt-8 md:h-[36rem] h-auto'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='flex w-full h-1 bg-[#E1E1E1] relative z-10 px-8 justify-evenly items-center'>
                        {holisticApproachData.map((item) => (
                            <div
                                key={item.id}
                                className='w-16 h-16 rounded-full relative z-10 flex justify-center items-center text-3xl font-semibold'
                                style={{ backgroundColor: item.bgCode, color: item.color }}
                            >
                                {item.id}
                                <div
                                    className='w-[1px] h-16 absolute'
                                    style={{
                                        borderColor: item.color,
                                        borderWidth: 1,
                                        borderStyle: 'dashed',
                                        bottom: item.id % 2 !== 0 ? '110%' : 'auto',
                                        top: item.id % 2 === 0 ? '110%' : 'auto',
                                    }}
                                >
                                </div>
                                <div
                                    className='absolute top-0 flex flex-col justify-center items-center w-72'
                                    style={{
                                        bottom: item.id % 2 !== 0 ? '250%' : 'auto',
                                        top: item.id % 2 === 0 ? '250%' : 'auto',
                                    }}
                                >
                                    <h3 className='text-center text-xl font-semibold text-black'>{item.heading}</h3>
                                    <p className='text-center text-sm font-normal text-black'>{item.description}</p>
                                </div>
                                <div
                                    className='absolute'
                                    style={{
                                        bottom: item.id % 2 === 0 ? '120%' : 'auto',
                                        top: item.id % 2 !== 0 ? '120%' : 'auto',
                                    }}
                                >
                                    <Image src={item.icon} alt="icon" className='w-full object-contain' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button
                text='Learn more about our Best Practices'
                onClick={() => console.log('clicked')}
                className='py-4 px-8 md:mt-0 mt-4 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg text-white font-normal'
            />
        </div>
    )
}

export default HolisticApproach