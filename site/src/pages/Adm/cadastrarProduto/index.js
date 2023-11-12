import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { API_URL } from '../../../constants.js';

import axios from "axios";
import storage from 'local-storage';

export default function CadastrarProduto(){

    // const [fotosProduto, setFotosProduto] = ([]);

    const [nome, setNome]                           = useState('');
    const [codigo, setCodigoProduto]                = useState('');
    const [descricao, setDescricao]                 = useState('');
    const [estoque, setEstoque]                     = useState('');
    const [valor, setValor]                         = useState('');
    const [valorPromocional, setValorPromocional]   = useState('');


    const [opcoesMarcas, setOpcoesMarcas] = useState([]);
    const [marca, setMarca]               = useState(0);

    const [cor, setCor]                   = useState('');

    async function listarMarcas(){
        let r = await axios.get(  API_URL + '/marcas');
        setOpcoesMarcas(r.data);
    }

    const navigate = useNavigate();

    useEffect(() => {
        
        listarMarcas();
        
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
        <div className='pagina-cadastro-produto'>
            <Cabecalho />
            <div className='dados-produtos'>

                <h1>Cadastre um novo produto</h1>

                <div className='formulario-produto'>
                    
                    <div className='colocar-imagens'>
                        <div>
                             <input type='file' />
                        </div>
                    </div>
                    
                    <div className='input-duplo'>
                        <span>Nome:</span>
                        <input id='primeiro-input'type='text' value={nome} onChange={e => setNome(e.target.value)}/>

                        <span>Código:</span>
                        <input type='text' value={codigo} onChange={e => setCodigoProduto(e.target.value)}/>
                    </div>

                    <div>
                        <span>Descrição:</span>
                        <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    </div>
                    
                    <div>
                        <span>Estoque:</span>
                        <input type='text' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                    </div>

                    <div>
                        <span>Valor:</span>
                        <input type='text' value={valor} onChange={e => setValor(e.target.value)}/>
                    </div>

                    <div>
                        <span>Valor promocional:</span>
                        <input type='text' value={valorPromocional} onChange={e => setValorPromocional(e.target.value)}/>
                    </div>

                    <div className='input-duplo'>
                        <span>Marca:</span>
                        <select value={marca} onChange={e => setMarca(e.target.value)} style={{width: '175px'}}>
                        <option value={0}> Selecione </option>
                            {opcoesMarcas.map(item =>
                                <option value={item.id}> {item.marca} </option>  
                            )}
                        </select>

                        <span style={{width: '54.84px', textAlign: 'right'}}>Cor:</span>
                        <input type='color' value={cor} onChange={e => setCor(e.target.value)}/>
                    </div>


                    <div className='botaoCadastrar'><button>Adicionar Produto</button></div>
                </div>
                
                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>
            </div>
            <Rodape />
        </div>
    )
}