import './index.scss';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import axios from 'axios';


export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [erro, setErro]   = useState('');

    const navigate = useNavigate()

    async function verificarDados(){
        try{
            let login = {
                email: email,
                senha: senha
            }

            let r = await axios.post('http://129.148.42.252:5035/verificarLogin', login);

            if(r.status === 204){
                navigate('/')
                alert('Usuário existe!!!');
            }
                
           
        }
        catch (err) {
            setErro(err.response.data.erro);
            alert('Você não possui cadastro!!!');  
        }
    }
 
    return(
        <div className='pagina-login'>

            <Cabecalho />

            <div className='cartao'>
                
                <h1 className='titulo'>Entre na sua conta Fors</h1>
            
                <div className='cartao-email'>
                    <span className='texto-email'>E-mail:</span>
                
                    <div className='caixa-email'>
                        <input className='email' type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <span className='texto-senha'>Senha: </span>
                
                    <div className='caixa-senha'>    
                        <input className='senha' type='text' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>

                <div className='botao-conectado'>  
                    <input type='checkbox'/>
                    <span> Mantenha-me conectado </span>
                </div>    

                <div className='botao-login'>
                    <button className='login' onClick={verificarDados}>Login </button>
                </div>

                <div>{erro}</div>
                
                <span className='cadastro'>Ainda não faz parte da nossa familia? <Link to={'/cadastro'}>cadastre-se</Link></span>
                <span className='adm'> Entrar como <Link to={'/LoginAdm'}>administrador</Link></span>

                <div className='pg-google'>
                    <button className='google'>Entre com o Google</button> 
                    <img src='./assets/images/LogoGoogle1.png' alt='logo-gloogle'/>
                </div>
                
                <div className='pg-face'>
                    <button className='facebook' >Entre com o Facebook</button>
                    <img src='./assets/images/Logofacebook.png' alt='logo-facebook' />
                </div>



            </div>
            <Rodape />
        </div>
    );
}