import React from "react";
import "./Invest.css";
import { Link } from "react-router-dom";
import Kyctoken from "./Kyctoken/Kyctoken";

const Invest = () => {
  return (
    <div className="invest-container">
      {/* invest */}
      <div className="invest-content">
      <h2>Invest</h2>
        <p>
          Welcome to EquiDeFi® – software to launch, manage, fund and close
          private offerings.
        </p>
        <p>
          If you’re looking to join our accredited investor community for future
          deals, join our waitlist now.
        </p>
        <Link>Get Access</Link>
      </div>

      <div className="investor-container">
        <h2 className="investor-who_its_for">Who It's For</h2>
        <div className="investor-content">
          <div className="about-investor">
            <h5>Existing Investors</h5>
            <p>
              Existing investors looking for a simplified private placement
              investment workflow.
            </p>
          </div>
          <div className="about-investor">
            <h5>New Investors</h5>
            <p>New investors wanting to find new investment opportunities.</p>
          </div>
        </div>
      </div>
<Kyctoken/>
    </div>
  );
};

export default Invest;
