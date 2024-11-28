'use client'
import React from 'react'
import termsBanner from '@/app/assets/terms.svg'
import Image from 'next/image'
import Button from '../components/common/button/Button'

const TermsAndConditions = () => {
    const handleClick = () => {
        const element = document.getElementById('privacy-policy');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='poppins'>
            <div className='relative w-full md:h-[42rem] h-[48rem] flex justify-center items-center bg-[#603813]'>
                    <div className='px-4 relative w-full max-w-[1440px] mx-auto h-full flex md:flex-row flex-col md:justify-evenly justify-center items-center'>
                        <div className='flex flex-col justify-center items-start gap-4 md:w-[40%] w-full md:h-full h-auto'>
                            <h1 className='md:text-4xl text-2xl font-bold text-white'>Terms & Conditions</h1>
                            <p className='md:text-lg text-md font-normal text-white'>
                                Please read the following terms and conditions carefully which govern all use of the BigStep Technologies website, its content, all services and products available through the website and client area (hereafter collectively referred to as the Website)
                            </p>
                            <Button
                                text='Slide Down'
                                onClick={handleClick}
                                className='w-44 px-8 py-4 bg-[#7FA6D8] hover:bg-[#2F72BC] text-white rounded-lg'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-start gap-4 md:w-[60%] w-full md:h-full h-auto'>
                            <Image
                                src={termsBanner}
                                alt='image'
                                className='relative h-full w-full'
                            />
                        </div>
                    </div>
            </div>
            <div className='relative w-full h-full max-w-[1440px] mx-auto flex px-4'>
                <div id='privacy-policy' className='w-full flex flex-col md:py-16 py-8'>
                    <h2 className='text-3xl font-semibold text-center mb-4 text-black dark:text-white'>Terms & Conditions</h2>
                    <p className='text-md text-[#555] dark:text-white font-normal mb-4'>
                    Please read the following terms and conditions carefully which govern all use of the BigStep Technologies website, its content, all services and products available through the website and client area (hereafter collectively referred to as the Website). Your use of the Website, indicate that you have read and accepted these terms and conditions.
                    </p>
                    <p className='text-md text-[#555] dark:text-white font-normal mb-4'>
                    The Website is owned and operated by BigStep Technologies Pvt Ltd (BigStep). By accessing or using any part of this Website, you agree to become bound by all the terms and conditions mentioned below (hereafter collectively referred to as the Agreement). If you do not agree to all the terms and conditions of this Agreement, then you may not access the Website or use any of its services.
                    </p>
                    <div className='w-full flex flex-col gap-4'>
                        <ul className='flex flex-col gap-4 list-decimal md:pl-16 pl-8'>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Software Usage: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>All software products available on the Website are commercially licensed products. Your purchase and use of these software constitute your acceptance of their accompanying license agreement.</span>
                                <br /><br />
                                <p className='font-normal text-md mb-4 text-[#555] dark:text-white'>
                                Each license purchased of software products available on the Website is valid for single-domain or sub-domain usage only, with the exception of a single development copy. The development installation must be accessible only to the license holder and commissioned developers, and not accessible to the general public.
                                </p>
                                <p className='font-normal text-md mb-4 text-[#555] dark:text-white'>
                                These softwares cannot be distributed, nor resold to third parties or individuals. If any customer is found violating these, we will have complete rights to close his/her/their account on our site.
                                </p>
                                <p className='font-normal text-md mb-4 text-[#555] dark:text-white'>
                                Any unauthorised usage, distribution or access of the software available on the Website will be considered as stealing. Such illegal conduct will make the concerned party/individual liable for prosecution by us to the fullest extent of law.
                                </p>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Installation: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>BigStep Technologies will not be responsible for any data loss, down-time occurring from the installation or upgradation of its software products. You must take a back-up of your code files and database before any installations/upgradations.</span>
                                <br /><br />
                                <p className='font-normal text-md mb-4 text-[#555] dark:text-white'>
                                The plugin installation services of BigStep Technologies  only include basic installation and setup. For any other customizations, please Contact Us. If you have purchased our plugin installation services, please ensure that you take a back-up of your code files and database before the installation proceeds. BigStep Technologies  will not be responsible for any data loss or down-time.
                                </p>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Refund Policy: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>All software products developed and sold by</span> BigStep Technologies <span className='font-normal text-md text-[#555] dark:text-white'>are downloadable. Hence, refunds for product(s) purchased will be provided only if</span> ALL OF THE FOLLOWING CONDITIONS ARE SATISFIED:
                                <br /><br />
                                <ul className='font-normal mb-4 text-[#555] dark:text-white list-disc'>
                                    <li className='font-normal text-md'>Product cannot be properly installed on your site. This means that both you and the BigStep Technologies staff are unable to install the product properly on your site using the FTP, database access and site admin details of your site.</li>
                                    <li className='font-normal text-md'>Problems or errors faced in product installation are not caused by any modifications made to the core platform or another related product/plugin on your site.</li>
                                    <li className='font-normal text-md'>Above 2 conditions are satisfied and request for refund is made within 72 hours after product purchase.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Payment: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>The Website offers numerous products and services for sale. The Website does not handle payments for these products directly, but rather refers these payments to a secure third-party payment processor which handles all aspects of the payment process. Any payment issues or disputes should be resolved directly with the payment processor. Once we have been notified by the payment processor that a payment has been made, and that the payment has successfully passed a fraud review, access will be granted to the product or service being purchased as soon as possible, however we make no guarantees of timeliness or immediacy.</span>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Changes: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>BigStep Technologies reserves the right to make changes to the terms of this Agreement. It is your responsibility to check this Agreement periodically for updated terms. You understand and agree that if you use the Website after the date on which the Agreement was changed, your use will be treated as acceptance of those changes.</span>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Disclaimer of Warranties: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>The Website is provided “as is”. BigStep Technologies hereby disclaims all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. BigStep Technologies  does not make any warranty that the Website will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Website at your own discretion and risk.</span>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Limitation of Liability: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>In no event will BigStep Technologies  be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any direct, indirect, special, incidental, consequential or exemplary damages; (ii) the cost of procurement or substitute products or services; (iii) for interruption of use or loss or corruption of data; (iv) for any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation; or (iv) for any amounts that exceed the fees paid by you to BigStep Technologies under this agreement. BigStep Technologies shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.</span>
                                <br /><br />
                                <span className='font-normal text-md text-[#555] dark:text-white'>
                                The limitations on BigStep’s liability above shall apply whether or not BigStep Technologies  has been advised of or should have been aware of the possibility of any such losses arising.
                                </span>
                            </li>
                            <li className='font-bold'>
                                <span className='text-black dark:text-white text-lg'>Indemnification: </span>
                                <span className='font-normal text-md text-[#555] dark:text-white'>You agree to hold harmless and indemnify BigStep Technologies, and its subsidiaries, affiliates, directors, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any and all claims, losses, damages (actual and consequential) and expenses, including attorneys’ fees and litigation costs, arising out of your use of the Website, including but not limited to your violation of this Agreement.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions