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
      {/* Welcome Container */}
      <div className="first_section">
        <Welcome />
        <AnimatorIcon />
      </div>
      {/* End of First Section */}

      <div className="third_section">
        <AboutNick />
        <Timeline />
      </div>
      {/* End of third section */}

      <div className="second_section">
        <FireCTA />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
