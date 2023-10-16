import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useState } from 'react';

export default function CadastrarProduto(){

    // const [fotosProduto, setFotosProduto] = ([]);

    const [idProduto, setIdProduto]         = useState('');
    const [codigo, setCodigoProduto]        = useState('');
    const [descricao, setDescricao]         = useState('');
    const [descReduzida, setDescReduzida]   = useState('');
    const [estoque, setEstoque]             = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [nome, setNome]                   = useState('');
    const [cor, setCor]                     = useState('');

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
                        <span>Id:</span>
                        <input id='primeiro-input' type='text' value={idProduto} onChange={e => setIdProduto(e.target.value)}/>

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
                        <select></select>

                        <span>Nome:</span>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div>
                        <span>Cor:</span>
                        <input type='color' value={cor} onChange={e => setCor(e.target.value)}/>
                    </div>

                    <div>
                        <span>Tamanho:</span>
                        <select></select>
                    </div>
                </div>
                
            </div>
            <Rodape />
        </div>
    )
}