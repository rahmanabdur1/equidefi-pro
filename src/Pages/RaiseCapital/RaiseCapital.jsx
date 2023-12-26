import React from "react";
import "./RaiseCapital.css";
import { Link } from "react-router-dom";
import img1 from '../../assets/private-placement/private1.jpg'
import img2 from '../../assets/private-placement/private2.jpg'

const RaiseCapital = () => {
  return (
    <div className="raisecapital-container">
      <div className="raisecapital-infos">
        <h2>Raise Capital</h2>
        <p>
          EquiDeFi® is the go to solution to launch, manage, fund and close
          private offerings.
        </p>
        <p>
          EquiDeFi® also helps you launch webinars, hold virtual meetings, and
          communicate with investors, one at a time or by specific offerings.
        </p>
        <Link className="start-issuers">Schedule Your Demo</Link>
      </div>

      <div className="raisecapital-lists">
        <div className="raisecapital-list">Activate account</div>
        <div className="triangle-down"></div>

        <div className="raisecapital-list">Build Your Term Sheet</div>
        <div className="triangle-down"></div>
        <div className="raisecapital-list">
          <p>Upload Your Documents</p>
          <p>(we will assist in setting up DocuSign to your needs)</p>
        </div>
        <div className="triangle-down"></div>

        <div className="raisecapital-list">
          <p>Provide Your Offering Materials </p>
          <p>(PPM, Offering Circular, SEC filings, Risk Factors) </p>
        </div>
        <div className="triangle-down"></div>

        <div className="raisecapital-list">
          <p>Add Investors To Receive Your</p>
          <p>Personalized Message</p>
        </div>
        <div className="triangle-down"></div>

        <div className="raisecapital-list">
          Hit Launch and EquiDeFi® Does The Rest!
        </div>
      </div>

      {/* privateplacement */}
      <div className="private-placementss ">
        <div className="private_placements-infos">
          <h2>How EquiDeFi® Makes Private Placements Simple</h2>
          <p>
            EquiDeFi®’s platform allows issuers to easily manage private
            investment opportunities and investors to quickly access and invest
            in those opportunities.{" "}
          </p>
        </div>
        <div>
          <div className="private-placementt">
        <div className="private_placement-img">  <img  src={img1}  alt="private_placement"/></div>
            <div className="private_placement-in">
              <h3>Who Are You?</h3>
              <p>
                If you’re a public company, you’re in luck! We utilize the SEC’s
                API to gather your company’s data dynamically. Your company
                profile is created in seconds… not minutes or hours. Private
                companies benefit from a customized workflow with few manual
                entries.
              </p>
            </div>
          </div>

          <div className='private-placementt'>
          <div className="private_placement-in">
              <h3>Who Are You?</h3>
              <p>
                If you’re a public company, you’re in luck! We utilize the SEC’s
                API to gather your company’s data dynamically. Your company
                profile is created in seconds… not minutes or hours. Private
                companies benefit from a customized workflow with few manual
                entries.
              </p>
            </div>
            <div className="private_placement-img">  <img  src={img2}  alt="private_placement"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseCapital;
