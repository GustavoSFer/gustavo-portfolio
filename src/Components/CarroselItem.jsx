import React, { useContext, useRef } from "react";
import myContext from "../ContextAPI/MyContext";
import '../Style/carousel.css';

function CarroselItem() {
  const { data } = useContext(myContext)
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if(!data || !data.length) return null;

  return(
    <div className="container">
      {console.log(data)}
      <div className="carousel" ref={ carousel }>
        {data.map((item) => (
          <div className="item text-center" key={item.id}>
            <div className="image">
              <img src={item.img} alt={item.nameProject} />
            </div>
            <div className="info">
              <h5 className="text-center mt-3 mb-0">Projeto: </h5>
              <span className="name" >{item.nameProject}</span>
              <h5 className="text-center mt-3 mb-0">Descrição do projeto</h5>
              <span className="descricao" >{item.description}</span>
            </div>
            <a
              href={item.URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Visitar projeto
            </a>
          </div>
        ))}

      </div>
      <div className="buttons">
          <button onClick={ handleLeftClick } className="buttonLeft"></button>
          <button onClick={ handleRightClick } className="buttonRight"></button>
      </div>
    </div>
  );

}

export default CarroselItem;
