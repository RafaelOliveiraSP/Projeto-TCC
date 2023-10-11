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
                    <h1> Bem Vindo Admin</h1>
                    <span> Gerenciar e proteger sua conta</span>
                </div>
                <div className='opcoes-adm'>
                    <div>
                        <div></div>
                        <Link to='/consulta-produto'>Consultar produto</Link> 
                    </div>

                    <div>
                        <div></div>
                        <Link to='/cadastrar-produto'>Cadastrar produto</Link>
                    </div>
                            
                    <div>
                        <div></div>
                        Estatísticas de pedidos
                    </div>
                            
                    <div>
                        <div></div>
                        Pedidos em andamento
                    </div>
                            
                    <div>
                        <div></div>
                        Pedidos conclúidos
                    </div>
                </div> 
                
           
            </div>
            <Rodape />
        </div>
    )
}