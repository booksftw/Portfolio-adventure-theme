import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
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
                  and out, the speedy way is to order using the quick order form
                  app!
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
                  Their mission is to democratize labor opportunities so we can
                  all benefit from a more capable workforce and a more efficient
                  global economy.
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
                  A brand new way to view reddit. It calls reddit's api to pull
                  in images and videos and displays it in never before seen way!
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
    </>
  );
};

export default Timeline;
