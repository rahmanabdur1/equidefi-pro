import React from "react";
import "./MakeingInvestment .css";

import logo2 from "../../../assets/feature-icons-04.svg";
import logo3 from "../../../assets/feature-icons-05.svg";
import logo4 from "../../../assets/feature-icons-06.svg";
import logo5 from "../../../assets/feature-icons-07.svg";
import logo6 from "../../../assets/feature-icons-08.svg";

const MakeingInvestment = () => {
  return (
    <div className="investment-container">
      <div className="equiDeFi-engine">

      <div className="equidefi-img">
        <img   src={logo4} alt="img" />
        </div>
        <div className="equiDeFi-des">
          <h2>EquiDeFi® Compliance Engine</h2>
          <p>
            Say goodbye to complicated and incomplete documents. We build a
            simple online term sheet from the information about your offering.
            You upload your documents – subscription agreements, preferred
            stock, notes, warrants, SAFE, investor rights agreements. You add
            your offering materials – confidential offering circular or PPM,
            recent SEC filings, risk factors disclosures, projections, forecasts
            or valuations on which your investors will rely. You add investor
            emails and a confidential personalized message to invite investors.
            You hit “launch” and the software does the rest!
          </p>
        </div>
      </div>
      <div className="equiDeFi-engine">
        <div className="equiDeFi-des">
          <h2>EquiDeFi® Compliance Engine</h2>
          <p>
            Say goodbye to complicated and incomplete documents. We build a
            simple online term sheet from the information about your offering.
            You upload your documents – subscription agreements, preferred
            stock, notes, warrants, SAFE, investor rights agreements. You add
            your offering materials – confidential offering circular or PPM,
            recent SEC filings, risk factors disclosures, projections, forecasts
            or valuations on which your investors will rely. You add investor
            emails and a confidential personalized message to invite investors.
            You hit “launch” and the software does the rest!
          </p>
        </div>
      
        <div className="equidefi-img">
        <img   src={logo4} alt="img" />
        </div>
    
      </div>
    </div>
  );
};

export default MakeingInvestment;
