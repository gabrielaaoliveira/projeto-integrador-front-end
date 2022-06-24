import './Menu.css';

const Menu = function() {
    return (
        <nav className="Menu">
            <a className="MenuItem" href="">Pacientes</a>
            <a className="MenuItem" href="">Artigos</a>
            <a className="MenuItem" href="">Auto-ajuda</a>
            <a className="MenuItem" href="">Psicólogos</a>
            <a className="MenuItem" href="">Fale Conosco</a>
        </nav>
    );
};

export default Menu;
