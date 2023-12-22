import Image from 'next/image';
import React from 'react'

const ContentRight = () => {
  return (
    <div className="lg:w-[40vw] w-full text-white flex justify-center">
      <Image alt='blockchain 1' width={683} height={551} src='/images/Main/blockchain 1.png' />
    </div>
  )
}

export default ContentRight;