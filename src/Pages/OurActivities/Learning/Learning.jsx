import React from "react";
import "./Learning.css";
import { Link } from "react-router-dom";
import img from "../../../assets/area.png";
const Learning = () => {
  return (
    <div className="investment-container">
      {/* <h1>What We Do</h1> */}
      <div className="learning">
        <div className="learning-des">
          <h2>For Everyone</h2>
          <p>
            EquiDeFi® is an investing portal that breaks down barriers to
            private investing. We educate with tools for investor choice and
            education. We offer a marketplace of ideas and links to services
            where business loans, media relations, financial services, transfer
            agent, legal, accounting and audit connections are made.
          </p>
          <Link className="learning-btn">Start Learning</Link>
        </div>
        <div className="learning-img">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Learning;
