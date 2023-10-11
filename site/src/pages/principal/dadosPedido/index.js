import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';


export default function DadosPedido(){

    return(
        <div className='pagina-DadosPedidos'>
             <Cabecalho />
            <div className='cartao'>
                
                <h1>Dados para finalizar o pedido</h1>

                <div className='formulario'> 
                    <span><b>CONFIRA OS DADOS</b></span>
                    <hr/>
                

                    <div className='nome'>
                        <span>Nome completo : </span>
                        <input type='text'/>                       
                    </div>
                        <hr/>
                    
                    <div className='email'>
                        <span>E-mail :</span>
                        <input type='text'/>
                    </div>
                        <hr/>
                    
                    <div className='cep'>    
                        <span>CEP :</span>
                        <input type='text'/>
                    </div>
                        <hr/>

                    <div className='endereco'>
                        <span>Endereço para entrega:</span>
                        <input type='text'/>

                        <span>N° : </span>
                        <input type='text'/>     
                    </div>
                        
                </div>  
             </div>
             <Rodape/>
        </div>
    )
}