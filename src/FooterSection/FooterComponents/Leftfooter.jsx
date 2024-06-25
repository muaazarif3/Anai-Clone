import React from "react";
import mycss from "../../Fonts/Font.module.css";
import footerLogo from "./logo.png";

function Leftfooter() {
  return (
    <div className="w-1/2 h-full py-20 flex flex-col justify-between px-10">
      <div className="w-full footerlink flex flex-col gap-2">
        {["About", "Brands", "Projects", "Company", "Contact"].map((e) => (
          <p
            className={`${mycss.montreal} font-normal text-2xl text-zinc-700 `}
          >
            {e}
          </p>
        ))}
      </div>
      <div className="logo w-[120px] ">
        <img className="w-full h-full" src={footerLogo} alt="" />
      </div>
    </div>
  );
}

export default Leftfooter;
