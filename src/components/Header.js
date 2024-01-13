import React, { useState, useEffect } from 'react';
import widexLogo from '../imagens/logos/widex.png';
import dcmLogo from '../imagens/logos/dcmLogo.png';
import '../styles/Header.css';

const Header = ({ username, loggedIn }) => {
  const [logo, setLogo] = useState('');
  const [greeting, setGreeting] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  console.log('Username no Header:', username);

  useEffect(() => {
    if (loggedIn) {
      setLogo(getLogoByUsername(username));
      setGreeting(`Olá, ${getNomeByUsuario(username)}!`);
      setBackgroundColor(getBgcolor(username));
    } else {
      setLogo('');
      setGreeting('');
      setBackgroundColor('');
    }
  }, [loggedIn, username]);

  const getBgcolor = (username) => {
    if (username === 'widex') {
      return '#1C1C1C';
    } else if (username === 'hp') {
      return '#F4A460';
    } else {
      return '';
    }
  };

  const getLogoByUsername = (username) => {
    if (username === 'widex') {
      return widexLogo;
    } else if (username === 'hp') {
      return dcmLogo;
    } else {
      return '';
    }
  };

  const getNomeByUsuario = (username) => {
    if (username === 'widex') {
      return 'Joao';
    } else if (username === 'hp') {
      return 'Sonia';
    } else {
      return '';
    }
  };

  return (
    <header className='header' style={{ backgroundColor }}>
      <img className='plmLogoBlack' src={logo} alt='Logo' />
      <h1>{greeting}</h1>
    </header>
  );
};

export default Header;
