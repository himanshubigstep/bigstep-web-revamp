import React from 'react'
import backgroundChallenge from '@/app/assets/background_image.svg'
import Image from 'next/image'
import SinglePageIcon from '@/app/assets/single-page-icon.svg'
import ChallengingForm from './challenging-form/ChallengingForm'
import { challengesFormData } from '@/api-data/api'

const ChallengingFormSection = ({challengescategories, challengesLabel, challengesData, challengesFormButtonText}: {challengescategories: any, challengesLabel: string, challengesData: any, challengesFormButtonText: string}) => {
    const challengesHeading = challengesData?.attributes?.challenge_heading?.challenges_heading
    const challangesListing = challengesData?.attributes?.challenge_listing
    const challangesFormBg = challengesData?.attributes?.challanges_form_heading?.challanges_background?.data?.attributes?.url
    const challangesFormHeading = challengesData?.attributes?.challanges_form_heading?.challenges_heading
    return (
    <div className='relative lg:py-16 py-8 px-4 w-full h-full'>
        <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${challangesFormBg}`}
            alt='background-image'
            className='absolute left-0 right-0 top-0 bottom-0 object-cover w-full h-full'
        />
        <div className='relative grid lg:grid-cols-2 grid-cols-1 w-full max-w-[1440px] mx-auto items-center lg:gap-0 gap-4'>
            <div className='w-full h-full flex flex-col gap-8 justify-center'>
                <h1 className='text-left lg:text-4xl md:text-3xl sm:text-md text-md font-semibold mb-4 leading-[130%] max-w-[80%]'>
                    {challengesHeading}
                </h1>
                <ul className='flex flex-col gap-4'>
                    {challangesListing && challangesListing.map((item: any) => (
                        <li key={item.id} className='lg:text-lg md:text-md sm:text-sm text-sm flex mb-3 gap-2 text-lg font-normal leading-[150%]'>
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.challenges_icon?.data?.attributes?.url}`}
                            alt='icon'
                        />
                        {item?.challenges_list}
                    </li>
                    ))}
                </ul>
            </div>
            <ChallengingForm
                challengesFormButtonText={challengesFormButtonText}
                challengescategories={challengescategories}
                challengesLabel={challengesLabel}
                challangesFormHeading={challangesFormHeading}
            />
        </div>
    </div>
  )
}

export default ChallengingFormSection