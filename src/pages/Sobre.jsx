import  React from 'react';
import pc from '../imagens/pc.png';
import '../Style/sobre.css';

function Sobre() {
  return (
    <div className="row bg-dark p-3 pt-5 width-pg" id="Sobre">
      <div className="col-sm-6 text-color pt-5 mb-5">
        <div className="text-center mb-4 font-text pt-5">
          <h1 className="pt-5">Olá, eu sou o Gustavo.</h1>
        </div>
        <div className="fontFamily font-text pt-4">
          <p>
            Sou uma pessoa apaixonado pela tecnologia!!!
          </p>
          <p>
            Gosto de gerar novas ideias e desenvolver soluções viáveis para problemas amplamente relevantes.
          </p>
          <p>
            Adoro ensinar pessoas e compartilhar conhecimentos, de forma que cada troca acrescenta um aprendizado para cada um de nós.
          </p>
          <p>
          Atualmente estou estudando Desenvolvimento web pela escola <span className="fw-bolder">Trybe</span>. Mas antes disso começei a faculdade de Ciências da computação pela Universidade Anhembi Morumbi. Resolvi tranca-la para começar o curso na Trybe, mas pretendo retornar.
          </p>
          <p>
            Sempre em busca de novos desafios, aprendendo a cada dia em plataformas como Udemy, Digital Inovation One, Fundação Bradesco entre outros...
          </p>
        </div>
      </div>
      <div className="col-sm-6 text-center mt-4 pt-5">
        <img src={pc} alt="" className=" img-fluid pt-5" />
      </div>
    </div>
  );
}

export default Sobre;
