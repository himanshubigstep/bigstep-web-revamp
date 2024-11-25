import React from 'react'
import TopBanner from '../components/common/top-banner/TopBanner'

const TermsAndConditions = () => {
    const termsTopBanner = {
        termsIntro: {
            id: 1,
            backgroundImage: {
                data: [{
                    attributes: {
                        url: '/uploads/HP_S1_S2_f49dc1763d.jpg',
                        formats: {
                            large: {
                                url: '/uploads/HP_S1_S2_f49dc1763d.jpg'
                            }
                        }
                    }
                }]
            },
            buttonText: 'Lets Get Started',
            heading: 'Terms & Conditions',
            description: 'Terms & Conditions',
            label: 'Terms & Conditions',
            link: 'https://www.google.com',
        }
    }
    return (
        <div className='poppins'>
            <TopBanner bannerData={ termsTopBanner?.termsIntro } />
        </div>
    )
}

export default TermsAndConditions