import React, { useState, useEffect } from 'react';
import dcmLogoBlack from '../imagens/logos/dcmLogoBlack.png';
import plmLogoFooter from '../imagens/logos/plmLogoblack.png';
import uploadIcon from '../imagens/icons/uploadIcon.png';
import trashIcon from '../imagens/icons/trashIcon.png';
import Header from './Header';
import '../styles/DashboardPage.css';
import '../styles/Fonts.css';

const DashboardPage = ({ loggedIn, username }) => {
  const [backgroundColorbar, setBackgroundColor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
          try {
              if (loggedIn) {
                  const [mensagemResponse, videosResponse] = await Promise.all([
                      fetch('http://localhost:3001/api/mensagem'),
                      fetch('http://localhost:3001/api/videos/nomes-dos-videos')
                  ]);
  
                  if (!mensagemResponse.ok) {
                      throw new Error(`Erro ao buscar mensagem. Status: ${mensagemResponse.status}`);
                  }
                  const mensagemData = await mensagemResponse.json();
                  setMensagem(mensagemData.mensagem);
  
                  if (!videosResponse.ok) {
                      throw new Error(`Erro ao buscar informações dos vídeos. Status: ${videosResponse.status}`);
                  }
                  const videosData = await videosResponse.json();
                  setVideos(videosData.videos);
  
                  setBackgroundColor(getBgcolorBar(username));
              } else {
                  setBackgroundColor('');
              }
          } catch (error) {
              console.error('Erro ao buscar informações:', error.message);
          }
      };
  
      fetchData();
  }, [loggedIn, username]);
  

  const getBgcolorBar = (username) => {
    if (username === 'widex') {
      return '#818285';
    } else if (username === 'hp') {
      return '#f4a5608a';
    } else {
      return '';
    }
  };

  return (
    <div className='dashboardWrapper'>
      <Header username={username} loggedIn={loggedIn} />
      <div className='containerDashboard'>
        <div className='generalContainerDashboard'>
          <div className="generalBar" style={{ backgroundColor: backgroundColorbar }}>
            <p className="txtGeneralBar">Geral</p>
            <div class="iconsGeneral">
              <img className='uploadIcon' src={uploadIcon} alt='uploadIcon' />
              <img className='trashIcon' src={trashIcon} alt='trashIcon' />
            </div>
          </div>
          <div className='ingoGeneralContainer'>
                <div>
                  <p>Mensagem do servidor:</p>
                  <p>{mensagem}</p>
                </div>
                <div>
                  <p>Total de vídeos:</p>
                  <p>{videos}</p>
                </div>
          </div>
        </div>
        <div className="lojaHistoryContainer" >
          <div className='lojaContainer'>
          <div className="generalBar" style={{ backgroundColor: backgroundColorbar }}>
            <p className="txtGeneralBar">Loja</p>
            <div class="iconsGeneral">
              <img className='uploadIcon' src={uploadIcon} alt='uploadIcon' />
              <img className='trashIcon' src={trashIcon} alt='trashIcon' />
            </div>
          </div>
          </div>
          <div className='historyCotainer'>
          <div className="generalBar" style={{ backgroundColor: backgroundColorbar }}>
            <p className="txtGeneralBar">Histórico</p>
            <div class="iconsGeneral">
              <img className='uploadIcon' src={uploadIcon} alt='uploadIcon' />
              <img className='trashIcon' src={trashIcon} alt='trashIcon' />
            </div>
          </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='footerContent'>
          <img className='dcmLogoBlack' src={dcmLogoBlack} alt='Logo' />
          <img className='plmLogoFooter' src={plmLogoFooter} alt='Logo' />
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
