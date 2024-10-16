import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContenet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>

  );
};

export default App;
