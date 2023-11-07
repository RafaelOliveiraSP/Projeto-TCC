import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../../../constants.js';

import axios from "axios";

export default function CadastrarProduto(){

    // const [fotosProduto, setFotosProduto] = ([]);

    const [codigo, setCodigoProduto]        = useState('');
    const [descricao, setDescricao]         = useState('');
    const [descReduzida, setDescReduzida]   = useState('');
    const [estoque, setEstoque]             = useState('');
    const [classificacao, setClassificacao] = useState('');

    const [opcoesMarcas, setOpcoesMarcas] = useState([]);
    const [marca, setMarca]               = useState(0);

    const [nome, setNome]                   = useState('');
    const [cor, setCor]                     = useState('');

    async function listarMarcas(){
        let r = await axios.get(  API_URL + '/marcas');
        setOpcoesMarcas(r.data);
    }

    useEffect(() => {
        //
        listarMarcas();
        //
      }, [])

    return(
        <div className='pagina-cadastro-produto'>
            <Cabecalho />
            <div className='dados-produtos'>

                <h1>Cadastre um novo produto</h1>

                <div className='formulario-produto'>
                    
                    <div className='colocar-imagens'>
                        <input type='file' />
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
                        <span>Desc. reduzida:</span>
                        <input type='text' value={descReduzida} onChange={e => setDescReduzida(e.target.value)}/>
                    </div>

                    <div>
                        <span>Estoque:</span>
                        <input type='text' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                    </div>

                    <div>
                        <span>Classificação:</span>
                        <input type='text' value={classificacao} onChange={e => setClassificacao(e.target.value)}/>
                    </div>

                    <div className='input-duplo'>
                        <span>Marca:</span>
                        <select value={marca} onChange={e => setMarca(e.target.value)}>
                        <option value={0}> Selecione </option>
                            {opcoesMarcas.map(item =>
                                <option value={item.id}> {item.marca} </option>  
                            )}
                        </select>

                        <span>Nome:</span>
                        <input />
                    </div>

                    <div>
                        <span>Cor:</span>
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