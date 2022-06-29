import logotipoImage from './logotipo.jpeg';
import './Cabecalho.css';
import Menu from './Menu';
import CampoBusca from './CampoBusca';

const Cabecalho = function () {
    return (
      <header className='Cabecalho'>
        <a href="" className='Logotipo'>
          <img src={logotipoImage} alt="" />
        </a>
        <Menu />
        <CampoBusca/>
      </header>
      
    );
  };
  
  export default Cabecalho;