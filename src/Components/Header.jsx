import React from 'react';
import '../Style/header.css';

function Header() {
  return(
    <div className="text-center bg-dark p-3">
      <h1 className="fw-bold text-color">Gustavo Fernandes</h1>
      <div className="p-3">
        <a href="#Sobre" className="m-2 text-decoration-none text-color">sobre Mim</a>
        <a href="#Habilidades"className="m-2 text-decoration-none text-color">Habilidades</a>
        <a href="Projetos"className="m-2 text-decoration-none text-color">Projetos</a>
      </div>
    </div>
  );
}

export default Header;