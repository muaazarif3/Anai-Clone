import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mycss from '../Fonts/Font.module.css'
gsap.registerPlugin(ScrollTrigger);
import cardImg1 from './img/1.png'
import cardImg2 from './img/3.png'
import cardImg3 from './img/4.png'
import cardImg4 from './img/5.png'
import wrapimg from './img/2.png'

import gsap from "gsap";

function OguaniSec() {
  useGSAP(() => {
    gsap.to(".imgclass", {
      scrollTrigger: {
        trigger: ".sec",
        start: "top top",
        end: "top -50%",
        pin: ".sec",
        scrub: 2,
      },
      y: "-30%",
      duration: 10,
    });
    gsap.to(".fullwrap", {
      scrollTrigger: {
        trigger: ".sec",
        start: "top top",
        end: "top -50%",
        scrub: 2,
      },
      width: "28%",
      height: "450px",
      duration: 8,
    });

    gsap.to(".imgclass img", {
      scrollTrigger: {
        trigger: ".sec",
        start: "top 40%",
        end: "20% -50%",
        scrub: 2,
      },
      y: "-20%",
      duration: 8,
    });
  });

  return (
    <>
      <div className="sec w-full h-[120vh] bg-zinc-800 relative overflow-hidden ">
        <div className="imgcol absolute left-20 flex flex-col gap-10 h-auto w-auto top-10">
          <div className="imgclass origin-bottom w-[70%] h-[40%] overflow-hidden">
            <img className="w-full h-full" src={cardImg1} alt="" />
          </div>
          <div className="imgclass origin-bottom w-[70%] h-[40%] overflow-hidden">
            <img className="w-full h-full " src={cardImg2} alt="" />
          </div>
        </div>
        <div className="imgcol absolute right-[-5%] flex flex-col gap-10 h-auto w-auto top-10">
          <div className="imgclass origin-bottom w-[70%] h-[40%] overflow-hidden">
            <img className="w-full h-full " src={cardImg3} alt="" />
          </div>
          <div className="imgclass origin-bottom w-[70%] h-[40%] overflow-hidden">
            <img className="w-full h-full " src={cardImg4} alt="" />
          </div>
        </div>
        <div
          className="fullwrap absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   w-full h-full overflow-hidden"
          style={{
            backgroundImage: `url(${wrapimg})`,
            backgroundPosition: "center",
          }}
        >
        </div>
        <div className="overlay absolute top-0 left-0 h-full w-full" style={{background : 'rgba(40, 44, 44, 0.511)'}}>
        </div>
        <div className="sectext absolute top-0 left-[50%] translate-x-[-50%] w-auto h-full flex flex-col items-center gap-10 z-20">
          <p className={` ${mycss.montreal} mt-24 text-white tracking-normal capitalize w-full text-center`}>The lgacy we teasure</p>
          <h2 className={` ${mycss.EikoThin}  mt-24  text-white text-[140px] tracking-wide capitalize text-nowrap`}>Oguni-Sugi</h2>
          <p className={` ${mycss.montreal} mt-18 leading-7 text-white tracking-wide capitalize font-light text-sm w-[50%] text-center`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim neque ad accusamus laborum magni sequi sunt itaque.
          </p>
          
        </div>
      </div>
    </>
  );
}

export default OguaniSec;
