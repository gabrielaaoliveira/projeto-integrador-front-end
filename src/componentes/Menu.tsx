import './Menu.css';
import './CampoBusca';

const Menu = function() {
    return (
        <nav className="Menu">
            <a className="MenuItem" href="">Mapa mental</a>
            <a className="MenuItem" href="/autoajuda">Auto-ajuda</a>
            <a className="MenuItem" href="">Psicólogos</a>
            <a className="MenuItem" href="">Fale Conosco</a>
          
        </nav>
    );
};

export default Menu;
