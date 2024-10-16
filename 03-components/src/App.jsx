import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContenet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import Data from './Data';
import Section from './components/Section';

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
