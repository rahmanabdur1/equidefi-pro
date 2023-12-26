import React from "react";
import "./investor.css";
import { Link } from "react-router-dom";
import img from "../../../assets/mobile.png";

const InvesTor = () => {
  return (
    <div className="investment-container">
      {/* <h1>What We Do</h1> */}
      <div className="investor">
        <div className="investor-img">
          <img src={img} alt="img" />
        </div>
        <div className="investor-des">
          <h2>For Investors</h2>
          <p>
            We built software investors use to securely access their records.
            Our investor dashboard navigates through an unlimited number of
            deals with ready access to executed documents, payment records and
            completed offerings. Secure legal opinions, restrictive legend
            removal, broker transfers, and tax records with ease.
          </p>
          <Link className="raise-capital">Start Investing</Link>
        </div>
      </div>
    </div>
  );
};

export default InvesTor;
