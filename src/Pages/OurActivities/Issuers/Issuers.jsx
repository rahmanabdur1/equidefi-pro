import React from "react";
import "./Issuers.css";
import { Link } from "react-router-dom";
import img from "../../../assets/verified.png";
const Issuers = () => {
  return (
    <div className="investment-container">
      {/* <h1>What We Do</h1> */}
      <div className="issuers">
        <div className="issuers-des">
          <h2>For Issuers</h2>
          <p>
            We built the definitive software suite for issuers to confidentially
            offer, fund, manage, close, instruct and report. We track all
            offerings from start to finish in concise easy to navigate
            dashboards designed with company personnel in mind.
          </p>
          <Link className="start-issuers">Raise Capital</Link>
        </div>
        <div className="issuers-img">
          <img src={img}  alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Issuers;
