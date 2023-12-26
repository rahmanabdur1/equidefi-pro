import React from 'react';
import './Kyctoken.css'
import kyc from '../../../assets/kyct-coin.svg'

const Kyctoken = () => {

    return (        
      <div className="token-container">
     <div className='token-content'>
     <img src={kyc} alt="kyc" width='200px' />
      <div className="token-info">
         <h5>KYC Token</h5>
         <p>
          KYCT provides a single source of authentication after a single KYC
          event. This expedites all further investment opportunities and
          avoids the lengthy KYC processes that the investor would typically
           go through.
        </p>
        <p>
          This reduces the onboarding friction for issuers looking to obtain
          investors, while simultaneously reducing the friction for investors
           when looking to participate in a new offering from any issuer on our
          platform.
        </p>
        <button>Learn More</button>
      </div> 
     </div>
    </div> 
    );
};

export default Kyctoken;