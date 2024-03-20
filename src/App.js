import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Compras from './pages/Compras';
import Servicos from './pages/Servicos';
import Perfil from './pages/Perfil';
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
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

