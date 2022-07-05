import './Telainicial.css';
import './Telainicial.css';
import anaegabi from './static.png';
import gif from './giphy.gif';



const Telainicial = function () {
    return (
        <>
    <img src={anaegabi } alt="" /> 
    <img src={gif} alt="loading..." />

    <div className='TelaMapa'>
                <div className='Mapas'>
                    <div className='Mapa'>
                        <div className='Imagem'>
                            <img src='https://th.bing.com/th/id/OIP.zMff27eoUnwq215CHawl4gHaE9?pid=ImgDet&rs=1' alt='Ansiedade' />
                        </div>
            
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

                
                        </div>
                    </div>
            
            
    
        </>
    );
  };
  
  export default Telainicial;