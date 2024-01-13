import React from 'react';
import '../styles/Footer.css';
import sloganImg from '../imagens/logos/slogan.png' ;
import plmLogoBlack from '../imagens/logos/plmLogoblack.png';

const Footer = () => {
  return (
    <footer>
      <div className='footerContent'>
        <img className='sloganImg' src= {sloganImg} alt='Logo' />
        <img className='plmLogoBlack' src= {plmLogoBlack} alt='Logo' />
      </div>
    </footer>
  );
};

export default Footer;