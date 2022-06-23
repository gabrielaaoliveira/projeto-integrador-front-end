import { FunctionComponent, ReactNode } from 'react';
import Cabecalho from './Cabecalho';

type Props = {
    children: ReactNode
};

const Tela: FunctionComponent<Props> = function(props) {
    return (
        <>
            <Cabecalho />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Tela;

