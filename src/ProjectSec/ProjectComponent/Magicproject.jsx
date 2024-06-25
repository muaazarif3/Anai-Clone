import React from "react";
import mycsss from "../../Fonts/Font.module.css";

function Magicproject({ imgsrc, projectname, projectNumber }) {
  return (
    <>
      <div className="w-full h-auto flex gap-[20%] projectdown items-center mt-12 relative">
        <div className="w-1/2 h-auto">
          <div className="w-[400px] h-[250px] mt-10 ml-12">
            <img className="w-full h-full " src={imgsrc} alt="" />
          </div>
        </div>
        <h2
          className={`${mycsss.montreal} w-1/2 tracking-normal text-zinc-800 text-3xl`}
        >
          {projectname}
        </h2>
        <div className=" absolute top-11 flex flex-col justify-center items-center gap-1 ">
          <div>{projectNumber}</div>
          <div className="w-[20px] h-[1px] bg-[#878a8c]"></div>
          <div>5</div>
        </div>
      </div>
    </>
  );
}

export default Magicproject;
