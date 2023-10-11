import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function CadastrarProduto(){

    // const [fotosProduto, setFotosProduto] = ([]);

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
                        <input id='primeiro-input' type='text'/>

                        <span>Código:</span>
                        <input type='text'/>
                    </div>

                    <div>
                        <span>Descrição:</span>
                        <input type='text'/>
                    </div>
                    
                    <div>
                        <span>Desc. reduzida:</span>
                        <input type='text'/>
                    </div>

                    <div>
                        <span>Estoque:</span>
                        <input type='text'/>
                    </div>

                    <div>
                        <span>Classificação:</span>
                        <input type='text'/>
                    </div>

                    <div className='input-duplo'>
                        <span>Marca:</span>
                        <select></select>

                        <span>Nome:</span>
                        <input type='text'/>
                    </div>

                    <div>
                        <span>Cor:</span>
                        <select></select>
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