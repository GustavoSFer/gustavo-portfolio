import React from 'react';
import Header from '../Components/Header';
import Sobre from './Sobre';
import CarroselItem from '../Components/CarroselItem';
import Footer from '../Components/Footer';
import Skills from './Skills';
import '../App.css';

function Portfolio() {
  return(
    <div>
      <Header />
      <Sobre />
      <CarroselItem />
      <Skills />
      <Footer />
    </div>
  );
}

export default Portfolio;
