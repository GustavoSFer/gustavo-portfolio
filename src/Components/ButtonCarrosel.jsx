import React, { useContext } from 'react';
import myContext from '../ContextAPI/MyContext';

function ButtonCarrosel() {
  const { data } = useContext(myContext)
  const tamanho = data.length;
  
  function btn() {
    tamanho.map((button, index) => (
      <button
        key={ index }
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label={ data.id }
      >  
      </button>
      ))
  }
  return (
    <div>
      dokshadfuihsuiofhoisdauhfoisad
      {tamanho > 0 && btn }
    </div>
  );
}

export default ButtonCarrosel;
