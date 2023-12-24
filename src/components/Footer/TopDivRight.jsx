import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";


const TopDivRight = () => {
  return (
    <div className='flex gap-4'>
        <BsTwitterX color='#ccc' size={20} />
        <FaGithub color='#ccc' size={20} />
        <MdOutlineAlternateEmail color='#ccc' size={20} />
        <FaDiscord color='#ccc' size={20} />
    </div>
  )
}

export default TopDivRight