import React from "react";
import Img from "./2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HeroImage() {
  useGSAP(() => {
    gsap.to('.heroimg', {
      scrollTrigger: {
        trigger: '.parent',
        scroller: 'body',
        pin: '.parent',
        scrub: 2,
        start: '30px 0',
        end: '10% -50%'
      },
      width : '100%', 
      height : '650px',
      y : '-35', 
      
      
    });
  });
  
  return (
    <>
      <div className="parent w-full h-[120vh] flex justify-center">
      <div className={`heroimg w-[43%] h-[600px] mt-[62px] overflow-hidden`} style={{ backgroundImage: `url(${Img})`, backgroundPosition : 'center' }}>
     </div>
      </div>
    </>
  );
}

export default HeroImage;
