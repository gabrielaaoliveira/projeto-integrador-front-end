import gif from './gif.gif';
import Cabecalho from './Cabecalho';
import './Login.css';
import Tela from './Tela';

const Login = function() {
    return (
        <Tela>
          
            <form className="login">
                <h1>Login</h1>
                <input type={"text"} placeholder="Seu E-mail" />
                <br></br>
                <input type={"password"} placeholder="Sua senha" />
                <br></br>
                <button>Entrar</button>
            </form>
        </Tela>
    
    );
};

export default Login;