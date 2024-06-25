import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import mycss from "../../Fonts/Font.module.css";
import logoImg from './logo.png'
function Nav() {
  return (
    <>
      <div className=" w-full px-16 py-10 flex justify-between items-center">
        <div className="logo w-[100px] ">
            <img className="w-full h-full" src={logoImg} alt="" />
        </div>
        <div className="nav-link flex items-center gap-10">
          {["About", "brands", "projects", "Company", "Contact"].map((e) => {
            return (
              <p
                className={`${mycss.montreal} text-[14px] uppercase font-[400] tracking-normal text-zinc-800 leading-none`}
                key={e}
              >
                {e}
              </p>
            );
          })}
        </div>
        <div className="menu">
          <BsThreeDotsVertical />
        </div>
      </div>
    </>
  );
}

export default Nav;
