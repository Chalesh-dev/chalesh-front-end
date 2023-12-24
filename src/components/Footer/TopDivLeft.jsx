import React from 'react'

const TopDivLeft = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-8 sm:gap-16 gap-6'>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Docs</p>
            <span className='text-white'>Docs1</span>
            <span className='text-white'>Docs2</span>
            <span className='text-white'>Docs3</span>
            <span className='text-white'>Docs4</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Solutions </p>
            <span className='text-white'>Solutions 1</span>
            <span className='text-white'>Solutions 2</span>
            <span className='text-white'>Solutions 3</span>
            <span className='text-white'>Solutions 4</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Company</p>
            <span className='text-white'>Company</span>
            <span className='text-white'>Company</span>
            <span className='text-white'>Company</span>
            <span className='text-white'>Company</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Developer</p>
            <span className='text-white'>Developer</span>
            <span className='text-white'>Developer</span>
            <span className='text-white'>Developer</span>
            <span className='text-white'>Developer</span>
        </div>
    </div>
  )
}

export default TopDivLeft;