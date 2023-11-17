import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect ,useState } from 'react';

import { API_URL } from '../../../constants.js';

import axios from "axios";
import { useParams } from 'react-router-dom';


export default function ProdutoMaisVendido(){

    const [quantidade,setQuantidade]          = useState(0);
    const [estoque, setEstoque]               = useState(200);
    const [opcoesTamanhos, setOpcoesTamanhos] = useState([]);
    const [tamanho, setTamanho]               = useState(0);

    const [produto, setProduto]               = useState([0]);

    const cont = 0;
    const {id} = useParams()

    async function ProdutoConsultado(){
        let r = await axios.get( API_URL + `/buscarProdutoPorId/${id}`);
        setProduto(r.data);
    }

    function addProduto(){
        if(cont <= quantidade && estoque > quantidade){
            setQuantidade( quantidade + 1)
        }
    }

    function removerProduto(){
        if(cont < quantidade){
            setQuantidade( quantidade - 1)
        }
    }

    function addCarrinho(){
        setEstoque(estoque - 1)
    }

    async function listarTamanhos() {
        let r = await axios.get( API_URL +'/tamanhos');
        setOpcoesTamanhos(r.data);
    }

    useEffect(() => {
        //
        listarTamanhos();
        ProdutoConsultado();
        //
      }, [])
    
        
    return(
        <div className='pagina-travis'>

            <Cabecalho />

            {produto.map(item =>   
            <div className='cartao'>
                   
                   <div className='cartao2'>

                    <h1 className='titulo'>{item.produto}</h1>
               
                <div className='dunk-low'>
                    <div><div><img src='./assets/images/dunk-travis1.png' alt='dunk-low' /></div></div>
                </div>

                <div className='desc-tenis'><span>{item.descricao}</span></div>
                
                <div className='preco'>
                    <div>
                        <span className='promocao'>&nbsp;R$14.700,00&nbsp;</span>
                        <span>R$ {item.preco}</span>
                    </div>
                    
                </div>

                <div className='entrega'>
                    <div>
                       <img src='./assets/images/image21.png' alt='caminhao' />
                        <span>Frete grátis</span> 
                    </div>
                </div>

                <div className='parcela'>10x de R$1450,00</div>

                <div className='tamanho'>Tamanho: </div>
                
                
                <div className='caixa-numero'>
                    <select className='numeracao' type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}>
                    <option value={0}> Selecione </option>
                    {opcoesTamanhos.map(item =>
                        <option value={item.id}> {item.numero} </option>  
                    )}
                    </select>
                </div>  

                <div className='qtd'> 
                    Quantidade 
                    <div>
                        {quantidade}
                        <i onClick={addProduto} class="fa-solid fa-caret-up setacima"></i>
                        <i onClick={removerProduto} class="fa-solid fa-caret-up fa-rotate-180 setabaixo"></i>
                    </div>
                </div>
                
                <div className='botao1'>
                    <button onClick={addCarrinho}>ADICIONAR AO CARRINHO</button>
               </div>
            </div>
            
        </div>)}; 
            <Rodape />
        </div>
    )
}