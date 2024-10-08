import React from 'react'
import Services from './Services'
import Specialization from './Specialization'
import Resources from './Resources'
import AboutUs from './AboutUs'
import Link from 'next/link'

interface TechnologyTextItem {
  id: number;
  technologyDetails: string;
  technologyLinks: string;
}

interface AboutOrganisationItem {
  id: number;
  heading: string;
  technologyText: TechnologyTextItem[];
}

interface FooterNavigationProps {
  attributes: {
    about_organisation: AboutOrganisationItem[];
  };
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ attributes }) => {
  const footerNav = attributes?.about_organisation || [];
  return (
    <div className='flex flex-col md:flex-row gap-8 md:w-[70%] w-full'>
      {footerNav.map((item) => (
        <div key={item.id} className='w-full h-full'>
          <h2 className='text-gray-200 not-italic text-2xl'>{item.heading}</h2>
          <ul className='flex flex-col gap-4 mt-4'>
            {item.technologyText.map((text) => (
              <li key={text.id} className='text-gray-300 text-md hover:text-white'>
                <Link href={text.technologyLinks}>
                  {text.technologyDetails}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FooterNavigation