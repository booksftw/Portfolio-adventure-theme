import React from "react";
import ScubaNickImage from "../assets/scuba-nick.jpg";
import "./AboutNick.css";

const AboutNick = () => {
  return (
    <>
      <div className="third_section_container">
        <img
          className="third_section_img"
          src={ScubaNickImage}
          alt=""
          height="300px"
        />
        <h2>Your go to guy for JavaScript problems that need to be solved.</h2>
        <p>
          I started coding in my teens making games using Corona SDK. Dancing
          between digital marketing and coding, I decide to pursue software
          development as a career.
          <br />
          <br /> I have experience with Graphic design and multiple Adobe
          products. A serious hobby of mine for a while was Blogging and
          everything involved to market it.
          <br />
          <br /> My heart burns to work in JavaScript. I'm a full stack
          developer with experience in C# and node, but I'm leaning on going
          towards specializing in frontend engineering.
          <br />
          <br />I started a YouTube channel going over algorithms and other
          software development tutorials. Thank you for checking my profile out!
          <br />
          <br />
          <a href="https://resume.creddle.io/resume/6qd2rps47cc">
            Here's a link to my resume
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutNick;
