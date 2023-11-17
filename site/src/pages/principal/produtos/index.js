
import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Produtos(){

    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();
    function enviarProduto(){
        navigate('/produto-mais-vendido');
    }

    
    async function listaDeProdutos(){
        let r = await axios.get(  API_URL + '/listarProdutos');
        setProdutos(r.data);
    }

    useEffect(() => {
        listaDeProdutos();
    }, [])

    return(
        <div className='pagina-produtos'>
            <Cabecalho />

            <h1>Produtos</h1>

            <div  className='mais-vendidos'>
                <button>Mais Vendidos</button>
            </div>

            <div className='faixa-produtos'>
           
                <div className='filtrar-tenis'>  
                         
                    <h1>filtrar por</h1>
                    <p className='Marca'>Marca</p>
                   
                    <article>
                        <button className='button1'> NIKE        </button>
                        <button className='button1'> MIZUNO      </button>
                        <button className='button1'> ADIDAS      </button>
                        <button className='button1'> OLYMPIKUS   </button>
                        <button className='button1'> PUMA        </button>
                        <button className='button1'> CONVERSE    </button>
                    </article>
                    <div className='Preço'>

                        <h1>Preço</h1>

                        <div className='marca-produtos-por-preço'>
                            <div>
                               <h2> De  </h2>
                               <input type='text'/> 
                            </div>
                            <div>
                                <h2> Até </h2>
                                <input type='text'/> 
                            </div>
                        </div>
                    </div>

                </div>

                <div className='produtos'>     
                    <div className='faixa-cima-produtos'>
                        {produtos.map(item =>
                            <div className='quadrado-do-tenis'>
                                <img src={`${API_URL}/` + item.imagem} alt={item.produto} />
                                <h2>{item.produto}</h2>
                                <h2>R$ {item.preco}</h2>

                                
                                <button onClick={enviarProduto} >Ver Produto</button>
                            </div> 
                        )}
                    </div>
                </div>

            </div>
            <Rodape/>
        </div>
    )
}
