import React, { useContext } from "react";
import myContext from "../ContextAPI/MyContext";

function CarroselItem() {
  const { data } = useContext(myContext)
  return (
    <div className="m-5">
      {data.map((item) => (
         <div key={item.id} className="carousel-item active">
         <img src={item.img} className="d-block w-100 h-100 tamanho-project" alt="..." />
         <div className="carousel-caption d-none d-md-block">
           <h5>{item.nameProject}</h5>
           <p>{item.description}</p>
         </div>
       </div>
      ))}
    </div>
  );
}

export default CarroselItem;
