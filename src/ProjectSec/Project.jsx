import React, { useState } from "react";
import mycss from "../Fonts/Font.module.css";
import Magicproject from "./ProjectComponent/Magicproject";

function Project() {
  let [projectname, setProjectname] = useState("Hanashoan");
  let [projectImg, setProjectImg] = useState(
    "https://images.pexels.com/photos/22475982/pexels-photo-22475982/free-photo-of-historic-stone-house-with-a-roof-overgrown-with-grass-in-an-icelandic-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  let [projectNumber , setProjectNumber] = useState('1')
  let arr = [
    "https://images.pexels.com/photos/22475982/pexels-photo-22475982/free-photo-of-historic-stone-house-with-a-roof-overgrown-with-grass-in-an-icelandic-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13342922/pexels-photo-13342922.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11730754/pexels-photo-11730754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/5209177/pexels-photo-5209177.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14984807/pexels-photo-14984807/free-photo-of-wind-vane-on-top-of-the-roof.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  console.log(arr[0]);
  let HandleOnmouseEnter = (x, i) => {
    setProjectname(x);
    setProjectImg(arr[i]);
    setProjectNumber(i + 1)
  };

  return (
    <>
      <div className="full w-full h-[100vh] bg-white px-32">
        <div className="projecttop w-80% h-auto flex gap-[30%] items-start">
          <h2 className={` ${mycss.EikoThinProject} text-8xl `}>
            Latest <br></br> Projects
          </h2>
          <div className="flex flex-col">
            {[
              "Hanashoan",
              "HigoBank",
              "Mikanyamanoie",
              "Yamadorinomori Auto Camping Ground",
              "OIP",
            ].map((e, i) => {
              return (
                <p
                  className={`${mycss.montreal} hover:text-black cursor-pointer  text-[#878a8c] tracking-wide`}
                  onMouseEnter={() => HandleOnmouseEnter(e, i)}
                >
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <Magicproject imgsrc={projectImg} projectname={projectname} projectNumber = {projectNumber} />
      </div>
    </>
  );
}

export default Project;
