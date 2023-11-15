import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import LoadingBar from 'react-top-loading-bar';

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';


import storage from 'local-storage';
import { loginAdmin } from '../../../api/AdmApi';

export default function LoginAdm(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function verificarDados(){
        ref.current.continuousStart();
        setCarregando(true);

        try{

            const r = await loginAdmin(email, senha)
            storage('adm-logado', r)

            setTimeout(() => {
                alert('Olá adm!')
                navigate('/administrador')
            }, 4000);
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
    <div className='pagina-LoginAdm'>
        <Cabecalho />
        <LoadingBar color='#f11946' ref={ref} />
        <div className='cartao'>
            
            <h1 className='titulo'>Administrador</h1>
        
            <div className="Login-Adm">

                <span> Insira endereço de email: </span>
                <input type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                
                <span> Senha: </span>
                <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>


                <div className='botao-lembre'>  
                    <input type='checkbox'/>
                    <span> Lembre-me </span>
                </div>    

            </div>      

            <button className="login" onClick={verificarDados} disabled={carregando}>Fazer Login</button>           
        </div>

        <Rodape />
    </div>  
    )
}