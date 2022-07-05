import { FunctionComponent, ReactNode } from 'react';
import Cabecalho from './Cabecalho';
import './Tela.css';

type Props = {
    children: ReactNode
};

const Tela: FunctionComponent<Props> = function(props) {
    return (
        <div className='Tela'>
            <Cabecalho />
            <main>
                {props.children}
            </main>
            
        </div>
    );
};

export default Tela;

