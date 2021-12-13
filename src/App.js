import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Portfolio /> } />
      <Route path="/Sobre" element={ <Sobre /> } />
      <Route path="Projects" element={ <Projects /> } />
    </Routes>
  );
}

export default App;
