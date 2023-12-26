import React from "react";
import "./OurActivities.css";
import Issuers from "./Issuers/Issuers";
import InvesTor from "./InvesTor/InvesTor";
import Learning from "./Learning/Learning";
import PrivatePlacement from "./PrivatePlacement/PrivatePlacement";
import MakeingInvestment from "./MakeingInvestment/MakeingInvestment";

const OurActivities = () => {
  return (
    <div className="container">
      <div className="wedo-text">
      <h2>What We Do</h2>
      </div>
      <Issuers />
      <InvesTor />
      <Learning />
      <PrivatePlacement />
      <MakeingInvestment />
    </div>
  );
};

export default OurActivities;
