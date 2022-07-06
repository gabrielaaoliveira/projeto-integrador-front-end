import './Telainicial.css';
import './Telainicial.css';
import anaegabi from './banner3.png';
import banner2 from './banner2.png';




const Telainicial = function () {
    return (
        <>
    <img src={anaegabi } alt="" /> 
    <img src={banner2} alt="" />
    

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
                                <h4></h4>
                               
                            </p>
                        </div>
                    </div>

                
                        </div>
                    </div>
            
            
    
        </>
    );
  };
  
  export default Telainicial;