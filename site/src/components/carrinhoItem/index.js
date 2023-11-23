// import { API_URL } from "../../constants";
import './index.scss'



export default function CarrinhoItem(props) {

    return(
        
        <div className="comp-carrrinho-item">

            <div className="cartao">
            
            <div className="itens">

            <img className='tenis-travis' src='./assets/images/dunk-travis1.png' alt='travis'/>
            <div className="nome">{props.item.produto.nome}</div>
                    
            <div>
                <span className='preco'>{props.item.produto.preco}</span>
                        <button> Comprar </button>
                    
                        
                    </div>
                        <hr/>

            </div>

            </div>

        </div>
    )
}