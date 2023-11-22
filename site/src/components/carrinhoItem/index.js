import { API_URL } from "../../constants";
import './index.scss'

import { useNavigate } from "react-router-dom";

export default function CarrinhoItem(props) {

    return(
        
        <div className="comp-carrrinho-item">

        <div className="cartao">
        
        <div className="itens">

        <img className='tenis-travis' src='./assets/images/dunk-travis1.png' alt='travis'/>
        <p>Travis Scott x Nike Dunk Low Cactus <br/>Jack Special Box</p>
                
        <div>
            <span className='preco'>R$14.500,00</span>
                     <button> Comprar </button>
                
                    
                 </div>
                     <hr/>

        </div>

        </div>

        </div>
    )
}