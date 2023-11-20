
import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import Loading from '../../../components/loading';


import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { listaDeProdutos } from '../../../api/AdmApi';


export default function Produtos(){

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading]   = useState(true);

    const navigate = useNavigate();


    async function carregaTodosOsProdutos(){
        let r = await listaDeProdutos();
        setProdutos(r);
    }

    useEffect(() => {
        carregaTodosOsProdutos();

        setTimeout(() => {
            setLoading(false);
        }, 1000)
        
    }, [])

    return(
        <div className='pagina-produtos'>
            <Cabecalho />

            <h1>Produtos</h1>

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

                        {loading  === true && <Loading />} 

                        {loading === false &&
                        <>{produtos.map(item =>
                            <div className='quadrado-do-tenis'>
                                <img src={`${API_URL}/` + item.imagem} alt={item.produto} />

                                <div>
                                    <h1>{Number(item.precoPromocional).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
                                    <h2>{item.produto}</h2>
                                    <button onClick={() => navigate(`/detalhesDoProduto/${item.id}`)} >Ver Produto</button>
                                </div>
                                
                            </div> 
                        )}</>
                        }
                    </div>
                </div>

            </div>
            <Rodape/>
        </div>
    )
}
