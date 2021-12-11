import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sobre from './Sobre';
import Projects from './Projects';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sobre />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;