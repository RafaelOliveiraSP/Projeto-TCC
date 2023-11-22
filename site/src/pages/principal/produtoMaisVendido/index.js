import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect ,useState } from 'react';

import { API_URL } from '../../../constants.js';

import Storage from 'local-storage'
import {toast} from 'react-toastify'

import axios from "axios";
import { useParams } from 'react-router-dom';
import { listaProdutosPorId } from '../../../api/AdmApi';


export default function ProdutoMaisVendido(){

    const [quantidade,setQuantidade]          = useState(0);

    const [opcoesTamanhos, setOpcoesTamanhos] = useState([]);
    const [tamanho, setTamanho]               = useState(0);

    const [product, setProduct]               = useState([]);

    const { nome, descricao, preco, estoque, precopromocional, imagem } = product;

    const cont = 0;
    const {id} = useParams()
    // const teste = estoque + ''; 

    async function ProdutoConsultado(){
        let r = await listaProdutosPorId(id)
        setProduct(r)
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

    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')){
                carrinho = Storage('carrinho');
        }

        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })
        
            Storage('carrinho', carrinho);
        
        }

        toast.success('Seu produto foi adicionado ao carrinho :)');
       
    }

    async function listarTamanhos() {
        let r = await axios.get( API_URL +'/tamanhos');
        setOpcoesTamanhos(r.data);
    }

    // function MudarEstoque(){

    // }

    useEffect(() => {
        //
        listarTamanhos();
        ProdutoConsultado();

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
        
    return(
        <div className='pagina-travis'>

            <Cabecalho />

            <div className='cartao'>
                   
                   <div className='cartao2'>

                    <h1 className='titulo'>{nome}</h1>
               
                <div className='dunk-low'>
                    <div><img src={`${API_URL}/` + imagem} alt={nome} /></div>
                </div>
    
                <div className='desc-tenis'><span>{descricao}</span></div>
                
                <div className='preco'>
                    <div>
                        <label>De:<span className='promocao'>&nbsp;{Number(preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}&nbsp;</span></label>
                        <span>Para:<span>{Number(precopromocional).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span></span>
                    </div>
                </div>

                <span>Estoque: {estoque}</span>

                <div className='entrega'>
                    <div>
                        <i class="fa-solid fa-truck" style={{fontSize: '19px'}}></i>
                        <span>Frete grátis</span> 
                    </div>
                </div>


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
                    <button onClick={adicionarAoCarrinho}>ADICIONAR AO CARRINHO</button>
               </div>
            </div>
            
        </div>
            <Rodape />
        </div>
    )
}