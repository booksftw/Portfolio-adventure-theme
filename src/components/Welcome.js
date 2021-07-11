import React from "react";

import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome_heading_container">
        <h1 className="welcome_heading">
          Hi, i'm <span className="welcome_heading_name">Nick.</span>
        </h1>
      </div>
      <div className="welcome_p_container">
        <p className="welcome_p">
          A junior designer and software engineer that loves JavaScript and
          unique UI development and design.
          <br />
          <br />
          In my free time, I binge on Awwward winning website designs and
          practice algorithms for my YouTube channel.
        </p>
      </div>
    </>
  );
};

export default Welcome;
