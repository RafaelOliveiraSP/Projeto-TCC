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

                        <div className='formas-de-pagamentos'>
                            <div>
                                <i class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <i class="fa-solid fa-credit-card cartao-credito"></i>
                                <span>Cartão de crédito</span>
                            </div>
                            <span>em 2x sem juros ou 6x no cartão</span>
                        </div>

                        <hr />

                        <div className='formas-de-pagamentos'>
                            <div>
                                <i class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <i class="fa-solid fa-credit-card cartao-credito" style={{color: '#F7D736',}}></i>
                                <span>Cartão de débito</span>
                            </div>
                            <span>à vista</span>
                        </div>

                        <hr />

                        <div className='formas-de-pagamentos'>
                            <div>
                                <i class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <i class="fa-brands fa-pix pix" style={{color: '#9CDC86',}}></i>
                                <span>Pix</span>
                            </div>
                            <span>à vista</span>
                        </div>

                        <hr />

                        <div className='botao-confirm'><button>CONFIRMAR</button></div>
                    </div>
                </div> 

            <Rodape />
        </div>
    )
}