import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function StatusPedido(){

    return(
        <div className='pagina-status'>
            <Cabecalho />
             
            <div className='cartao-status'>
                <h1>Status do pedido</h1>
                <p>Pedido #9999</p>

                
                <div className='bolinhas'>
                    <hr />

                    <div>
                        <div></div>
                        <p>Pedido realizado</p>
                    </div>

                    <div>
                        <div></div>
                        <p>Pedido em analise</p>
                    </div>

                    <div>
                        <div></div>
                        <p>Pagamento aprovado</p>
                    </div>

                    <div>
                        <div></div>
                        <p>Em separação</p>
                    </div>

                    <div>
                        <div></div>
                        <p>Enviado</p>
                    </div>
                </div>
            </div>

            <Rodape />
        </div>
    )
}