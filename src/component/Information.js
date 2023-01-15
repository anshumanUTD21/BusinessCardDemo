import React from "react";
// import ReactDOM from "react-dom/client";

function Information() {
  return (
    <div className="info-container">
      <div className="info-box">
        <img className="info-img" src="/infoImg.jpg" alt="personal" />
        <div className="info-details">
          <p className="info-item" id="info-name">
            Anshuman Singh
          </p>
          <p className="info-item" id="info-work">
            Frontend Developer
          </p>
          <p className="info-item" id="info-site">
            Anshmn19@gmail.com
          </p>
        </div>
      </div>
      <div className="info-button">
        <button className="info-btn" id="info-email">
          <span>
            <img src="/Mail.png" alt="mail logo" className="info-btn-icon" />
          </span>
          <span className="button-text">Email</span>
        </button>
        <button className="info-btn" id="info-linkedin">
          <span>
            <img
              src="/linkedin.png"
              alt="linkedin logo"
              className="info-btn-icon"
            />
          </span>
          <span className="button-text">Linkedin</span>
        </button>
      </div>
    </div>
  );
}

export default Information;
