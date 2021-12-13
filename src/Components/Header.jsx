import React from 'react';
import { Link } from 'react-router-dom';
import gitHub from '../imagens/github.png';
import cv from '../imagens/cv.png';
import linkedin from '../imagens/linkedin-logo.png';

class Header extends React.Component {
  render() {
    return(
      <div>
        <header className="d-flex justify-content-around">
          <div>
            <h1>Gustavo</h1>
          </div>
          <div>
            <Link to="/Sobre" className="p-2 border border-primary"> Sobre </Link>
            <Link to="Projects" className="p-2 ms-2 border border-primary">Projetos</Link>
          </div>
          <div>
            <a className="border-start-2" href="https://github.com/GustavoSFer" target="_blank" rel="noopener noreferrer">
              <img src={gitHub} alt="" />
            </a>
            <a className="ms-2" href="https://www.linkedin.com/in/gustavo-dos-santos-fernandes/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={cv} alt="" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;