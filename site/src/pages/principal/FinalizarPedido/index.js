import './index.scss';
import Cabecalho from '../../../components/cabecalho';

export default function FinalizarPedido(){

    return(
        <div className='pagina-FinalizarPedido'>
            <Cabecalho />

            <div className='texto1'>
                <h1>
                    FinalizarPedido
                </h1>
            </div>


            <div className='textinho'>
            <div className='texto2'>
                <div className='image'>
                <img src='./assets/images/imagecheck.png' alt='check'/>
                </div>

                <div className='paragrafo1'>

                <h1>    Pedido Realizado Com Sucesso </h1>
                <h1 className='p2'> 
                        Pedido n° 99999-9999 </h1>
                              
                <h1 className='p3'> Data do pedido: 01/01/2023 às 15:16:08  </h1>

                <h1 className='p4'> Pago No Boleto </h1>
                </div>

                <div className='button'>
                    <button>Acompanhar pedido</button>
                </div>

            </div>
            </div>



</div>

    );
}



















