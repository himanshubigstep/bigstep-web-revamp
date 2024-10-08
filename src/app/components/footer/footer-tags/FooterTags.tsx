import Link from 'next/link'
import React from 'react'

interface FooterTagsProps {
    attributes: {
        keywords: Array<{
            id: number;
            keywords: string;
        }>
    }
}

const FooterTags: React.FC<FooterTagsProps> = ({ attributes }) => {
    const keyWords = attributes?.keywords || [];
    return (
        <div className='flex flex-wrap gap-4 mt-8'>
            {keyWords.map(({ id, keywords }) => (
                <p
                    key={id}
                    // href={`/tags/${keywords.slice(1)}`}
                    className='text-gray-400 border border-gray-400 rounded-md px-2 py-2'
                >
                    {keywords}
                </p>
            ))}
        </div>
    )
}

export default FooterTags