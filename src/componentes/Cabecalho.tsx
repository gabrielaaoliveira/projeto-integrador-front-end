import logotipoImage from './logotipo.jpeg';
import './App.css';

const Cabecalho = function () {
    return (
      <header>
          Cabeçalho
          <img src={logotipoImage} alt="" />
        </header>

    );
  };
  
  export default Cabecalho;