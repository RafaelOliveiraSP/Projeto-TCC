import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { toast } from 'react-toastify';
import { useState }     from 'react';
import { useNavigate }  from 'react-router-dom';
import { API_URL }      from '../../../constants.js';

import axios from 'axios';


export default function FormasDePagamento(){

    const [mostrarFormCred, setMostrarFormCred] = useState('none');
    const [mostrarFormDeb, setMostrarFormDeb]   = useState('none');

    const [nomeCard, setNomeCard]               = useState('');
    const [nmrCard, setNmrCard]                 = useState('');
    const [codCard, setCodCard]                 = useState('');
    const [vencimento, setVencimento]           = useState('');
    const [nmrParcelas, setNmrParcelas]         = useState(0);

    const [enderecoCasa, setEnderecoCasa]       = useState('');
    const [cep, setCep]                         = useState('');
    const [nmrCasa, setNmrCasa]                 = useState('');

    function verificarTexto(e){
        let n = Number(e);

        if(isNaN(n)){
            setNmrCard('')
        }
        else{
            let cont = 16;
            let tam = n + "";

            if(cont >= tam.length){
                setNmrCard(n)
            }
        }
    }

    function maxCod(e){
        let cvv = Number(e);

        if(isNaN(cvv)){
            setCodCard('')
        }
        else{
            let cont = 4;
            let tam = cvv + "";

            if(cont >= tam.length){
                setCodCard(cvv)
            }
        }
    }

    function verificarCep(e){
        let cep = Number(e);

        if(isNaN(cep)){
            setCep('')
        }
        else{
            let cont = 8;
            let tam  = cep + "";
            
            if(cont >= tam.length){
                setCep(cep)
            }
        }
    }

    function mostrarTabelaCred(){
        if(mostrarFormDeb === 'flex'){
            setMostrarFormCred('none');
        }
        else if(mostrarFormCred === 'none'){
            setMostrarFormCred('flex');

            setNomeCard('');
            setNmrCard('');
            setCodCard('');
            setVencimento('');
            setNmrParcelas(0);
        }
        else{
            setMostrarFormCred('none');
        }
    }

    function mostrarTabelaDeb(){
        if(mostrarFormCred === 'flex'){
            setMostrarFormDeb('none');
        }
        else if(mostrarFormDeb === 'none'){
            setMostrarFormDeb('flex');

            setNomeCard('');
            setNmrCard('');
            setCodCard('');
            setVencimento('');
            setNmrParcelas(0);
        }
        else{
            setMostrarFormDeb('none');
        }
    }


    const navigate = useNavigate();

    async function cadastrarCartao(){
        try {
            let cartao = {
                numero: nmrCard,
                nome:   nomeCard,
                codigo: codCard,
                vencimento: vencimento,
                parcelas: nmrParcelas
            }
          
            await axios.post(API_URL + '/inserirCartao', cartao);
            
    
            toast.success('Cartão cadastrado com sucesso!')
          } 
          catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    async function finalizarPedido() {
      try {
        let endereco = {
            cep: cep,
            endereco: enderecoCasa,
            numero: nmrCasa
        }
      
        await axios.post(API_URL + '/cadastrarEndereco', endereco);
        

        alert(`Pedido efetuado com sucesso :)`);
        navigate('/')
      } 
      catch (err) {
        toast.error(err.response.data.erro);
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
                                    <input type='text' value={nomeCard} onChange={e => setNomeCard(e.target.value)}/>
                                    
                                    <label>Número do cartão*</label>
                                    <input type='text' value={nmrCard} onChange={e=>  verificarTexto(e.target.value)}/>
                                    <div>
                                        <span>
                                           <label>Vencimento*</label>
                                            <input type='date' value={vencimento} onChange={e => setVencimento(e.target.value)} style={{minWidth: '175px',}}/> 
                                        </span>
                                        <span>
                                            <label>CVV*</label>
                                            <input type='text' value={codCard} onChange={e => maxCod(e.target.value)}/>  
                                        </span>
                                    </div>

                                    <label id='quant-parcelas'>Parcelas</label>
                                    <select value={nmrParcelas} onChange={e => setNmrParcelas(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>

                                    <div onClick={cadastrarCartao} className='bt-cadastrar-card'><button>Cadastrar</button></div>
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
                                    <input type='text' value={nomeCard} onChange={e => setNomeCard(e.target.value)}/>

                                    <label>Número do cartão*</label>
                                    <input type='text' value={nmrCard} onChange={e=>  verificarTexto(e.target.value)}/>
                                    <div>
                                        <span>
                                           <label>Vencimento*</label>
                                            <input type='date' value={vencimento} onChange={e => setVencimento(e.target.value)} style={{minWidth: '175px',}}/> 
                                        </span>
                                        
                                        <span>
                                            <label>CVV*</label>
                                            <input type='text' value={codCard} onChange={e => maxCod(e.target.value)}/>  
                                        </span>
                                    </div>
                                    <div onClick={cadastrarCartao} className='bt-cadastrar-card'><button>Cadastrar</button></div>
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

                            <span style={{marginTop: '60px'}}>Insira o endereço de entrega</span>
                            <hr />
                            
                            <div className='dados-Endereco'>
                                <div>
                                    <article>
                                        <label>Endereço</label>
                                        <input value={enderecoCasa} onChange={e => setEnderecoCasa(e.target.value)} style={{width: '290px'}} type='text' /> 
                                    </article>
                                    
                                    <article>
                                        <label style={{maxWidth: '65.64px', width: '100%'}}>CEP</label>
                                        <input value={cep} onChange={e => verificarCep(e.target.value)} type='text'/> 

                                        <label>N°</label>
                                        <input value={nmrCasa} onChange={e => setNmrCasa(e.target.value)} style={{width: '100%', maxWidth: '66.38px'}} type='text'/>
                                    </article>
                                </div>
                            </div>
                        <div className='botao-confirm' onClick={finalizarPedido}><button>CONFIRMAR</button></div>
                    </div>
                </div> 

            <Rodape />
        </div>
    )
}