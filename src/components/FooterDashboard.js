import React from 'react';
import '../styles/FooterDashboard.css';
import dashboardLogo from '../imagens/logos/dcmLogoBlack.png';
import plmLogoBlack from '../imagens/logos/plmLogoblack.png';

const FooterDashboard  = () => {
  return (
    <footer>
      <div className='footerContent'>
        <img className='dashboardLogo' src={dashboardLogo} alt='Dashboard Logo' />
        <img className='plmLogoBlack' src={plmLogoBlack} alt='Logo' />
      </div>
    </footer>
  );
};

export default FooterDashboard;