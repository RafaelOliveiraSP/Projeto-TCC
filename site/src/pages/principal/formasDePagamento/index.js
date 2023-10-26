import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';


export default function FormasDePagamento(){

    return(
        <div className='pagina-pagamentos'>
            <Cabecalho />

                <div className='cartao-forma-pag'>
                    <div className='formulario-forma-pag'>

                        <h1>Formas de pagamento</h1>

                        <span>RESUMO DO PEDIDO</span>
                        <hr/>

                        <div>
                            <span>Subtotal</span>
                            <span className='valor'><label>R$</label> 18.399,99</span>
                        </div>
                        <div>
                            <span>Frete</span>
                            <span className='valor'><label>R$</label> 00</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span className='valor'><label>R$</label> 18.399,99</span>
                        </div>

                        <span className='escolher-metodo'>COMO DESEJA PAGAR?</span>

                        <hr />

                        <div className='formas-de-pagamentos'>
                            <div>
                                <i class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <img src='../assets/images/icone-boleto.png' alt='boleto'/>
                                <span>Boleto</span>
                            </div>
                            <span>à vista</span>
                        </div>

                        <hr />
                    </div>
                </div> 

            <Rodape />
        </div>
    )
}