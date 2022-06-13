import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TelaHome from './telas/TelaHome';
import TelaLogin from './telas/TelaLogin';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/login" element={<TelaLogin />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
