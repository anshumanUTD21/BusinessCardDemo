import React from "react";
// import ReactDOM from "react-dom/client";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-social">
        <img
          src="/twitterIcon.png"
          alt="twitter icon"
          className="social-icon"
        />
        <img
          src="/facebookIcon.png"
          alt="facebook icon"
          className="social-icon"
        />
        <img
          src="/instagramIcon.png"
          alt="instagram icon"
          className="social-icon"
        />
        <img src="/gitHubIcon.png" alt="github icon" className="social-icon" />
      </div>
    </div>
  );
}

export default Footer;
