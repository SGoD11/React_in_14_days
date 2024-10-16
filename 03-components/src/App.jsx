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
      {/* Map through Data and return MainContent components */}
      {Data.map((contents) => (
        <MainContent
          key={contents.id}
          imageUrl={contents.imageUrl}
          heading={contents.heading}
          cardText={contents.cardText}
          launchDate={contents.launchDate}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
