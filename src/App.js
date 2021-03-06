import "./App.css";

import Welcome from "./components/Welcome";
import AnimatorIcon from "./components/AnimatorIcon";
import AboutNick from "./components/AboutNick";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import FireCTA from "./components/FireCTA";

function App() {
  return (
    <div className="nz_root_container">
      {/* Start of first section */}
      <div className="first_section">
        <Welcome />
        <div className="animatorIcon_container">
          <AnimatorIcon />
        </div>
      </div>
      {/* End of First Section */}
      {/* Start of third section */}
      <div className="third_section">
        <AboutNick />
        <Timeline />
      </div>
      {/* End of third section */}
      {/* Start of second section */}
      <div className="second_section">
        <FireCTA />
      </div>
      {/* End of second section */}
      {/* Start of footer */}
      <div className="footer">
        <Footer />
      </div>
      {/* End of Footer */}
    </div>
  );
}

export default App;
