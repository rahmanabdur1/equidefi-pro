import React from "react";
import logo1 from "../../../assets/partnerships/anthonyllc.jpg";
import logo2 from "../../../assets/partnerships/atem-group.jpg";
import logo3 from "../../../assets/partnerships/Artboard-17.jpg";
import logo4 from "../../../assets/partnerships/digital-offering.jpg";
import logo5 from "../../../assets/partnerships/equity.jpg";
import logo6 from "../../../assets/partnerships/GCN.jpg";
import logo7 from "../../../assets/partnerships/irth.jpg";
import logo8 from "../../../assets/partnerships/neetable.jpg";
import logo9 from "../../../assets/partnerships/solulab.jpg";

import "./partnerships.css";
const Partnerships = () => {
  return (
    <div className="containers">
      <div className="partnership">
        <div className="partnership-info">
          <h2>Strategic Partnerships</h2>
          <p>
            We work with these strategic partners to ensure a great experience
            for both issuers and investors:
          </p>
        </div>
        <div className=" grid">
          <div>
            {" "}
            <img src={logo1} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo2} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo3} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo4} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo5} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo6} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo7} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo8} alt="/" />
          </div>
          <div>
            {" "}
            <img src={logo9} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
