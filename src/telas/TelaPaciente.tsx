import Tela from "../componentes/Tela";
import "./TelaAutoajuda.css";

import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a3 from "../img/a3.png";
import a4 from "../img/a4.png";
import a5 from "../img/a5.png";
import a6 from "../img/a6.png";


const TelaPaciente = function() {
    return (
        <Tela>
             <div className='TelaMapa'>
                <h1>Conheça nossos profissionais:</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a3} alt= "" />
                        </div>
                        <div className='Titulo'>
                        < h4>Gabriela Vasconcelos</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Psicóloga clínica -
                                48652-00 / CRP 
                                Duração: 50 minutos Sessão R$75,00
                                ______________________________

                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a6} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Ana Souza</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicóloga clínica -
                                19582-00 / CRP 
                                Duração: 50 minutos Sessão R$85,00
                                ______________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a4} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Maria Clara Fernandes</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicóloga clínica -
                                25842-00 / CRP 
                                Duração: 50 minutos Sessão R$95,00
                                ______________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a1} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>José Castro</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                12282-00 / CRP 
                                Duração: 50 minutos Sessão R$75,00
                                ______________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a2} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Rodrigo Silva</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                58942-00 / CRP 
                                Duração: 50 minutos Sessão R$85,00
                                ______________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={a5} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Isaque Mendes</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                32652-00 / CRP 
                                Duração: 50 minutos Sessão R$95,00
                                ______________________________
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
    );
};

export default TelaPaciente;