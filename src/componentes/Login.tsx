import Cabecalho from './Cabecalho';
import './Login.css';

const Login = function() {
    return (
        <main className="login">
        <h1>Login</h1>
        <input type={"text"} placeholder="Seu E-mail" />
        <br></br>
        <input type={"password"} placeholder="Sua senha" />
        <br></br>
        <button>Entrar</button>
         <p><a href="formulario.html">Não tem uma conta?Crie agora </a> </p>
    </main>
    );
};

export default Login;