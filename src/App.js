import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderPortfolio from './ContextAPI/ProviderPortfolio';
import Skills from './pages/Skills';

function App() {
  return (
    <ProviderPortfolio>
      <Routes>
        <Route exact path="/" element={ <Portfolio /> } />
        <Route path="/Sobre" element={ <Sobre /> } />
        <Route path="/Projetos" element={ <Projetos /> } />
        <Route path="/Sills" element={ <Skills /> } />
      </Routes>
    </ProviderPortfolio>
  );
}

export default App;
