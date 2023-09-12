import React from 'react';
import './BgInfo.css';
import logo from '../../assets/images.jpeg';
import { Link } from 'react-router-dom';

const BgInfo = () => {
    return (
      <div>
        <div className="fixed-buttons">
                    <button className="fixed-button1">Invest</button>
                    <button className="fixed-button2">Raise Capital</button>
                </div>
          <div className='bg'>
            <div className='bgInfo'>
                <h3>Simply Private Investing</h3>
                <h4>Reaching New Heights in Private Finance</h4>
                <p>Welcome to EquiDeFi® – software to launch, manage, fund and close private offerings.</p>
                <p>Whether you are an issuer seeking to sell securities or an investor seeking to invest, register for our free demo now and unlock your free account.</p>
                <Link className='schedule' to='/schedule'>Schedule Your Demo</Link>
            </div>
            <div className='bgImg'>
                <img src={logo} alt="" />
            </div>
        </div>
      </div>
    );
};

export default BgInfo;