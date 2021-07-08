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
        <div class="icon-scroll scroll_animator"></div>
      </div>
      {/* End of First Section */}

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
        <h1 className="nz_timeline_heading">Work...</h1>
        <div class="nz_timeline_container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="nz_tags">
                    #JavaScript, #Php, #Wordpress #SQL <br />
                  </h3>
                  <a href="https://www.rousseauchain.com">
                    <h1>RousseauChain.com</h1>
                  </a>
                  <p>
                    A retail only membership website with a visual catalog that
                    you can order from! For the people that want to just get in
                    and out, the speedy way is to order using the quick order
                    form app!
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="nz_tags">#JavaScript #Angular #C#</h3>
                  <a href="https:www.skyhive.io">
                    <h1>SkyHive.io</h1>
                  </a>
                  <p>
                    Their mission is to democratize labor opportunities so we
                    can all benefit from a more capable workforce and a more
                    efficient global economy.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="nz_tags">#JavaScript, #API, #Node, #React</h3>
                  <a href="#">
                    <h1>Reddit Theatre(link coming soon...)</h1>
                  </a>
                  <p>
                    A brand new way to view reddit. It calls reddit's api to
                    pull in images and videos and displays it in never before
                    seen way!
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="nz_tags">#JavaScript, #React </h3>
                  <a href="https://nz-react-dark-portfolio.web.app/">
                    <h1>Portfolio Dark Theme</h1>
                  </a>
                  <p>
                    View my portfolio in dark theme! In another unique design
                    you've never seen before!
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="nz_tags">#JavaScript, #React </h3>
                  <a href="#">
                    <h1>Todooly(coming soon)</h1>
                  </a>
                  <p>
                    View my portfolio in dark theme! In another unique design
                    you've never seen before!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of third section */}

      <div className="second_section">
        <h1 className="second_section_heading">
          I'm ready for my next adventure. Hire me?
        </h1>

        <video height="340" autoPlay muted loop="true">
          {/* <source src={myVideoSrc} /> */}
          <source src={Video} />
        </video>
      </div>

      <div className="footer">
        <div className="footer-container">
          <h1>Let's get in touch!</h1>
          <div className="social-list">
            <button>Youtube</button>
            <button>Email</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
