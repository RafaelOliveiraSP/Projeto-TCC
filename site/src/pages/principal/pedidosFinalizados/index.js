import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listaDeProdutos, listaProdutosPorId } from '../../../api/AdmApi';

export default function MeusPedidos(){

    const [itens, setItens] = useState([])

    async function carregarCarrinho(){
        let carrinho = storage('carrinho');
        if (carrinho){
         
            let temp = [];

            for (let produto of carrinho) {
                let p = await listaProdutosPorId(produto.id)
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            console.log(temp);
            setItens(temp);
        }
    }

    useEffect(() => {
        carregarCarrinho();
    
  }, []) 


    return(

         <div className='pagina-MeusPedidos'>
            <Cabecalho/>

         <div className='cartao'>

         <h1> Carrinho </h1>

        <div className='tenis-1'>
        <img className='tenis-travis' src='./assets/images/dunk-travis1.png' alt='travis'/>
        <p>Travis Scott x Nike Dunk Low Cactus <br/>Jack Special Box</p>
                
        <div>
            <span className='preco'>R$14.500,00</span>
                     <button> Comprar </button>
                 </div>
                    
                 </div>
                     <hr/>
        </div>
                <Rodape/>
            </div>
        )
} 