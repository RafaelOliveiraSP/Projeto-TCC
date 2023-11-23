import './index.scss';
import { Link, useNavigate } from 'react-router-dom';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect } from 'react';

import storage from 'local-storage';


export default function Carrinho() {

    const navigate = useNavigate(); 

    useEffect(() => {
        if (storage('carrinho')){
            navigate('/meuspedidos');
        }
       
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
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