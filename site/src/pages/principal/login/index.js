import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';


import storage from 'local-storage';
import LoadingBar from 'react-top-loading-bar';


import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login } from '../../../api/UsuarioApi';

export default function Login(){

    const [email, setEmail]     = useState(''); 
    const [senha, setSenha]     = useState('');

    const[carregando, setCarregando] = useState(false)

    const navigate = useNavigate()
    const ref = useRef();

    async function verificarDados(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await login(email, senha);
            storage('usuario-logado', r)

            setTimeout(() => {
                navigate('/')
                alert('Seja bem-vindo a Fors :)');
            }, 4000)
            
        }
        catch (err) {
            toast.error(err.response.data.erro); 
            ref.current.complete(); 
            setCarregando(false);
        }
    }
    
    useEffect(() => {
        if (storage('usuario-logado')){
            navigate('/');
        }
        else if(storage('adm-logado')){
            navigate('/administrador');
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 
    return(
        <div className='pagina-login'>
            
            <Cabecalho />
            <LoadingBar color='#f11946' ref={ref} />
            <div className='cartao'>
                
                <h1 className='titulo'>Entre na sua conta Fors</h1>
            
                <div className='cartao-email'>
                    <span className='texto-email'>E-mail:</span>
                
                    <div className='caixa-email'>
                        <input className='email' type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <span className='texto-senha'>Senha: </span>
                
                    <div className='caixa-senha'>    
                        <input className='senha' type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>

                <div className='botao-conectado'>  
                    <input type='checkbox'/>
                    <span> Mantenha-me conectado </span>
                </div>    

                <div className='botao-login'>
                    <button className='login' onClick={verificarDados} disabled={carregando}>Login </button>
                </div>
                
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