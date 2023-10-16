import './index.scss';

import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';


export default function LoginAdm(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate()

    async function verificarDados(){
        try{
            let login = {
                email: email,
                senha: senha
            }

            let r = await axios.post('http://localhost:5035/verificarLoginAdm', login);

            if(r.status === 204){
                navigate('/administrador')
                alert('Olá Adm!!!');
            }
                
           
        }
        catch (err) {
            alert('Você não possui cadastro!!!');  
        }
    }

    return(
    <div className='pagina-LoginAdm'>
        <Cabecalho />

        <div className='cartao'>
            
            <h1 className='titulo'>Administrador</h1>
        
            <div className="Login-Adm">

                <span> Nome de usuario ou endereço de email: </span>
                <input type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                
                <span> Senha: </span>
                <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>


                <div className='botao-lembre'>  
                    <input type='checkbox'/>
                    <span> Lembre-me </span>
                </div>    

            </div>      

            <button className="login" onClick={verificarDados}>Fazer Login</button>           
        </div>

        <Rodape />
    </div>  
    )
}