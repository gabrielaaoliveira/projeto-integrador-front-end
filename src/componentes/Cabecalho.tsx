import logotipoImage from './logotipo.jpeg';
import './Cabecalho.css';

const Cabecalho = function () {
    return (
      <header className='Cabecalho'>
        <img src={logotipoImage} alt="" />
      </header>
      
    );
  };
  
  export default Cabecalho;