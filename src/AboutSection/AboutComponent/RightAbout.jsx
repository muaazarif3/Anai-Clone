import React from 'react'
import mycss from '../../Fonts/Font.module.css'

function RightAbout() {
  return (
   <>
    <div className=" mt-20 pl-[80px] rightAbout w-1/2 h-full flex flex-col gap-10 items-start">
        <h2 className={`text-2xl text-zinc-800 ${mycss.montreal} font-medium`}>We Cultivate for Posterity</h2>
        <p className={`${mycss.montreal} w-[65%] leading-7 text-[16px] text-[#383b38] text-left`}>Anai Wood Factory, established in 1964, is a small sawmill with strong roots in the Aso region. We specialize in manufacturing and selling building materials made from the locally inherited Oguni cedar and cypress, and we also have a brand for consumer goods. Our aspiration is to pass on fertile land and a thriving sea to future generations. To achieve this goal, we conduct our business with a strong commitment to the well-being of the bountiful forests in the area.</p>
        <div className='text-[16px] text-[#383b38] text-left tracking-[1px] border-b-[1px] border-[#383b38]'>About us</div>
    </div>
   </>
  )
}

export default RightAbout