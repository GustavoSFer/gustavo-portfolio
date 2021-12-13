import React from 'react';
import data from '../data';

class Projects extends React.Component {
  render() {
    return (
      <main>
        {data.map((item) => (
          <div key={ item.id }> 
            <div className="border border-primary">
              <a href={item.URL} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt="imagem do projeto" />
              </a>
            </div>
            <div>
              <p>{item.nameProject}</p>
              <p>{item.descripion}</p>
            </div>
          </div>))
        }
      </main>
    );
  }
}

export default Projects;
