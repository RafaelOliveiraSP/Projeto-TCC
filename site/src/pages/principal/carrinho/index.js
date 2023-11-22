import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import { listaProdutosPorId } from '../../../api/AdmApi';


export default function Carrinho() {
    const [itens, setItens] = useState([])

    async function carregarCarrinho(){
        let carrinho = Storage('carrinho');
        if (carrinho){
         
            let temp = [];

            for (let produto of carrinho) {
                let p = await  listaProdutosPorId(produto.id)
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
        <div className='pagina-carrinho'>
            <Cabecalho/>
            <div className='cartao-carrinho'>
                <h1>Carrinho de Compras</h1>
                <div className='emoji'>
                    <p><b>Seu carrinho está vazio !!</b></p>
                    <img src='./assets/images/caraTristre.jpg'  alt='caraTriste'/>
                </div>
                <div className='conclusao'>
                    <p>O carrinho é um local temporário,<br/>
                    depois de 15 dias que você o adicionou ele será removido</p>
                </div>
                <div className='men'>
                    <Link to='/'>Voltar para a página inicial</Link>
                </div>
            </div>
            <Rodape/>
         </div>
    );
}