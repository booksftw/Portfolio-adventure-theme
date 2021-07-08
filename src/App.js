import "./App.css";
import Video from "./assets/fire-effect.mp4";
import ScubaNickImage from "./assets/scuba-nick.jpg";

function App() {
  return (
    <div className="nz_root_container">
      {/* Welcome Container */}
      <div className="first_section">
        {/* welcome heading container */}
        <div className="welcome_heading_container">
          <h1 className="welcome_heading">
            Hi, i'm <span className="welcome_heading_name">Nick.</span>
          </h1>
        </div>
        {/* End of welcome heading container */}
        {/* Welcome p container */}
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
        {/* End of welcome p container */}
        <h3 className="scroll_animator">Scroll animation</h3>
      </div>
      {/* End of First Section */}

      <div className="second_section">
        <h1 className="second_section_heading">
          I'm ready for my next adventure. Hire me?
        </h1>

        <video height="340" autoPlay muted loop="true">
          {/* <source src={myVideoSrc} /> */}
          <source src={Video} />
        </video>
      </div>

      <div className="third_section">
        <div className="third_section_container">
          <img
            className="third_section_img"
            src={ScubaNickImage}
            alt=""
            height="300px"
          />
          <h2>
            Your go to guy for JavaScript problems that need to be solved.
          </h2>
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
            software development tutorials. Thank you for checking my profile
            out!
            <br />
            <br />
            <a href="https://resume.creddle.io/resume/6qd2rps47cc">
              Here's a link to my resume
            </a>
          </p>
        </div>
      </div>
      {/* End of third section */}

      <div className="footer">
        <h1>Let's get in touch!</h1>
        <div className="social-list">
          <button>Youtube</button>
          <button>Email</button>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default App;
