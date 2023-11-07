import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';


export default function PedidoRealizado(){

    return(
            <div className='pagina-PedidoRealizado'>
                <Cabecalho />

                <div className='texto1'>
                    <h1>Seu pedido foi realizado</h1>
                </div>

                <div className='textos'>
                <div className='texto2'>
                    
                <div className='img'>
                    <img src='./assets/images/relogio.png' alt='Imagem relógio'/>
                    </div>

                    <div className='paragrafos'>

                    <h1>Pedido Realizado Com Sucesso</h1>
                    
                    <h1 className='p1'>Falta pouco para você adquirir o seu(s) produto(s)basta realizar o pagamento e esperar no conforto da sua casa</h1>
                    </div>

                    <div className='button'>
                        <button className='botao'> Status Do Pedido </button>
                    </div>

                    <Link className='voltar' to='/statuspedido'>voltar para status do pedido</Link>
                      
                </div>       
            </div>  
            <Rodape/>     
        </div>
    )
}
