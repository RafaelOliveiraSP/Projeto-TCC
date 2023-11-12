import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import storage from 'local-storage';

export default function Admin(){

    function sairAdm(){
        storage.remove('adm-logado');
        navigate('/');
    }

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
        <div className='pagina-administrador'>
            <Cabecalho />

            
            <div className='links-adm'>
                <div className='titulo-adm'>
                    <h1> Bem-Vindo Admin</h1>
                    <span> Gerenciar e proteger sua conta</span>
                </div>
                <div className='opcoes-adm'>

                    <div>
                        <Link to='/consulta-produto'><div><i class="fa-solid fa-list"></i></div></Link>
                        <span><Link to='/consulta-produto'>Consultar produto</Link></span> 
                    </div>

                    <div>
                        <Link to='/cadastrar-produto'><div><i class="fa-regular fa-pen-to-square"></i></div></Link>
                        <span><Link to='/cadastrar-produto'>Cadastrar produto</Link></span>
                    </div>
                            
                    <div>
                        <Link to='/estatisticas'><div><i class="fa-solid fa-chart-line"></i></div></Link>
                        <span><Link to='/estatisticas'>Estatísticas de pedidos</Link></span>
                    </div>
                            
                    <div>
                        <Link to='/PedidosEmAndamento'><div><i class="fa-solid fa-truck-fast"></i></div></Link>
                        <span><Link to='/PedidosEmAndamento'>Pedidos em andamento</Link></span>
                    </div>
                            
                    <div>
                        <Link to='/PainelDePedidos'><div><i class="fa-solid fa-person-walking-luggage"></i></div></Link>
                        <span><Link to='/PainelDePedidos'>Pedidos conclúidos</Link></span>
                    </div>

                </div>
                <span> 
                    <button onClick={sairAdm}>Sair da conta do adm <i class="fa-solid fa-right-from-bracket"></i></button>
                </span> 
                
            </div>
            <Rodape />
        </div>
    )
}