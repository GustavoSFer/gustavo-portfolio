import  React from 'react';
import pc from '../imagens/pc.png';

function Sobre() {
  return (
    <div className="row p-2 pt-5 bg-light text-dark bg-dark p-3">
      <div className="col-sm-6 text-color pt-4">
        <div className="text-center mb-4">
          <h1>Olá, eu sou o Gustavo.</h1>
        </div>
        <div className="fontFamily">
          <p>
          Sou uma pessoa apaixonado pela tecnologia e ver o que podemos fazer com ela. 
          </p>
          <p>
          Gosto de gerar novas ideias e desenvolver soluções viáveis para problemas amplamente relevantes.
          </p>
          <p>
          Atualmente estou estudando Desenvolvimento web pela escola <span className="fw-bolder">Trybe</span>. Mas antes disso começei a faculdade de Ciências da computação pela Universidade Anhembi Morumbi. Resolvi tranca-la para começar o curso na Trybe, mas pretendo retornar.
          </p>
          <p>
            Sempre em busca de novos desafios, aprendendo a cada dia em plataformas como Udemy, Digital Inovation One, Fundação Bradesco entre outros...
          </p>
        </div>
      </div>
      <div className="col-sm-6 text-center mt-4">
        <img src={pc} alt="" className=" img-fluid" />
      </div>
    </div>
  );
}

export default Sobre;
