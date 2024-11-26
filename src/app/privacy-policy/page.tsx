'use client'
import React from 'react'
import privacyBanner from '@/app/assets/privacy-policy.svg'
import Image from 'next/image'
import Button from '../components/common/button/Button'
import Link from 'next/link'

const PrivacyPolicies = () => {
    const handleClick = () => {
        const element = document.getElementById('privacy-policy');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='poppins'>
            <div className='relative w-full md:h-[42rem] h-[48rem] flex justify-center items-center bg-[#1D3B77] md:px-0 px-4'>
                <div className='relative w-full max-w-[1440px] mx-auto h-full flex md:flex-row flex-col md:justify-evenly justify-center items-center'>
                    <div className='flex flex-col justify-center items-start gap-4 md:w-[40%] w-full md:h-full h-auto'>
                        <h1 className='md:text-4xl text-2xl font-bold text-white'>Privacy Policy</h1>
                        <p className='md:text-lg text-md font-normal text-white'>
                            Welcome to BigStep Technologies’ Privacy Policy
                        </p>
                        <Button
                            text='Slide Down'
                            onClick={handleClick}
                            className='w-44 px-8 py-4 bg-[#4A6292] hover:bg-[#3D62AD] text-white rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 md:w-[60%] w-full md:h-full h-auto'>
                        <Image
                            src={privacyBanner}
                            alt='image'
                            className='relative h-full w-full'
                        />
                    </div>
                </div>
            </div>
            <div className='relative w-full h-full max-w-[1240px] mx-auto flex md:px-0 px-4'>
                <div id='privacy-policy' className='w-full flex flex-col md:py-16 py-8'>
                    <h2 className='text-3xl font-semibold text-center mb-4 text-black dark:text-white'>Privacy Policy</h2>
                    <p className='text-xl text-[#555] dark:text-white font-normal mb-16 text-center'>
                        Welcome to BigStep Technologies’ Privacy Policy
                    </p>
                    <div className='w-full flex flex-col gap-4'>
                        <ul className='list-decimal mb-4'>
                            <li className='text-md text-[#555] mb-4'>Hi there, we’re BigStep Technologies and welcome to our privacy policy. This policy sets out how we handle your personal information if you’re a BigStep Technologies user or visitor to our website.</li>
                            <li className='text-md text-[#555] mb-4'>By ‘we’, ‘us’ in this policy, we mean “BigStep Technologies Pvt. Ltd.” group, because that’s who we are and we own and run this website.</li>
                            <li className='text-md text-[#555] mb-4'>If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking about the rules for using this website.</li>
                            <li className='text-md text-[#555] mb-4'>Both personal information and personal data have the same meaning in the context of this privacy policy.</li>

                            <h3 className='text-xl font-bold mb-4'>The type of personal information we collect</h3>
                            <li className='text-md text-[#555] mb-4'>We collect certain personal information about visitors and users of our website.</li>
                            <li className='text-md text-[#555] mb-4'>The most common types of information we collect include things like: member names, email addresses, phone numbers, IP addresses, billing address details, payment information such as payment agent details, transactional details, support queries, website administration information, app store account credentials, server information and web analytics data.</li>

                            <h3 className='text-xl font-bold mb-4'>How we collect personal information</h3>
                            <li className='text-md text-[#555] mb-4'>We collect personal information directly when you provide it to us, automatically as you navigate through the website, or through other people when you use services associated with the website.</li>
                            <li className='text-md text-[#555] mb-4'>We collect your personal information when you provide it to us when you complete registration and buy products or services on our website, subscribe to a newsletter, email list, submit feedback, submit support ticket, enter a contest, fill out a survey, or send us a communication.</li>

                            <h3 className='text-xl font-bold mb-4'>Personal information we collect about you from others</h3>
                            <li className='text-md text-[#555] mb-4'>Although we generally collect personal information directly from you, on occasion, we also collect certain categories of personal information about you from other sources. In particular:
                            </li>
                                <ul className='list-alpha mt-8 mb-4'>
                                    <li className='text-md text-[#555] mb-4'>financial and/or transaction details from payment providers in order to process a transaction;</li>
                                    <li className='text-md text-[#555] mb-4'>other third party sources/ and or partners, whereby we receive additional information about you (to the extent permitted by applicable law), such as demographic data or fraud detection information, and combine it with information we have about you. For example, fraud warnings from service providers like identity verification service. We also receive information about you and your activities on and off the BigStep Technologies  website through partnerships, or about your experiences and interactions from our partner ad networks. We also receive information about you as a rights holder from our third-party partners when you purchase our products or services from them.</li>
                                </ul>

                            <h3 className='text-xl font-bold mb-4'>How we use personal information</h3>
                            <li className='text-md text-[#555] mb-4'>We will use your personal information:</li>
                                <ul className='list-alpha mt-8 mb-4'>
                                    <li className='text-md text-[#555] mb-4'>To fulfil an order or a contract, or take steps linked to a contract: in particular, in facilitating and processing transactions that take place on the website, like where you purchase an item from our store.</li>
                                    <li className='text-md text-[#555] mb-4'>Where this is necessary for purposes which are in our, or third parties, legitimate interests. These interests include:</li>
                                        <ul className='list-roman mt-8 mb-4'>
                                            <li className='text-md text-[#555] mb-4'>operating the website;</li>
                                            <li className='text-md text-[#555] mb-4'>providing you with services described on the website;</li>
                                            <li className='text-md text-[#555] mb-4'>verifying your identity when you sign in to our website;</li>
                                            <li className='text-md text-[#555] mb-4'>responding to support tickets, and helping facilitate the resolution of any disputes;</li>
                                            <li className='text-md text-[#555] mb-4'>updating you with operational news and information about our website, products and services e.g. to notify you about changes to our website, upgrade of product purchased by you, website disruptions or security updates;</li>
                                            <li className='text-md text-[#555] mb-4'>carrying out technical analysis to determine how to improve the website, products and services we provide;</li>
                                            <li className='text-md text-[#555] mb-4'>monitoring activity on the website, e.g. to identify potential fraudulent activity and to ensure compliance with the user terms that apply to the website;</li>
                                            <li className='text-md text-[#555] mb-4'>managing our relationship with you, e.g. by responding to your comments or queries submitted to us on the website or asking for your feedback or whether you want to participate in a contest or survey;</li>
                                            <li className='text-md text-[#555] mb-4'>managing our legal and operational affairs (including, managing risks relating to content and fraud matters);</li>
                                            <li className='text-md text-[#555] mb-4'>training our staff about how to best serve our customers;</li>
                                            <li className='text-md text-[#555] mb-4'>improving our products and services; and</li>
                                            <li className='text-md text-[#555] mb-4'>providing general administrative, support, performance functions and activities.</li>
                                        </ul>
                                    <li className='text-md text-[#555] mb-4'>Where you give us consent:</li>
                                        <ul className='list-roman mt-8 mb-4'>
                                            <li className='text-md text-[#555] mb-4'>providing you with marketing information about products and services which we feel may interest you; and</li>
                                            <li className='text-md text-[#555] mb-4'>customising our services and websites, like recommendations and advertising that appear on the website – where this involves the use of cookies or similar technologies – in order to provide a more personalised experience.</li>
                                        </ul>
                                    <li className='text-md text-[#555] mb-4'>For purposes which are required by law.</li>
                                    <li className='text-md text-[#555] mb-4'>For the purpose of responding to requests by government, a court of law, or law enforcement authorities conducting an investigation.</li>
                                </ul>

                            <h3 className='text-xl font-bold mb-4'>When we disclose your personal information</h3>
                            <li className='text-md text-[#555] mb-4'>We will disclose personal information to the following recipients:</li>
                                <ul className='list-alpha mt-8 mb-4'>
                                    <li className='text-md text-[#555] mb-4'>Companies and ventures that are in the “BigStep Technologies Pvt. Ltd.” group;</li>
                                    <li className='text-md text-[#555] mb-4'>service providers who assist us in connection with the ways we use personal information (as set out above), in particular: website hosting providers; marketing and analytics services; security and fraud prevention services; payment processing services</li>
                                    <li className='text-md text-[#555] mb-4'>our professional advisers (lawyers, accountants, financial advisers etc.);</li>
                                    <li className='text-md text-[#555] mb-4'>regulators and government authorities in connection with our compliance procedures and obligations;</li>
                                    <li className='text-md text-[#555] mb-4'>a purchaser or prospective purchaser of all or part of our assets or our business, and their professional advisers, in connection with the purchase;</li>
                                    <li className='text-md text-[#555] mb-4'>a third party to respond to requests relating to a criminal investigation or alleged or suspected illegal activity;</li>
                                    <li className='text-md text-[#555] mb-4'>a third party, in order to enforce or defend our rights, or to address financial or reputational risks;</li>
                                    <li className='text-md text-[#555] mb-4'>a rights holder in relation to an allegation of intellectual property infringement or any other infringement; and</li>
                                    <li className='text-md text-[#555] mb-4'>other recipients where we are authorised or required by law to do so.</li>
                                </ul>

                            <h3 className='text-xl font-bold mb-4'>Where we transfer and/or store your personal information</h3>
                            <li className='text-md text-[#555] mb-4'>We are based in India with our servers based in US so your data will be processed in India and the US. Some of the recipients we have described in section 10 above, and to whom we disclose your personal information, are based outside India in places like US. We do this on the basis of your consent to this policy. In order to protect your information, we take care where possible to work with service providers who we believe maintain an acceptable standard of data security compliance.</li>

                            <h3 className='text-xl font-bold mb-4'>How we keep your personal information secure</h3>
                            <li className='text-md text-[#555] mb-4'>We store personal information on secure servers that are managed by us and our service providers. Personal information that we store or transmit is protected by security and access controls, including username and password authentication, two-factor authentication, and data encryption where appropriate.</li>

                            <h3 className='text-xl font-bold mb-4'>How you can access your personal information</h3>
                            <li className='text-md text-[#555] mb-4'>You can access some of the personal information that we collect about you by logging in to your account. You also have the right to make a request to access other personal information we hold about you and to request corrections of any errors in that data. You can also close the account you have with us at any time. To make an access or correction request, contact our privacy inspector using the contact details at the end of this policy.</li>

                            <h3 className='text-xl font-bold mb-4'>Marketing Choices regarding your personal information</h3>
                            <li className='text-md text-[#555] mb-4'>Where we have your consent to do so (e.g. if you have subscribed to one of our e-mail lists or have indicated that you are interested in receiving offers or information from us), we send you marketing communications by email about products and services that we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the “unsubscribe” facility provided in the communication itself.</li>
                            <li className='text-md text-[#555] mb-4'>You also have choices about cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject cookies some parts of our website may not work properly in your case.</li>

                            <h3 className='text-xl font-bold mb-4'>Cookies and web analytics</h3>
                            <li className='text-md text-[#555] mb-4'>For more information about how we use cookies, web beacons and similar technologies see our cookie policy here and for more general information on cookies, see <Link href='http://www.allaboutcookies.org' target='_blank' className='text-blue-400 hover:underline'>http://www.allaboutcookies.org.</Link></li>
                            <li className='text-md text-[#555] mb-4'>When you visit our website, there’s certain information that’s recorded which is generally anonymous information and does not reveal your identity. If you’re logged into your account some of this information could be associated with your account. We’re talking about the following kinds of details:</li>
                                <ul className='list-alpha mt-8 mb-4'>
                                    <li className='text-md text-[#555] mb-4'>your IP address or proxy server IP address;</li>
                                    <li className='text-md text-[#555] mb-4'>the URL you requested;</li>
                                    <li className='text-md text-[#555] mb-4'>the name of your internet service provider is sometimes captured depending on the configuration of your ISP connection;</li>
                                    <li className='text-md text-[#555] mb-4'>the date and time of your visit to the website;</li>
                                    <li className='text-md text-[#555] mb-4'>the length of your session;</li>
                                    <li className='text-md text-[#555] mb-4'>the pages which you have accessed;</li>
                                    <li className='text-md text-[#555] mb-4'>the number of times you access our site within any month;</li>
                                    <li className='text-md text-[#555] mb-4'>the URL you look at and information relating to it;</li>
                                    <li className='text-md text-[#555] mb-4'>the website which referred you to our website; and</li>
                                    <li className='text-md text-[#555] mb-4'>the operating system which your computer uses.</li>
                                </ul>
                            <li className='text-md text-[#555] mb-4'>Occasionally, we will use third party advertising companies to serve ads based on prior visits to our website. For example, if you visit our website, you may later see an add for our products and services when you visit a different Site. Read more about your options in our <Link href='/cookies-policy' target='_blank' className='text-blue-400 hover:underline'>cookie policy.</Link>
                            </li>

                            <h3 className='text-xl font-bold mb-4'>Information about children</h3>
                            <li className='text-md text-[#555] mb-4'>Our website is not suitable for children under the age of 16 years, so if you are under 16 we ask that you do not use our website or give us your personal information. If you are from 16 to 18 years, you can browse the website but you’ll need the supervision of a parent or guardian to become a registered user. It’s the responsibility of parents or guardians to monitor their children’s use of our Sites.</li>

                            <h3 className='text-xl font-bold mb-4'>Information you make public or give to others</h3>
                            <li className='text-md text-[#555] mb-4'>If you make your personal information available to other people, we can’t control or accept responsibility for the way they will use or manage that data. There are lots of ways that you can find yourself providing information to other people, like when you post a comment or share information via social media. Before making your information publicly available or giving your information to anyone else, think carefully. If you’re sharing information via another website, check the privacy policy for that website to understand its information management practices as this privacy policy will not apply.</li>

                            <h3 className='text-xl font-bold mb-4'>How long we keep your personal information</h3>
                            <li className='text-md text-[#555] mb-4'>We retain your personal information for as long as is necessary to provide the services to you and others, and to comply with our legal obligations. If you no longer want us to use your personal information or to provide you with the BigStep Technologies services, you can request that we erase your personal information and close your BigStep Technologies account. Please note that if you request the erasure of your personal information we will retain information from deleted accounts as necessary for our legitimate business interests, to comply with the law, prevent fraud, collect fees, resolve disputes, troubleshoot problems, assist with investigations, enforce the terms of service and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.</li>

                            <h3 className='text-xl font-bold mb-4'>When we need to update this policy</h3>
                            <li className='text-md text-[#555] mb-4'>We will need to change this policy from time to time in order to make sure it stays up to date with the latest legal requirements and any changes to our privacy management practices.</li>
                            <li className='text-md text-[#555] mb-4'>When we do change the policy, we’ll make sure to notify you about such changes, where required. A copy of the latest version of this policy will always be available on this page.</li>

                            <h3 className='text-xl font-bold mb-4'>How you can contact us</h3>
                            <li className='text-md text-[#555] mb-4'>Data Protection Officer: We have a “Data Protection Officer” who is responsible for matters relating to privacy and data protection. You may contact this officer if you have any questions about our privacy practices or the way in which we have been managing your personal information This Data Protection Officer can be reached at the following address: BigStep Technologies Pvt. Ltd., 2nd Floor, SCO-63, Old Judicial Complex, Sector 15, Gurgaon – 122001 or <Link href='mailto:info@bigsteptech.com' className='text-blue-400 hover:underline'>info@bigsteptech.com.</Link></li>

                        </ul>
                        <ul className='list-decimal mb-4'>
                            <h3 className='text-xl font-bold mb-4'>
                                If you’re a user or visitor in the European Economic Area these rights also apply to you:
                            </h3>
                            <li className='text-md text-[#555] mb-4'>For the purposes of applicable EU data protection law (including the General Data Protection Regulation 2016/679 (the “GDPR”), we are a ‘data controller’ of your personal information.</li>

                            <h3 className='text-xl font-bold mb-4'>
                                How you can access your personal information
                            </h3>
                            <li className='text-md text-[#555] mb-4'>You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your data, to withdraw this consent as more fully described below.</li>
                            <li className='text-md text-[#555] mb-4'>These rights are limited in some situations – for example, we can demonstrate that we have a legal requirement to process your personal information. In some instances, this means that we may retain some data even if you withdraw your consent.</li>
                            <li className='text-md text-[#555] mb-4'>Where we require your personal information to comply with legal or contractual obligations, then provision of such data is mandatory: if such data is not provided, then we will not be able to manage our contractual relationship with you, or to meet obligations placed on us. In all other cases, provision of requested personal information is optional.</li>
                            <li className='text-md text-[#555] mb-4'>If you have unresolved concerns you also have the right to complain to data protection authorities. The relevant data protection authority will be the data protection authority of the country: (i) of your habitual residence; (ii) of your place of work; or (iii) in which you consider the alleged infringement has occurred.</li>
                        </ul>
                        <h3 className='text-2xl font-bold mb-4'>BigStep Technologies Privacy Policy v4, effective date 25 May 2018</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicies