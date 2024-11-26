'use client'
import React from 'react'
import cokkiesBanner from '@/app/assets/cookies-policy.svg'
import Image from 'next/image'
import Button from '../components/common/button/Button'
import Link from 'next/link'

const CookiesPolicies = () => {
    const handleClick = () => {
        const element = document.getElementById('privacy-policy');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='poppins'>
            <div className='relative w-full md:h-[42rem] h-[48rem] flex justify-center items-center bg-[#4B9CD8] md:px-0 px-4'>
                <div className='relative w-full max-w-[1440px] mx-auto h-full flex md:flex-row flex-col md:justify-evenly justify-center items-center'>
                    <div className='flex flex-col justify-center items-start gap-4 md:w-[40%] w-full md:h-full h-auto'>
                        <h1 className='md:text-4xl text-2xl font-bold text-white'>Cookies Policy</h1>
                        <p className='md:text-lg text-md font-normal text-white'>
                        This policy states how we use cookies, web beacons and other similar technologies.
                        </p>
                        <Button
                            text='Slide Down'
                            onClick={handleClick}
                            className='w-44 px-8 py-4 bg-[#3F3B7A] hover:bg-[#30255D] text-white rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 md:w-[60%] w-full md:h-full h-auto'>
                        <Image
                            src={cokkiesBanner}
                            alt='image'
                            className='relative h-full w-full'
                        />
                    </div>
                </div>
            </div>
            <div className='relative w-full h-full max-w-[1240px] mx-auto flex md:px-0 px-4'>
                <div id='privacy-policy' className='w-full flex flex-col md:py-16 py-8'>
                    <h2 className='text-3xl font-semibold text-center mb-16 text-black dark:text-white'>Cookies Policy</h2>
                    <h3 className='text-xl font-bold mb-4'>BigStep Technologies policy for cookies, web beacons and similar technologies</h3>
                    <p className='text-md text-[#555] mb-4'>This policy states how we use cookies, web beacons and other similar technologies. As a part of our commitment to upholding a high standard of transparency in our <Link href='/privacy-policy' target='_blank' className='text-blue-400 hover:underline'>Privacy Policy</Link>, we’ve created this guide to explain the tracking technologies we use on our website.</p>

                    <div className='w-full flex flex-col'>
                        <h3 className='text-xl font-bold mb-4'>What are cookies, web beacons, and similar technologies?</h3>
                        <p className='text-md text-[#555]'>
                        Typically, there are two types of tracking technologies we might use on our website:
                        </p>
                        <ul className='list-decimal mb-4'>
                            <li className='text-md text-[#555] mb-4'>
                            <b>Cookies: </b>They’re actually a small data file sent from a server to your web browser or mobile device that is stored on your browser cache or mobile device. There are ways you can control your cookies preferences and set whether you want to accept or reject cookies (see what your options are below).
                            </li>
                            <li className='text-md text-[#555] mb-4'>
                            <b>Clear gifs, web beacons, web bugs: </b>These are tiny graphics with a unique identifier similar in function to cookies, and are used to track the movements of web users between pages and websites. Unlike cookies, which are cached on a user’s computer, clear gifs, web beacons and web bugs are embedded invisibly on web pages and are about the size of a single pixel.
                            </li>
                        </ul>
                        <h3 className='text-xl font-bold mb-4'>What do we do with these technologies?</h3>
                        <p className='text-md text-[#555]'>
                        We use these tracking technologies for a few general purposes like:
                        </p>
                        <ul className='list-decimal mb-4'>
                            <li className='text-md text-[#555] mb-4'>To allow our website to function correctly.</li>
                            <li className='text-md text-[#555] mb-4'>To understand how our website is functioning and to inform any improvements in performance and our services.</li>
                            <li className='text-md text-[#555] mb-4'>To enhance your experience on our website and provide functionality that means for example you don’t have to re-enter your details each time you engage with our website or to record what purchases you’ve made on our website.</li>
                            <li className='text-md text-[#555] mb-4'>To gather relevant data that helps us deliver marketing and advertising content relevant to your interests.</li>
                            <p className='text-md text-[#555] mb-4'>We might sometimes partner with third-party services who may use various tracking technologies to provide certain services or features on our website, including targeted online marketing or relevant on-site messaging. These third-party services use cookies to anonymously collect data and allow them to recognize your computer or mobile device each time you visit our website. No personally identifiable information is collected by these cookies. The anonymous data they collect is kept separate from the personal information about you as a user that we collect.</p>
                        </ul>
                        <h3 className='text-xl font-bold mb-4'>Your options when it comes cookies, web beacons and similar technologies</h3>
                        <p className='text-md text-[#555] mb-4'>
                        You can change your web browser’s settings to reflect your cookie preferences. Use these links to find out more information about cookie settings for these common browsers:
                        </p>
                        <ul className='list-decimal mb-4'>
                            <li className='text-md text-[#555] mb-4'><Link href='https://support.microsoft.com/en-us/windows' target='_blank' className='text-blue-400 hover:underline'>Internet Explorer</Link></li>
                            <li className='text-md text-[#555] mb-4'><Link href='https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' target='_blank' className='text-blue-400 hover:underline'>Firefox</Link></li>
                            <li className='text-md text-[#555] mb-4'><Link href='https://support.google.com/chrome/answer/95647?hl=en' target='_blank' className='text-blue-400 hover:underline'>Chrome</Link></li>
                            <li className='text-md text-[#555] mb-4'><Link href='https://support.apple.com/en-us/105082' target='_blank' className='text-blue-400 hover:underline'>Safari</Link></li>
                        </ul>
                        <p className='text-md text-[#555] mb-4'>Also, you can opt out of third party advertising cookies at any time by visiting this page.
                            <br />
                            <br />
                            Just keep in mind that if you disable cookies, web beacons and similar technologies there might be some functionality that will not work or not operate correctly on our website.
                            <br />
                            <br />
                            If you have any questions about our privacy practices, please contact our privacy officer in writing at BigStep Technologies Pvt. Ltd., 2nd Floor, SCO-63, Old Judicial Complex, Sector 15, Gurgaon – 122001 or <Link href='mailto:info@bigsteptech.com' target='_blank' className='text-blue-400 hover:underline'>'info@bigsteptech.com</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiesPolicies