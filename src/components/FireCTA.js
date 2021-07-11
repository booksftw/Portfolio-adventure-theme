import React from "react";
import Video from "../assets/fire-effect.mp4";
import "./FireCTA.css";

const FireCTA = () => {
  return (
    <>
      <h1 className="second_section_heading">
        I'm ready for my next adventure. Hire me?
      </h1>

      <video
        className="section_section_video"
        height="340"
        autoPlay
        muted
        loop="true"
      >
        {/* <source src={myVideoSrc} /> */}
        <source src={Video} />
      </video>
    </>
  );
};

export default FireCTA;
