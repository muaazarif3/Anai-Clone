import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function LeftAbout() {
  useGSAP(() => {
    gsap.from(".img1", {
      scrollTrigger: {
        trigger: ".leftabout",
        scrub: 2,
        start: "top 30%",
        end: "top top",
      },
      x: -40,
      y: -50,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.from(".img2", {
      scrollTrigger: {
        trigger: ".leftabout",
        scrub: 2,
        start: "top 30%",
        end: "top top",
      },
      x: 20,
      y: -50,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.from(".img3", {
      scrollTrigger: {
        trigger: ".leftabout",
        scrub: 2,
        start: "top 30%",
        end: "top top",
      },
      x: 20,
      y: 50,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.from(".img4", {
      scrollTrigger: {
        trigger: ".leftabout",
        scrub: 2,
        start: "top 30%",
        end: "top top",
      },
      x: -20,
      y: 30,
      duration: 2,
      ease: "sine.inOut",
    });
  });

  return (
    <>
      <div className="leftabout w-1/2 relative h-full">
        <div
          className="img1 absolute w-[240px] h-[320px] top-8 left-40"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="img2 absolute w-[100px] h-[120px] top-32 right-32"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="img3 absolute w-[160px] h-[220px] top-[45%] right-[10%]"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="img4 absolute w-[100px] h-[150px] top-[60%] left-[45%]"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          }}
        ></div>{" "}
      </div>
    </>
  );
}

export default LeftAbout;
