import './index.scss';

import { useNavigate } from "react-router-dom";

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function LoginAdm(){

    const navigate = useNavigate();


    function confirmarLogin(){
        navigate('/administrador')
    }

    return(
    <div className='pagina-LoginAdm'>
        <Cabecalho />

        <div className='cartao'>
            
            <h1 className='titulo'>Administrador</h1>
        
            <div className="Login-Adm">
                <span> Nome de usuario ou endereço de email: </span>
            
                <input type='text' />
                
                <span> Senha: </span>
            
                <input type='text'/>


                <div className='botao-lembre'>  
                    <input type='checkbox'/>
                    <span> Lembre-me </span>
                </div>    

            </div>      

            <button className="login" onClick={confirmarLogin}>Fazer Login</button>           
        </div>

        <Rodape />
    </div>  
    )
}