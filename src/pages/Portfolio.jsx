import React from 'react';
import Header from '../Components/Header';
import Sobre from './Sobre';
import Projetos from './Projetos';
import Footer from '../Components/Footer';
import Skills from './Skills';
import '../App.css';

function Portfolio() {
  return(
    <div>
      <Header />
      <Sobre />
      <Projetos />
      <Skills />
      <Footer />
    </div>
  );
}

export default Portfolio;
