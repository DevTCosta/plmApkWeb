import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ username, loggedIn }) => {
  const [logo, setLogo] = useState('');
  const [greeting, setGreeting] = useState('');
  console.log('Username no Header:', username);

  useEffect(() => {
    if (loggedIn) {
      setLogo(getLogoByUsername(username));
      setGreeting(`Olá, ${getNomeByUsuario(username)}!`);
    } else {
      setLogo('');
      setGreeting('');
    }
  }, [loggedIn, username]);

  const getLogoByUsername = (username) => {
    return username === 'widex' ? 'caminho/do/logo_widex.png' : 'caminho/do/logo_hp.png';
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
    <header className='header'>
      <img className='plmLogoBlack' src={logo} alt='Logo' />
      <h1>{greeting}</h1>
    </header>
  );
};

export default Header;
