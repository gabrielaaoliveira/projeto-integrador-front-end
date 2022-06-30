import ansiedade from '../img/ansiedade.jpg';
import ansiedade2 from '../img/ansiedade2.jpg';
import ansiedade3 from "../img/ansiedade3.jpg";
import ansiedade4 from "../img/ansiedade4.jpg";
import ansiedade5 from "../img/ansiedade5.jpg";
import ansiedade6 from "../img/ansiedade6.jpg"
import Tela from "../componentes/Tela";
import "./TelaAutoajuda.css";

const TelaAutoajuda = function () {
    return (
        <Tela>
            <div className='TelaMapa'>
                <h1>Auto Ajuda</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade} alt= "" />
                        </div>
                        <div className='Titulo'>
                        < h4>"Como sair da crise de ansiedade?"</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Passar por um momento de crise não é nada fácil e ter um ente querido que tem estes episódios é tão difícil quanto. É importante conhecer formas de aliviar os sintomas e conseguir se acalmar. Apartir daqui segue dicas de como lidar com este momento tão delicado.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade2} alt='' />
                        </div>
                        <div className='Indice'>
                            <div className='Barra'>
                                <div className='Porcentagem' style={{width: '10%'}}></div>
                            </div>
                            <div className='Legenda'>10% de pessoas no Brasil</div>
                        </div>
                        <div className='Texto'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam maiores porro harum officiis eius repellat, id hic et quod fuga rerum iste? Non consequuntur sapiente vel corrupti. Nulla, optio.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade3} alt='' />
                        </div>
                        <div className='Indice'>
                            <div className='Barra'>
                                <div className='Porcentagem' style={{width: '10%'}}></div>
                            </div>
                            <div className='Legenda'>10% de pessoas no Brasil</div>
                        </div>
                        <div className='Texto'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam maiores porro harum officiis eius repellat, id hic et quod fuga rerum iste? Non consequuntur sapiente vel corrupti. Nulla, optio.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade4} alt='' />
                        </div>
                        <div className='Indice'>
                            <div className='Barra'>
                                <div className='Porcentagem' style={{width: '10%'}}></div>
                            </div>
                            <div className='Legenda'>10% de pessoas no Brasil</div>
                        </div>
                        <div className='Texto'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam maiores porro harum officiis eius repellat, id hic et quod fuga rerum iste? Non consequuntur sapiente vel corrupti. Nulla, optio.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade5} alt='' />
                        </div>
                        <div className='Indice'>
                            <div className='Barra'>
                                <div className='Porcentagem' style={{width: '10%'}}></div>
                            </div>
                            <div className='Legenda'>10% de pessoas no Brasil</div>
                        </div>
                        <div className='Texto'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam maiores porro harum officiis eius repellat, id hic et quod fuga rerum iste? Non consequuntur sapiente vel corrupti. Nulla, optio.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade6} alt='' />
                        </div>
                        <div className='Indice'>
                            <div className='Barra'>
                                <div className='Porcentagem' style={{width: '10%'}}></div>
                            </div>
                            <div className='Legenda'>10% de pessoas no Brasil</div>
                        </div>
                        <div className='Texto'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam maiores porro harum officiis eius repellat, id hic et quod fuga rerum iste? Non consequuntur sapiente vel corrupti. Nulla, optio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
     );
};

export default TelaAutoajuda;