import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useState } from 'react';



export default function ProdutoMaisVendido(){

    const [quantidade,setQuantidade] = useState(0);
    const [estoque, setEstoque]      = useState(200);
    const cont = 0;

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

    function addCarrinho(){
        setEstoque(estoque - 1)
    }
        
    return(
        <div className='pagina-travis'>

            <Cabecalho />

            <div className='cartao'>
                    <h1 className='titulo'>Travis Scott x Nike Dunk Low Cactus Jack</h1>
               
                <div className='dunk-low'>
                    <div><div><img src='./assets/images/dunk-travis1.png' alt='dunk-low' /></div></div>
                </div>

                <div className='imgs'>
                    <span>
                        <div><img src='./assets/images/image19.png' alt='sola-dunk' /></div>
                        <div><img src='./assets/images/Group2.png' alt='par-dunk' /></div>
                        <div><img src='./assets/images/image20.png' alt='calcanhar-dunk' /></div>
                    </span>
                </div>

                <div className='desc-tenis'><span> Travis Scott x Nike Dunk Low <br/>"Cactus Jack" </span></div>
                
                <div className='preco'>
                    <div>
                        <span className='promocao'>&nbsp;R$14.700,00&nbsp;</span>
                        <span>R$14.500,00</span>
                    </div>
                    
                </div>

                <div className='entrega'>
                    <div>
                       <img src='./assets/images/image21.png' alt='caminhao' />
                        <span>Frete grátis</span> 
                    </div>
                </div>

                <div className='parcela'>10x de R$1450,00</div>

                <div className='tamanho'>Tamanho: </div>
                
                
                <div className='caixa-numero'>
                    <select className='numeracao'>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
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
                <button className='botao' onClick={addCarrinho}>ADICIONAR AO CARRINHO</button>
            </div>
            <Rodape />
        </div>
    )
}