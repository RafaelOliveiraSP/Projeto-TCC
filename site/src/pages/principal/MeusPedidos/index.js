import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function MeusPedidos(){

    return(

        <div className='pagina-MeusPedidos'>
            <Cabecalho/>

            <div className='cartao'>

            <h1> Meus Pedidos </h1>

            <div className='tenis-1'>
               <img className='tenis-travis' src='./assets/images/dunk-travis1.png' alt='travis'/>
               <p>Travis Scott x Nike Dunk Low Cactus <br/>Jack Special Box</p>
               
               <div>
                <span className='preco'>R$14.500,00</span>
                <button>Comprar novamente</button>
               </div>
                 
            </div>
                <hr/>
                          
            <div className='tenis-2'>
                <img src='./assets/images/jordan12.png' alt='jordan'/>
                <p>Tênis Air Jordan 12 <br/>Retro</p>

                <div>
                    <span>R$ 1.899,99</span>
                    <button>Comprar novamente</button>
                </div>
            </div>
                <hr/>


            <div className='tenis-3'>

                <img src='./assets/images/jordan-azul.png' alt='adidas'/>
                <p>Tênis Ultra 4DFWD</p>

                <div>
                    <span>R$ 1.999,99</span>
                    <button>Comprar novamente</button>
                </div>
            </div>
            <Rodape/>

            </div>
        </div>
    )
}