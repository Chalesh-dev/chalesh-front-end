import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
    const router = useRouter();
    console.log(router.query.slug);
  return (
    <div>
        <a href={router.query.slug}>blog:{router.query.slug}</a>
    </div>
  )
}

export default Page