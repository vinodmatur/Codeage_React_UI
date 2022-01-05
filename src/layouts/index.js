import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Routes from '../routes';

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const onToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      <Header onToggleSidebar={onToggleSidebar} showSidebar={!showSidebar} />
      <div className={showSidebar ? 'mainWrapper active' : 'mainWrapper'}>
        <Sidebar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}
