import React, { useState } from "react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color: isHovered ? "white" : "#467FCF",
    backgroundColor: isHovered ? "#467FCF" : "transparent",
    borderColor: "#467FCF",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-6 col-md-3">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="">First link</a>
                    </li>
                    <li>
                      <a href="">Second link</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="">Third link</a>
                    </li>
                    <li>
                      <a href="">Fourth link</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="">Fifth link</a>
                    </li>
                    <li>
                      <a href="">Sixth link</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="">Other link</a>
                    </li>
                    <li>
                      <a href="">Last link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              SEG EDUCATIONAL GROUP PRIVATE LIMITED <br />
              New Delhi 110019
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-auto ml-lg-auto">
              <div className="row align-items-center">
                <div className="col-auto">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      <a href="">Documentation</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div className="col-auto">
                  <a
                    className="btn btn-outline-primary btn-sm"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              Copyright © 2024 <a href="">SEG EDU GROUP</a>. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;