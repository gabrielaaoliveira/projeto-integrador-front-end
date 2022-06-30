import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaHome from './telas/TelaHome';
import TelaPaciente from './telas/TelaPaciente';
import TelaAutoajuda from './telas/TelaAutoajuda';
import Mapa from './telas/mapamental';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/paciente" element={<TelaPaciente />} />
            <Route path="/autoajuda" element={<TelaAutoajuda/>} />
            <Route path="/mapa-mental" element={<Mapa />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
