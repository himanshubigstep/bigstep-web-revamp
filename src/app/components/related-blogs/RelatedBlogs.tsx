import React from 'react'

const RelatedBlogs = ({ related_blogs, related_blogs_by_category }: { related_blogs: any, related_blogs_by_category: any }) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const handleItemClick = (slug: string) => {
      const formattedSlug = decodeURIComponent(slug)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/[^a-z0-9\-]/g, '');
      window.open(`/blog/${formattedSlug}`, '_blank');
  };

    const getImageUrl = (imagePath: string) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${imagePath}`;
    
    const sortedBlogs = related_blogs_by_category.sort((a: { attributes: { upload_date: string | number | Date; }; }, b: { attributes: { upload_date: string | number | Date; }; }) => new Date(b?.attributes?.upload_date).getTime() - new Date(a?.attributes?.upload_date).getTime()).slice(0, 4);

  return (
    <div className='w-full h-full max-w-[1440px] mx-auto lg:py-16 py-8'>
        <div className='w-full max-w-[1080px] mx-auto flex flex-col mb-4'>
            <h2 className='text-3xl font-semibold text-left'>{related_blogs?.heading}</h2>
        </div>
        <div className='w-full max-w-[1080px] mx-auto flex flex-col'>
            <div className='w-full h-full grid lg:grid-cols-1 grid-cols-1 gap-8'>
            {sortedBlogs?.length > 0 ? (
            sortedBlogs.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item?.attributes?.slug)}
                className="cursor-pointer w-full h-full flex flex-col rounded-2xl border-[1px] border-gray-300 dark:border-gray-800 hover:shadow-lg hover:scale-105 transition-all"
              >
                <div className="w-full h-36 flex justify-center items-center rounded-tl-2xl rounded-tr-2xl">
                  <img
                    src={getImageUrl(item?.attributes?.image?.data?.attributes?.url)}
                    alt={item?.attributes?.heading || 'Blog image'}
                    className="w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl"
                  />
                </div>
                <div className="w-full h-auto flex flex-col p-4">
                  <h3 className="lg:text-xl md:text-lg sm:text-md text-sm font-semibold line-clamp-2">{item?.attributes?.heading}</h3>
                  <p className="text-sm font-semibold">{item?.attributes?.category?.data?.attributes?.name}</p>
                  <p className="text-sm font-semibold">{`Published on: ${formatDate(item?.attributes?.upload_date)}`}</p>
                  <div className="w-auto h-auto flex items-center py-2 gap-2">
                    <img
                      src={getImageUrl(item?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url)}
                      alt={item?.attributes?.author?.data?.attributes?.name || 'Author image'}
                      className="w-8 h-8 rounded-full object-cover border-[1px]"
                    />
                    <p className="text-sm font-semibold line-clamp-1">{item?.attributes?.author?.data?.attributes?.name}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No related blogs found.</p>
          )}
            </div>
        </div>
    </div>
  )
}

export default RelatedBlogs