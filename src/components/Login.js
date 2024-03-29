import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import dcmLogo from '../imagens/logos/dcmLogo.png';

import '../styles/Footer.css';
import sloganImg from '../imagens/logos/slogan.png' ;
import plmLogoBlack from '../imagens/logos/plmLogoblack.png';

const Login = ({ loggedIn, setLoggedIn, setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if ((usernameInput === 'widex' || usernameInput === 'hp') && (password === 'widex123' || password === 'hp123')) {
      setLoggedIn(true);
      setUsername(usernameInput);
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="containerLogin">
      <img className="dcmLogo" src={dcmLogo} alt="Logo" />
      <div className="inputUser">
        <input
          className='userInput'
          type="text"
          placeholder="User"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          className='userInput'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Link to="/dashboard">Ir para a Dashboard (simulação)</Link>
      <footer>
      <div className='footerContent'>
        <img className='sloganImg' src= {sloganImg} alt='Logo' />
        <img className='plmLogoBlack' src= {plmLogoBlack} alt='Logo' />
        </div>
      </footer>
    </div>
  );
};

export default Login;