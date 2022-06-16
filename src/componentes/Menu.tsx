import './Menuprinc.css';

const Menu = function() {
    return (

            <main className="col-100 menu-urls">
        <div className="header-2">
            <div className="menu">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Service</a>
                    </li>
                    <li>
                        <a href="">Pages</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="busca">
                <input placeholder="Search Something" type="text" />
            </div>
        </div>
    </main>
    );
};

export default Menu;
