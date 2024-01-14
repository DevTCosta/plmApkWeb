import React, { useState, useEffect } from 'react';
import widexLogo from '../imagens/logos/widex.png';
import dcmLogo from '../imagens/logos/dcmLogo.png';
import searchIcon from '../imagens/icons/searchIcon.png';
import logoutIcon from '../imagens/icons/configLogout.png';
import userIcon from '../imagens/icons/userIcon.png';
import '../styles/Header.css';

const Header = ({ username, loggedIn }) => {
  const [logo, setLogo] = useState('');
  const [greeting, setGreeting] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [userOffice, setUserOffice] = useState('');

  useEffect(() => {
    if (loggedIn) {
      setLogo(getLogoByUsername(username));
      setGreeting(`Olá, ${getNomeByUsuario(username)}`);
      setBackgroundColor(getBgcolor(username));
      setUserOffice(getUserOffice(username));
    } else {
      setLogo('');
      setGreeting('');
      setBackgroundColor('');
      setUserOffice('');
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

  const getUserOffice = (username) => {
    if (username === 'widex') {
      return 'Marketing e Vendas';
    } else if (username === 'hp') {
      return 'Marketing';
    } else {
      return '';
    }
  };

  const getNomeByUsuario = (username) => {
    if (username === 'widex') {
      return 'Joao Carvalho';
    } else if (username === 'hp') {
      return 'Sonia';
    } else {
      return '';
    }
  };
  return (
    <header className='header' style={{ backgroundColor }}>
      <img className='plmLogoBlack' src={logo} alt='Logo' />
      <div class="userOffice">
      <img className='userIcon' src={userIcon} alt='Search' />
        <div class="textUserOffice">
          <h1 className='helloUser'>{greeting}</h1>
          <p className='userOffice' >{userOffice}</p>
        </div>
      </div>
      <div class="inputSearch">
        <img className='searchIcon' src={searchIcon} alt='Search' />
        <input className='searchBar' placeholder='SEARCH' ></input>
      </div>
      <img className='logoutIcon' src={logoutIcon} alt='Search' />
    </header>
  );
};

export default Header;
