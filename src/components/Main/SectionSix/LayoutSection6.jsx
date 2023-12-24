import React from 'react'

const LayoutSection6 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Main/section6.png')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      // h-[1046px]
      className="w-full h-[1933px] bg-cover flex flex-col gap-16 text-white items-center justify-center sm:px-10 px-3 "
    >
        <div className='max-w-[1000px] w-auto text-center'>
            <p className='text-white sm:text-5xl text-3xl font-bold mb-12'>Stay Updated!</p>
            <p className='text-white sm:text-4xl text-xl font-bold leading-[2rem] sm:leading-[3rem]'>Explre Our Latest Insights and Articles on MEV Solutions and Blockchain Innovation</p>
        </div>
        <div className='text-white'>slider</div>
        <div className='text-white z-[500000000000] absolute bottom-[200px]'>fffffffffffffffffffff</div>
    </div>
  )
}

export default LayoutSection6;