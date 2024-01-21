import React from 'react';
import ReactPlayer from 'react-player';
import { createRoot } from 'react-dom/client';

const handlePlayVideo = (videoId) => {
  // Gera o URL completo do vídeo
  const videoUrl = `http://localhost:3001/api/videos/${videoId}`;

  // Cria um elemento div para conter o componente ReactPlayer
  const playerContainer = document.createElement('div');
  playerContainer.style.position = 'fixed';
  playerContainer.style.top = '50px';
  playerContainer.style.left = '50px';
  playerContainer.className = 'video-container'; // Adiciona uma classe para estilização

  // Renderiza o componente ReactPlayer dentro do elemento div
  const root = createRoot(playerContainer);
  root.render(<ReactPlayer url={videoUrl} controls />);

  // Adiciona um botão de fechar
  const closeButton = document.createElement('button');
  closeButton.innerText = 'x';
  closeButton.className = 'close-button'; // Adiciona uma classe para estilização
  closeButton.addEventListener('click', () => {
    // Remove o elemento do player e o botão quando clicado
    document.body.removeChild(playerContainer);
    document.body.removeChild(closeButton);
  });

  // Adiciona o elemento div (com o componente ReactPlayer) ao corpo do documento
  document.body.appendChild(playerContainer);

  // Adiciona o botão de fechar ao corpo do documento
  document.body.appendChild(closeButton);
};

export default handlePlayVideo;


