import BlogInfo from '@/components/Blogs/BlogInfo/BlogInfo';
import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
    const router = useRouter();
    const slug = router.query.slug;
  return (
    <div className='xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px]'>
        <BlogInfo slug={slug} />
    </div>
  )
}

export default Page