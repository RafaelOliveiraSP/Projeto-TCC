import './index.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';


export default function Carrinho() {
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