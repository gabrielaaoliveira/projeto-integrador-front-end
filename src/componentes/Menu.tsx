import './Menu.css';
import './CampoBusca';
import { Link } from 'react-router-dom';

const Menu = function() {
    return (
        <nav className="Menu">
            <Link to='/mapa-mental' className="MenuItem">Mapa mental</Link>
            <Link to='/pacientes' className="MenuItem">pacientes</Link>
            <Link to='/autoajuda' className="MenuItem">Auto-ajuda</Link>
            <Link to='/psicologos' className="MenuItem">psicologos</Link>
            <Link to='/login' className="MenuItem">login</Link>
          
            
          
        </nav>
    );
};

export default Menu;
