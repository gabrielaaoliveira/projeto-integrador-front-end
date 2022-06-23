import './Menu.css';

const Menu = function() {
    return (
        <nav className="Menu">
            <a className="MenuItem" href="">Pacientes</a>
            <a className="MenuItem" href="">Artigos</a>
            <a className="MenuItem" href="">Pages</a>
            <a className="MenuItem" href="">Blog</a>
            <a className="MenuItem" href="">Contact Us</a>
        </nav>
    );
};

export default Menu;
