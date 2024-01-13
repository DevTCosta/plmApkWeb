import React, { useState } from 'react';
import FooterDashboard from './FooterDashboard';
import Header from './Header';
import '../styles/DashboardPage.css';

const DashboardPage = ({ loggedIn, username }) => {
  console.log('Username no DashboardPage:', username);

  return (
    <div className='backgroundDashboard'>
      <Header username={username} loggedIn={loggedIn} />
      <FooterDashboard />
    </div>
  );
};

export default DashboardPage;
