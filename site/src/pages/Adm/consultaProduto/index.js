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

            <div className='cartao-consulta'>

                <h1 >Consulte os produtos cadastrados</h1>

                <div className='input-pesquisar'>                    
                    <input placeholder='Digite o nome do produto que deseja consultar' className='pesquisa' type='text' />
                    <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}}></i>
                </div>
                    
                
                <div className='codigo-produto'>   
                   
                    <h1>Código</h1>                   
                    
                    <h1>Modelo</h1>

                    <h1>Descrição</h1>

                    <h1>Estoque</h1>

                    <h1>Preço</h1>

                    <h1>Preço Atual</h1>
 
                    <h1>Marca</h1>

                    <h1>Cor</h1>

                </div>
            </div>

                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>

            <Rodape />
        </div>
    );

}