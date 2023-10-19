import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function MeusPedidos(){

    return(

        <div className='pagina-MeusPedidos'>
            <Cabecalho/>

            <h1> Meus Pedidos </h1>

            <div className='tenis-1'>
                <p>Travis Scott x Nike Dunk Low Cactus Jack Special Box</p>
               <img className='tenis-travis' src='./assets/images/dunk-travis.png' alt='travis'/>
               <span>R$14.500,00</span>
               <button>Comprar novamente</button>
            </div>
               <hr/>
            <div className='tenis-2'>
                <p>Tênis Air Jordan 12 Retro</p>
                <img src='./assets/images/jordan12.png' alt='jordan'/>
                <span>R$ 1.899,99</span>
                <button>Comprar novamente</button>
            </div>
                <hr/>

            <div className='tenis-3'>
                <p>Tênis Ultra 4DFWD</p>
                <img src='./assets/images/tenis-ultra.png' alt='ultra'/>
                <span>R$ 1.999,99</span>
                <button>Comprar novamente</button>
            </div>
            <Rodape/>
        </div>
    )
}