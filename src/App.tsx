import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaHome from './telas/TelaHome';
import TelaPaciente from './telas/TelaPaciente';
import TelaAutoajuda from './telas/TelaAutoajuda';
import Mapa from './telas/mapamental';
import Menu from './componentes/Menu';
import Telainicial from './componentes/Telainicial';
import Login from './componentes/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/paciente" element={<TelaPaciente />} />
            <Route path="/autoajuda" element={<TelaAutoajuda/>} />
            <Route path="/mapa-mental" element={<Mapa />} />
            <Route path="/Tela" element={<Telainicial />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
