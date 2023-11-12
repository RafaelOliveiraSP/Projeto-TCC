import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import storage from 'local-storage';


export default function Consulta(){


    const navigate = useNavigate();
    
    useEffect(() => {
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

            <div className='cartao'>

                <h1 className='titulo'>Consulta ao produto</h1>

                <div className='input-pesquisar'>
                    <span className='texto-pesquisar'>Insira o código do produto</span>
                        
                    <input className='pesquisa' type='text' />
                    <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}}></i>
                </div>
                    

                <div className='codigo-produto'>

                    <div className='cod'>
                    <h1>Código produto</h1>   
                    <input className='caixa-cod' type='text' />
                    </div>
                        
                        
                    <div className='id-produto'>
                        <h1>ID do produto</h1>
                        <input className='caixa-id' type='text' />
                    </div>

                    <div className='marca'>
                        <h1>Marca</h1>
                        <input className='caixa-marca' type='text' />
                    </div>

                    <div className='modelo'>
                        <h1>Modelo</h1>
                        <input className='caixa-modelo' type='text' />
                    </div>

                    <div className='estoque'>
                        <h1>Estoque</h1>
                        <input className='caixa-estoque' type='text' />
                        </div>
                    </div>

                    <Link className='voltar' to='/administrador'>Volte para o menu do ADM</Link>
                </div>

            <Rodape />
        </div>
    );

}