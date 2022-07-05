import Tela from "../componentes/Tela";
import "./TelaAutoajuda.css";

const TelaPaciente = function() {
    return (
        <Tela>
             <div className='TelaMapa'>
                <h1>Conheça nossos profissionais:</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src="" alt= "" />
                        </div>
                        <div className='Titulo'>
                        < h4>Gabriela Vasconcelos</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Psicóloga clínica -
                                48652-00 / CRP 
                                Duração: 50 minutos - Sessão R$75,00
                                _________________________________________
                                
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src="" alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Ana Souza</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicóloga clínica -
                                19582-00 / CRP 
                                Duração: 50 minutos - Sessão R$85,00
                                _________________________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src="" alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Maria Clara Fernandes</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicóloga clínica -
                                25842-00 / CRP 
                                Duração: 50 minutos - Sessão R$95,00
                                _________________________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src='' alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>José Castro</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                12282-00 / CRP 
                                Duração: 50 minutos - Sessão R$75,00
                                _________________________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src="" alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Rodrigo Silva</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                58942-00 / CRP 
                                Duração: 50 minutos - Sessão R$85,00
                                _________________________________________
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src="" alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Isaque Mendes</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Psicólogo clínico -
                                32652-00 / CRP 
                                Duração: 50 minutos - Sessão R$95,00
                                _________________________________________
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
    );
};

export default TelaPaciente;