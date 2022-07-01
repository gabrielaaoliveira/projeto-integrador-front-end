import Indice from '../componentes/Indice';
import Tela from '../componentes/Tela';
import './mapamental.css';

const Mapa = function () {
    return (
        <Tela>
            <div className='TelaMapa'>
                <h1>Mapa Mental</h1>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src='https://th.bing.com/th/id/OIP.zMff27eoUnwq215CHawl4gHaE9?pid=ImgDet&rs=1' alt='Ansiedade' />
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
                            <img src='https://cdn.fatimanews.com.br/upload/dn_arquivo/2020/07/noti-cia-1-esquizofrenia.png' alt='Esquizofrenia' />
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
                            <img src='https://th.bing.com/th/id/R.d1e42d4832e62201e1f596b850ae0d95?rik=oeoOj58IsINB0Q&riu=http%3a%2f%2fwww.perguntesaude.com%2fwp-content%2fuploads%2f2017%2f01%2fS%C3%ADndrome-do-P%C3%A2nico-1-300x200.jpg&ehk=gTUJen8rXmavYywnj%2foFBqtb%2bhqixJkTXWk77cN7JG4%3d&risl=&pid=ImgRaw&r=0' alt='Depressão' />
                        </div>
                        <Indice percentual={5.8} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>DEPRESSÃO</h4>
                               
                            </p>
                        </div>
                    </div>

                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src='https://th.bing.com/th/id/OIP.MIP0dAPszZ8ZjlnHc_qRggHaDt?pid=ImgDet&rs=1' alt='TRASTORNO ALIMENTAR' />
                        </div>
                        <Indice percentual={4.7} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>TRANSTORNO ALIMENTAR</h4>
                               
                            </p>
                        </div>
                    </div>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src='https://th.bing.com/th/id/OIP.gfHv0dq954N1qnlCeMoY_wHaE8?pid=ImgDet&rs=1' alt='FOBIA' />
                        </div>
                        <Indice percentual={86} corFundo={'#fcc'} corPercentual={'#f00'} />
                        <div className='Texto'>
                    
                        </div>
                        <div className='Texto'>
                            <p>
                                <h4>FOBIA</h4>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tela>
    );
};

export default Mapa;