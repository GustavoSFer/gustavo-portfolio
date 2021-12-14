import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderPortfolio from './ContextAPI/ProviderPortfolio';

function App() {
  return (
    <ProviderPortfolio>
      <Routes>
        <Route exact path="/" element={ <Portfolio /> } />
        <Route path="/Sobre" element={ <Sobre /> } />
      </Routes>
    </ProviderPortfolio>
  );
}

export default App;
