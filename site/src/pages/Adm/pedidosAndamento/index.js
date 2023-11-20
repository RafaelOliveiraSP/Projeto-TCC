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
        <div className='pagina-andamento'>

            <Cabecalho />

            <div className='cartao'>

                <h1 className='titulo'>Pedidos em andamento</h1>

                <div className='input-pesquisar'>
                    <span className='texto-pesquisar'>Insira o id da compra</span>
                        
                    <input className='pesquisa' type='text' />
                    <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}}></i>
                </div>
                    

                <div className='id-produto'>

                    <div className='id'>
                    <h1>ID do produto</h1>   
                    <input className='caixa-id' type='text' />
                    </div>
                        
                        
                    <div className='nome-cliente'>
                        <h1>Nome do cliente</h1>
                        <input className='caixa-nome' type='text' />
                    </div>

                    <div className='produto'>
                        <h1>Produto</h1>
                        <input className='caixa-prod' type='text' />
                    </div>

                    <div className='pagamento'>
                        <h1>Pagamento</h1>
                        <input className='caixa-pag' type='text' />
                    </div>

                    <div className='status'>
                        <h1>Status</h1>
                        <select className='caixa-status'>
                            <img src='./assets/images/imagem30.png' alt='seta' />
                        </select>
                        </div>
                    </div>

                </div>

                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>

            <Rodape />
        </div>
    );

}