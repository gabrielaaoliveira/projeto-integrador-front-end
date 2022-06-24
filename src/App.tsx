import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaHome from './telas/TelaHome';
import Cabecalho from './componentes/Cabecalho';
import TelaPaciente from './telas/TelaPaciente';
import Autoajuda from './componentes/Autoajuda';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/paciente" element={<TelaPaciente />} />
            <Route path="/autoajuda" element={<Autoajuda/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
