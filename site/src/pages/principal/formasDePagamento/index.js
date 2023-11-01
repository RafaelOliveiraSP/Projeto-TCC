import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useState } from 'react';


export default function FormasDePagamento(){

    const [mostrarFormCred, setMostrarFormCred] = useState('none');
    const [mostrarFormDeb, setMostrarFormDeb]   = useState('none');

    const [nmrParcelas, setNmrParcelas]         = useState(0);

    function mostrarTabelaCred(){
        if(mostrarFormDeb === 'flex'){
            setMostrarFormCred('none')
        }
        else if(mostrarFormCred === 'none'){
            setMostrarFormCred('flex')  
        }
        else{
            setMostrarFormCred('none')
        }
    }

    function mostrarTabelaDeb(){
        if(mostrarFormCred === 'flex'){
            setMostrarFormDeb('none')
        }
        else if(mostrarFormDeb === 'none'){
            setMostrarFormDeb('flex')
        }
        else{
            setMostrarFormDeb('none')
        }
    }



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
                                <i onClick={mostrarTabelaCred} class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <i class="fa-solid fa-credit-card cartao-credito"></i>
                                <span>Cartão de crédito</span>
                            </div>
                            <span>Parcela em até 6x</span>
                        </div>

                            <div className='form-cartao' style={{display: mostrarFormCred}}>

                                <div>
                                    <label>Nome impresso no cartão*</label>
                                    <input type='text' />

                                    <label>Número do cartão*</label>
                                    <input type='text' />
                                    <div>
                                        <span>
                                           <label>Vencimento*</label>
                                            <input type='text' /> 
                                        </span>
                                        
                                        <span>
                                            <label>CVV*</label>
                                            <input type='text' />  
                                        </span>
                                    </div>

                                    <label id='quant-parcelas'>Parcelas*</label>
                                    <select value={nmrParcelas} onChange={e => setNmrParcelas(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                            </div>

                        <hr />

                        <div className='formas-de-pagamentos'>
                            <div>
                                <i onClick={mostrarTabelaDeb} class="fa-solid fa-caret-up fa-rotate-180"></i>
                                <i class="fa-solid fa-credit-card cartao-credito" style={{color: '#F7D736',}}></i>
                                <span>Cartão de débito</span>
                            </div>
                            <span>à vista</span>
                        </div>

                            <div className='form-cartao' style={{display: mostrarFormDeb}}>

                                <div>
                                    <label>Nome impresso no cartão*</label>
                                    <input type='text' />

                                    <label>Número do cartão*</label>
                                    <input type='text' />
                                    <div>
                                        <span>
                                           <label>Vencimento*</label>
                                            <input type='text' /> 
                                        </span>
                                        
                                        <span>
                                            <label>CVV*</label>
                                            <input type='text' />  
                                        </span>
                                    </div>
                                </div>
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