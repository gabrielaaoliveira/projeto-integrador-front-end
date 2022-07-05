import ansiedade from '../img/ansiedade.jpg';
import ansiedade2 from '../img/ansiedade2.jpg';
import ansiedade3 from "../img/ansiedade3.jpg";
import ansiedade4 from "../img/ansiedade4.jpg";
import ansiedade5 from "../img/ansiedade5.jpg";
import ansiedade6 from "../img/ansiedade6.jpg";

import panico1 from "../img/panico1.png";
import panico2 from "../img/panico2.png";
import panico3 from "../img/panico3.png";
import panico4 from "../img/panico4.png";
import panico5 from "../img/panico5.png";
import panico6 from "../img/panico6.png";

import Tela from "../componentes/Tela";
import "./TelaAutoajuda.css";

const TelaAutoajuda = function () {
    return (
        <Tela>
            <div className='TelaMapa'>
                <h1>Crise de Ansiedade</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade} alt= "" />
                        </div>
                        <div className='Titulo'>
                        < h4>Como sair da crise de ansiedade?</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Passar por um momento de crise não é nada fácil e ter um ente querido que tem estes episódios é tão difícil quanto. É importante conhecer formas de aliviar os sintomas e conseguir se acalmar. A partir daqui segue dicas de como lidar com este momento tão delicado.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade2} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Desvie atenção dos sintomas!</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                               Em um momento de crise de ansiedade é muito comum o foco nos sintomas que com o passar do tempo parece estar tendo um infarto. É importante que neste momento você foque em uma atividade como a respiracação consciente.  
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade3} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Respiração consciente!</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                             A respiração consciente é importante para conseguir diminuir a tenção. Se baseia inspirar por 4 segundos, segurar a respiração por 1 segundo e expirar por 4 segundos.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade4} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Relaxe os músculos!</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Os músculos tendem a se contrair cada vez mais em uma forma de defesa no momento de crise de ansiedade. No entando, este "modo defesa" acava trazendo um grande desconforto com a contração dos músculos. Por isso é crucial que tente ao máximo relaxar.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade5} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Se distraia!</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Encontre algo que goste, como: um filme, uma música ou outra atividade que te deixe calmo. Ao fazer algo que se sente confortável, logo perceberá que sua respiração estará mais tranquila e seu corpo vai relaxando gradativamente.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={ansiedade6} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Melhorou?</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Não é fácil passar por uma crise de ansiedade e a constância dela nos leva a refletir sobre buscar uma ajuda profissional para que não afete seu cotidiano e tenha uma vida saudável. Lembre-se que sentir é normal e não esta sozinho nessa! Estamos aqui para te ajudar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='TelaMapa'>
                <h1>Crise de Pânico</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico1} alt= "" />
                        </div>
                        <div className='Titulo'>
                        < h4>Como sair da crise de pânico?</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                A crise de pânico causa uma sensação enorme de medo, mas é importante estar ciente que é algo momentâneo, Com isso em mente, é crucial buscar opções que te façam se sentir confortável. Com isso, sente-se, respire e saiba que os pensamentos que o incomoda passará em breve.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico2} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Feche os olhos e respire</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                               Com a crise de pânico vem a sensação de sair da realidade e não pertencimento. Um exercício de ancoramento da realidade é recorrer a texturas de objetos que são familiares ao seu redor, isso trará um conforto de se manter pensante ao permanecimento da realidade.  
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico3} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Se concentre em algum objeto</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                             Como anteriormente o tato foi um método essencial para trazer a realidade, a concentração em um objeto ajudará tanto quanto. Neste momento da crise você se sente desamparado e com um enorme medo, mas que saber estar no presente, te mantém ali focado no ambiente ao redor e desfocando dos pensamentos.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico4} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Lembre-se de uma memória feliz</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Lembrar de uma memória feliz fará com que seu cérebro libere substâncias que combaterão as sensações ruins. Assim que conseguir substituir pensamentos ruins por pensamentos bons, logo conseguirá se sentir mais tranquilo e o turbilhão de pensamentos irá se decipar.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico5} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Sinta um aroma que te tranquilize</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                            Percebeu que as dicas foram voltadas para os sentidos? E um deles que ajuda neste momento é o olfato, sentir algo que te remeta a tranquilidade te faz se sentir mais confortável e os pensamentos vão diminuindo a intensidade no decorrer dos minutos seguintes.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={panico6} alt='' />
                        </div>
                        <div className='Titulo'>
                        < h4>Melhorou?</h4> 
                        </div>
                        <div className='Texto'>
                            <p>
                                Não é fácil passar por uma crise de pânico e a constância dela nos leva a refletir sobre buscar uma ajuda profissional para que não afete seu cotidiano e tenha uma vida saudável. Lembre-se que sentir é normal e não esta sozinho nessa! Estamos aqui para te ajudar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
     );
};

export default TelaAutoajuda;