import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listaProdutosPorId } from '../../../api/AdmApi';
import CarrinhoItem from '../../../components/carrinhoItem';

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
            
            setItens(temp);
        }
    }

    useEffect(() => {
        carregarCarrinho();
    
        
  }, []) 


    return(

         <div className='pagina-carrinhoCheio'>
            <Cabecalho/>

            <div className='cartao'>

            <h1> Carrinho </h1>

            <div className='itens'>
                {itens.map(item =>
                    <CarrinhoItem item={item} /> 
                )}
            
            </div>
            </div>
                <Rodape/>
            </div>
        )
 }