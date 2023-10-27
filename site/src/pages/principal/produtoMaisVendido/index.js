import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect ,useState } from 'react';

import axios from "axios";

export default function ProdutoMaisVendido(){

    const [quantidade,setQuantidade] = useState(0);
    const [estoque, setEstoque]      = useState(200);
    const cont = 0;

    const [opcoesTamanhos, setOpcoesTamanhos] = useState([]);
    const [tamanho, setTamanho]               = useState(0);

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

    async function listarTamanhos() {
        let r = await axios.get('http://129.148.42.252:5025/tamanhos');
        setOpcoesTamanhos(r.data);
    }

    useEffect(() => {
        //
        listarTamanhos();
        //
      }, [])
    
        
    return(
        <div className='pagina-travis'>

            <Cabecalho />

            <div className='cartao'>
                   
                   <div className='cartao2'>

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
                    <select className='numeracao' type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}>
                    <option value={0}> Selecione </option>
                    {opcoesTamanhos.map(item =>
                        <option value={item.id}> {item.numero} </option>  
                    )}
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
                
                <div className='botao1'>
                    <button onClick={addCarrinho}>ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        </div>
            <Rodape />
        </div>
    )
}