import Link from 'next/link'
import React from 'react'

const Subjects = ({title, text, href}) => {
  return (
    <Link href={href} className='flex flex-col h-[260px] overflow-hidden max-h-[260px] w-[257px]'>
        <p className='text-white text-left font-bold'>{title}</p>
        <span className='text-white font-light mt-4'>{text}</span>
    </Link>
  )
}

export default Subjects