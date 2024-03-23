import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Compras from './pages/Compras';
import Servicos from './pages/Servicos';
import Perfil from './pages/Perfil';
import ContaCriada from './pages/ContaCriada';
import CadastroPet from './pages/CadastroPet';
import ContaPetCriada from './pages/ContaPetCriada';
import Servico2 from './pages/Servico2';
import Servico3 from './pages/Servico3';
import Confirmacao from './pages/Confirmacao';
import Promocoes from './pages/Promocoes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/compras" exact Component={Compras}/>
        <Route path="/servicos" exact Component={Servicos}/>
        <Route path="/perfil" exact Component={Perfil}/>
        <Route path="/contaCriada" exact Component={ContaCriada}/>
        <Route path="/cadastroPet" exact Component={CadastroPet}/>
        <Route path="/contaPetCriada" exact Component={ContaPetCriada}/>
        <Route path="/servico-end" exact Component={Servico2}/>
        <Route path="/servico-final" exact Component={Servico3}/>
        <Route path="/confirmacao" exact Component={Confirmacao}/>
        <Route path="/promocoes" exact Component={Promocoes}/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

