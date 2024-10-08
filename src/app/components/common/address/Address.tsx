import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

interface AddressProps {
  attributes: any
}


const Address: React.FC<AddressProps> = ({ attributes }) => {
  const address = attributes?.organisation_details
  return (
    <div className='w-full'>
      <address>
        <p className='text-gray-300 not-italic mb-4'>
          {address?.address}
        </p>
        <div className='flex flex-col gap-4'>
          <Link
            className='text-gray-300 hover:text-white not-italic flex gap-2 items-center'
            href='mailto:info@bigsteptech.co
              m
              '>
            <AiOutlineMail /> {`${address?.organisation_mail} [Business related]`}
          </Link>
          <Link
            className='text-gray-300 hover:text-white not-italic flex gap-2 items-center'
            href='mailto:hr@bigsteptech.com'
          >
            <AiOutlineMail /> {`${address?.hr_email} [HR related]`}
          </Link>
        </div>
      </address>
    </div>
  )
}

export default Address