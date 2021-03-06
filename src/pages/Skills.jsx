import React, { useState, useEffect } from 'react'
import '../Style/skills.css';
import html from '../imagens/html.png';

function Skills() {
  const HARD_SKILL = [
    'Linux', 'Git', 'HTML5','CSS3','JavaScript',
    'React', 'Redux','ContextAPI', 'BootStrap',
    'Docker', 'Node.Js', 'TypeScript', 'Express.Js', 'Sequelize',
    'MySQL', 'MondoDB',
    'Jest', 'Mocha', 'Chai', 'Sinon.Js',
    'Scrum','Kanban'
  ];
  const SOFT_SKILL = [
    'Inteligência Emocional','Organizado',
    'Comunicação','Colaboração',
    'Pensamento Crítico','Criatividade',
    'Liderança','Empatia',
    'Colaboração em times',
    'Gestão de tempo', 'Escuta ativa',
    'Flexibilidade e resiliência', 'Atitude',
    'Negociação', 'Autogestão', 'Motivação', 'Honestidade',
    'Aprender a aprender'
  ];

  const [skillState, setSkillState] = useState([])

  useEffect(() => {
    handleClickHard();
  }, [])
  
  const handleClickHard = () => {
    setSkillState(HARD_SKILL);
  }
  
  const handleClickSoft = () => {
    setSkillState(SOFT_SKILL);
  }

  return (
    <div className="container-skills" id="Habilidades">
      <div className="p-3 pt-5">
        <img src={ html } alt="imagem tag html" className="tag-html" />
      </div>
      <div className="row text-center">
        <h3 className="text-center text-white">
        Habilidades / Conhecimentos
        </h3>
        <div>
            <button
              onClick={ handleClickHard }
              className="btn btn-primary m-4 fw-bolder"
              id="hard skills"
            >
              Hard Skills
            </button>
            <button
              onClick={ handleClickSoft }
              className="btn btn-primary fw-bolder"
            >
              Soft Skills
            </button>
        </div>
          <ul className="row text-center d-flex justify-content-evenly cont">
            {
              skillState.map((item, index) => (
                <li
                  key={ index }
                  className="list-habilidades col-sm-3 d-flex justify-content-evenly font-text-skill"
                >
                  {item}
                </li>
              ))
            }
          </ul>

      </div>

    </div>
  );
}

export default Skills;
