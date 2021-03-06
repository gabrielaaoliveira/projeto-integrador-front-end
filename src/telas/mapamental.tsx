import Indice from '../componentes/Indice';
import Tela from '../componentes/Tela';
import './mapamental.css';
import ansi from "../img/ansi.png";
import esqui from "../img/esqui.png";
import depre from "../img/depre.png";
import toc from "../img/toc.png";
import bornout from "../img/bornout.png";
import alimentar from "../img/alimentar.png";

const Mapa = function () {
    return (
        <Tela>
            <div className='TelaMapa'>
                <h1>Mapa Mental</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src= {ansi} alt='Ansiedade' />
                        </div>
                        <Indice percentual={9.3} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                            <p> 
                                <h4>ANSIEDADE</h4>
                            No Brasil 9,3% de pessoas sofrem de ansiedade, equivalente á 18 milhões de brasileiros, você não está sozinho nessa!!
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src= {esqui} alt='Esquizofrenia' />
                        </div>
                        <Indice percentual={1.6} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>ESQUIZOFRENIA</h4>
                               O Brasil tem 1,6 milhões de pessoas que vivem com esquizofrenia nos dias atuais.
                                  Causando uma perda de qualidade de vida, entre os 15 e 44 anos. É crucial a busca de ajuda com indícios desta condição, mas infelizmente, mais da metade destas pessoas não buscam tratamento especializado.
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src= {depre} alt='Depressão' />
                        </div>
                        <Indice percentual={5.8} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>DEPRESSÃO</h4>
                                A depressão é uma doença psiquiátrica crônica que tem como sintomas tristeza profunda, perda de interesse, ausência de ânimo e oscilações de humor. Muitas vezes é confundida com ansiedade e pode levar a pensamentos suicidas. Assim, é essencial diagnosticar a doença e iniciar acompanhamento médico. 
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src= {toc} alt='Transtorno obcessivo-compusivo' />
                        </div>
                        <Indice percentual={2.0} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>TOC</h4>
                                TOC, ou transtorno obsessivo-compulsivo, é um distúrbio psiquiátrico de ansiedadeque que tem como principal característica a presença de crises recorrentes de obsessões e compulsões.  
                            </p>
                        </div>
                    </div>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src={bornout} alt='FOBIA' />
                        </div>
                        <Indice percentual={30} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>BORNOUT</h4>
                                Burnout é uma forma de exaustão causada por alguém se sentir constantemente sobrecarregado. 

Ele é resultado de estresse emocional, físico e mental excessivo e prolongado. Em muitos casos, o esgotamento está relacionado ao trabalho.

Os efeitos do Burnout podem prejudicar o emprego, os relacionamentos e a vida pessoal. O esgotamento também reduz a imunidade, tornando a pessoa vulnerável a doenças.
                               
                            </p>
                        </div>
                    </div>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src= {alimentar} alt='Depressão' />
                        </div>
                        <Indice percentual={4.7} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>TRANSTORNO ALIMENTAR</h4>
                                Uma pessoa com um transtorno alimentar pode começar a comer quantidades menores ou maiores de alimentos, mas em algum momento, o seu desejo de comer menos ou mais vão ficando fora de controle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
    );
};

export default Mapa;