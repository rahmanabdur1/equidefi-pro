import React from "react";
import "./PrivatePlacement.css";
import logo1 from "../../../assets/target-icons-01.svg";
import logo2 from "../../../assets/target-icons-02.svg";
import logo3 from "../../../assets/target-icons-03.svg";

const PrivatePlacement = () => {
  return (
    <div className="private-placement">
      <div className="private-info">
        <h2>Democratizing The World Of Private Placements</h2>
        <p>
          We demystify, democratize and decentralize private placements. For far
          too long private offerings have been restricted to institutions,
          professionals, and those friends and family with unique access. No
          longer. Once accredited status is confirmed using our simple online
          form, investors on EquiDeFi may review and invest in a multitude of
          deals for up to 90 days with a single certification. Issuers can find
          you and you can find them. Revolutionary!
        </p>
      </div>
      <div className="privateCarts">
        <div className="privateCart">
          <div className="logo1">
            <img src={logo1} />
          </div>
          <div className="issuersdes">
            <h4>Issuers</h4>
            <p>
              Private and publicly traded companies on NASDAQ, NYSE, OTC, and
              other U.S. exchanges.
            </p>
          </div>
        </div>
        <div className="privateCart">
          <div className="logo2">
            <img src={logo2} />
        </div>
          <div className="professionaldes">
            <h4>Professionals</h4>
            <p>
              Investment banks, corporate counsel, broker-dealers, escrow agents
              and transfer agents.
            </p>
          </div>
        </div>
        <div className="privateCart">
          <div className="logo3">
            <img src={logo3} />
          </div>
          <div className="investorsdes">
            <h4>Investors</h4>
            <p>
              Accredited investors, family offices, special purpose vehicles,
              and funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePlacement;
