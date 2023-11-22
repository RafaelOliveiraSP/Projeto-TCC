import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import storage from 'local-storage';

import { listaDeProdutos, listaProdutosPorNome } from '../../../api/AdmApi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Consulta(){

    const [produtos, setProdutos]  = useState([]);
    const [filtro, setFiltro ]     = useState('');

    function teclaPressionada(e){
        if(e.key === 'Enter')
        filtrar();
    }

    async function filtrar(){
        try{
           const resposta = await listaProdutosPorNome(filtro);
            setProdutos(resposta); 
        }
        catch(err){
            toast.error(err.response.data.erro);
        }
    }

    async function carregarTodosOsProdutos(){
        const resposta = await listaDeProdutos();
        setProdutos(resposta);
    }
    
    const navigate = useNavigate();
    
    useEffect(() => {
        carregarTodosOsProdutos()

        if (storage('usuario-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado') && !storage('usuario-logado')){
            navigate('/');
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='pagina-consulta'>

            <Cabecalho />

            <div className='cartao-consulta'>

                <h1 >Consulte os produtos cadastrados</h1>

                <div className='input-pesquisar'>                    
                    <input placeholder='Digite o nome do produto que deseja consultar' className='pesquisa' type='text' value={filtro} onChange={e => setFiltro(e.target.value)} onKeyUp={teclaPressionada}/>
                    <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}} onClick={filtrar}></i>
                </div>
                    
                
                <div className='codigo-produto'>   
                    <h1 style={{maxWidth: '87.38px', width: '87.38px',}}>Código</h1>                     
                    <h1 style={{maxWidth: '92.48px', width: '92.48px',}}>Modelo</h1>
                    <h1 style={{maxWidth: '110.28px', width: '110.28px',}}>Descrição</h1>
                    <h1 style={{maxWidth: '94.69px', width: '94.69px',}}>Estoque</h1>
                    <h1 style={{maxWidth: '100px', width: '100px',}}>Preço</h1>
                    <h1 style={{maxWidth: '128.33px', width: '128.33px',}}>Preço Atual</h1>
                    <h1 style={{maxWidth: '85px', width: '85px',}}>Marca</h1>
                    <h1 style={{maxWidth: '78px', width: '78px',}}>Cor</h1>
                    <h1 style={{maxWidth: '89.02px', width: '89.02px',}}>Opções</h1>
                </div>

                {produtos.map(item => 
                    <div className='linha-produto'>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '87.38px', width: '87.38px' }}>{item.codigo}</div>
                        <div style={{maxWidth: '92.48px', width: '92.48px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left'}}>{item.nome}</div>
                        <div style={{maxWidth: '110.28px', width: '110.28px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.descricao}</div>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '94.69px', width: '94.69px'}}>{item.estoque}</div>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100px', width: '100px'}}>{Number(item.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '128.33px', width: '128.33px'}}>{Number(item.precopromocional).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '85px', width: '85px'}}>{item.marca}</div>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '78px', width: '78px'}}>{item.cor}</div>
                        <span style={{display: 'flex', justifyContent: 'center', maxWidth: '89.02px', width: '89.02px'}}>
                            <i onClick={() => navigate(`/cadastrar-produto/${item.id}`)} class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash-can"></i>
                        </span>
                    </div>  
                )}

            </div>

            <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>

            <Rodape />
        </div>
    );

}