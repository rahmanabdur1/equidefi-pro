import React from 'react';
import './PrivatePlacement.css'
const PrivatePlacement = () => {
    return (
        <div className='privateContainer'>
            <div className='privateDetails'>
                <h1>Democratizing The World Of Private Placements</h1>
                <p>We demystify, democratize and decentralize private placements.   For far too long private offerings have been restricted to institutions, professionals, and those friends and family with unique access. No longer. Once accredited status is confirmed using our simple online form, investors on EquiDeFi may review and invest in a multitude of deals for up to 90 days with a single certification. Issuers can find you and you can find them.  Revolutionary!</p>
            </div>
            <div className='privateCarts'>
                <div className='privateCart'>
                    <h4>Issuers</h4>
                    <p>Private and publicly traded companies on NASDAQ, NYSE, OTC, and other U.S.
                        exchanges.</p>
                </div>
                <div className='privateCart'>
                    <h4>Professionals</h4>
                    <p>Investment banks, corporate counsel, broker-dealers, escrow agents and transfer agents.</p>
                </div>
                <div className='privateCart'>
                    <h4>Investors</h4>
                    <p>Accredited investors, family offices, special purpose vehicles, and funds.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivatePlacement;