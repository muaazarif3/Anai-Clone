import React from "react";
import mycss from '../../Fonts/Font.module.css'
function Heading() {
  return(
    <>
        <div className="w-full flex justify-center items-end">
            <h1 className={` tracking-normal text-[136px] mt-32 text-zinc-800 font-normal ${mycss.Eiko} leading-none text-center`}>
            Cultivate for Posterity
            </h1>
        </div>
    </>
  )
}

export default Heading;
