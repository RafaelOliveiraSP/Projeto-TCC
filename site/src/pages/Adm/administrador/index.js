import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';

export default function Admin(){

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
                        <Link><div><i class="fa-solid fa-chart-line"></i></div></Link>
                        <span>Estatísticas de pedidos</span>
                    </div>
                            
                    <div>
                        <Link><div><i class="fa-solid fa-truck-fast"></i></div></Link>
                        <span>Pedidos em andamento</span>
                    </div>
                            
                    <div>
                        <Link to='/PainelDePedidos'><div><i class="fa-solid fa-person-walking-luggage"></i></div></Link>
                        <span><Link to='/PainelDePedidos'>Pedidos conclúidos</Link></span>
                    </div>
                </div> 
                
           
            </div>
            <Rodape />
        </div>
    )
}