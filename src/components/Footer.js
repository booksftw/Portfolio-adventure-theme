import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const onEmailClickHandler = () => {
    console.log("email click handler - show or hide modal");
    setShowEmailModal(!showEmailModal);
  };

  return (
    <>
      {/* <!-- The Modal --> */}
      <div
        id="myModal"
        class={
          "modal " +
          (showEmailModal ? "footer-email-show" : "footer-email-hidden")
        }
      >
        {/* <!-- Modal content --> */}
        <div class="modal-content">
          <span onClick={onEmailClickHandler} class="close">
            &times;
          </span>
          <div className="modal-content-email-container">
            <p className="modal-email-p">nzachary46@gmail.com</p>
            <div class="main">
              <div class="sub-main">
                <button
                  class="button-one"
                  onClick={() => {
                    navigator.clipboard.writeText("nzachary46@gmail.com");
                  }}
                >
                  Copy Email to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <ul>
          <li onClick={onEmailClickHandler}>
            Email
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <a
            className="footer-link"
            href="https://www.youtube.com/channel/UCtzQTLivB84hXDR22gQWQJA"
          >
            <li>
              YouTube
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </a>
          <a
            href="https://resume.creddle.io/resume/6qd2rps47cc"
            className="footer-link"
          >
            <li>
              Resume
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Footer;
