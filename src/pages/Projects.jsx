import React from 'react';
import ButtonCarrosel from '../Components/ButtonCarrosel';
import CarroselItem from '../Components/CarroselItem';
import ButtonPrevios from '../Components/ButtonPrevios';

function Projects() {
  return(
    <div className="bg-secondary text-white">
      <div className="tamanho-project">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <ButtonCarrosel />
          </div>
          <div className="carousel-inner">
          <CarroselItem />
          </div>
          <ButtonPrevios />
        </div>
      </div>
     
  </div>
  );
}

export default Projects;
