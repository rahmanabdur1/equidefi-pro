import React from "react";
import "./MarketPlace.css";
import { Link } from "react-router-dom";

// marketData.js

const marketData = {
  marketplace: {
    title: "Financial Printer",
    content:
      "Our referrals for EDGARizing and filing reports with the SEC, including registration statements, proxies, ownership, periodic and current reporting, allows users to more closely manage costs through fixed annual fees for all SEC filings.",
  },
  investorRelations: {
    title: "Investor Relations",
    content:
      "We maintain strong relationships with investor relations and public relations firms that are seeking new clients and may be perfect for you. Helping you get the word out about your business or stock symbol is an integral part of what we do.",
  },
  financialPrinter: {
    title: "Business Loans",
    content:
      "If you maintain an active issuer account on EquiDeFi.com, and even if you have not yet launched a private offering, you can receive business loan offers from independent non-bank lenders. Subscribing for introductions to short-term and long-term lenders is required.",
  },
};

const MarketPlace = () => {
  return (
    <div>
      <div className="marketplace-container">
        <div className="marketplace-info">
          <h2>Marketplace</h2>
          <p>
            EquiDeFi®’s marketplace offers valuable opportunities for public and
            private issuers, from business lending to investor relations service
            providers.
          </p>
        </div>
      </div>
      <div className="marketplace">
        <div className="marketplace-items">
          {Object.keys(marketData).map((key) => (
            <div className="marketplace-item" key={key}>
              <h3>{marketData[key].title}</h3>
              <p>{marketData[key].content}</p>
              <Link to="">Get Access</Link>
            </div>
          ))}
        </div>
        <div className="transfer-info">
          <h3>Transfer Agent</h3>
          <p>
            We offer budget conscious public and private companies discounted
            rates from our SEC registered transfer agent. We oversee your cap
            table and handle virtual meetings, dividends, escrow and closings. A
            transfer agent is required for all publicly traded companies and
            most Reg A companies. We help transition private companies that plan
            to go public and list their shares on established markets, and work
            with crowdfund and blockchain-based trading platforms as well.
            EquiDeFi® clients receive a 15% discount and, if migrating from
            another transfer agent, up to a $5,000 credit for certain
            termination costs incurred. We are experts in assisting investors
            with moving their Rule 144 and registered shares into brokerage
            accounts and are recognized by nearly all brokerage firms for our
            superior service.
          </p>
          <Link to="">Get Access </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
