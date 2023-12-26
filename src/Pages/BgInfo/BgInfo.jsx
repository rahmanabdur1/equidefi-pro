import React, { useEffect, useState } from "react";
import "./BgInfo.css";
import logo from "../../assets/images (1).jpeg";
import { Link } from "react-router-dom";

const BgInfo = () => {
  const [translateY, setTranslateY] = useState(0);

useEffect(() => {
  const handleResize = () => {
    const newImageY = window.innerWidth < 660 ? Math.max(80, 660 - window.innerWidth) : 0;
    console.log(newImageY,'o')
    setTranslateY(newImageY);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <div>
      <div className="fixed-buttons">
        <button className="fixed-button1">Invest</button>
        <button className="fixed-button2">Raise Capital</button>
      </div>
      <div className="bg">
        <div className="bgInfo">
          <div className="info-title">
            <h3>Simply Private Investing</h3>
            <h4>Reaching New Heights in Private Finance</h4>
          </div>
          <div className="info-des">
            <p>
              Welcome to EquiDeFi® – software to launch, manage, fund and close private offerings.
            </p>
            <p>
              Whether you are an issuer seeking to sell securities or an investor seeking to invest, register for our free demo now and unlock your free account.
            </p>
          </div>      
           <Link className="schedule" to="/schedule">
              Schedule Your Demo
            </Link>
        </div>
        <div className="bgImg"  >
          <img 
           style={{ transform: `translateY(${translateY}px)` }}
          src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BgInfo;
