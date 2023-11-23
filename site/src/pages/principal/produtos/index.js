
import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import Loading from '../../../components/loading';


import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { listaDeProdutos, listaProdutosPorMarca } from '../../../api/AdmApi';
import { toast } from 'react-toastify';


export default function Produtos(){

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading]   = useState(true);

    const [idMarca, setIdMarca]    = useState('');

    const navigate = useNavigate();

    async function filtrar(){
        try{
            const resposta = await listaProdutosPorMarca(idMarca);
            setProdutos(resposta); 
        }
        catch(err){
            toast.error(err.response.data.erro);
        }
    }

    function botaoNIKE(){
        if(!idMarca || idMarca !== 1 )
            setIdMarca(1);
            filtrar();     
    }

    function botaoMIZUNO(){
        if(!idMarca || idMarca !== 5)
            setIdMarca(5)
            filtrar()
    }

    function botaoADIDAS(){
        if(!idMarca || idMarca !== 2)
            setIdMarca(2);
            filtrar();
    }

    function botaoOLYMPIKUS(){
        if(!idMarca || idMarca !== 6)
            setIdMarca(6);
            filtrar();
    }
    
    function botaoPUMA(){
        if(!idMarca || idMarca !== 3)
            setIdMarca(3);
            filtrar();
    }

    function botaoSALOMON(){
        if(!idMarca || idMarca !== 4)
            setIdMarca(4);
            filtrar();
    }

    function bucarTodos(){
        carregaTodosOsProdutos();
    }
    
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
                    <h1>filtrar por:</h1>
                    <h2 style={{marginBottom: '20px'}}>Marca</h2>
                    
                   
                    <article>
                        <button className='button1' onClick={botaoNIKE}>        NIKE       </button>
                        <button className='button1' onClick={botaoMIZUNO}>      MIZUNO      </button>
                        <button className='button1' onClick={botaoADIDAS}>      ADIDAS      </button>
                        <button className='button1' onClick={botaoOLYMPIKUS}>   OLYMPIKUS   </button>
                        <button className='button1' onClick={botaoPUMA}>        PUMA        </button>
                        <button className='button1' onClick={botaoSALOMON}>     SALOMON   </button>

                        <button onClick={bucarTodos} style={{marginTop: "25px", width: "170px"}} className='button1'>Todos os produtos</button>

                        <p style={{textAlign: "center", maxWidth: "140px"}}> OBS: Dê 2 cliques na marca desejada</p>
                    </article>
                    <div className='Preço'>
                    
                        <h2>Preço</h2>

                        <div className='marca-produtos-por-preço'>
                            <div>
                               <h3> De  </h3>
                               <input type='text'/> 
                            </div>
                            <div>
                                <h3> Até </h3>
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
                                <img src={`${API_URL}/` + item.imagem} alt={item.nome} />

                                <div>
                                    <h1>{Number(item.precopromocional).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
                                    <h2>{item.nome}</h2>
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
