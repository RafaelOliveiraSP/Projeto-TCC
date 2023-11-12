import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants.js';
import { toast } from 'react-toastify';

import axios from 'axios';
import storage from 'local-storage';

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

            let r = await axios.post(API_URL + '/verificarLoginAdm', login);
            storage('adm-logado', r)

            if(r.status === 204){
                alert('Olá adm!')
                navigate('/administrador')
            }
        }
        catch (err) {
            toast.error(err.response.data.erro);  
        }
    }

    function logarAdm(e){
        if(e.Key === 'Enter'){
            verificarDados();
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

        <div className='cartao'>
            
            <h1 className='titulo'>Administrador</h1>
        
            <div className="Login-Adm">

                <span> Insira endereço de email: </span>
                <input type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                
                <span> Senha: </span>
                <input type='password' value={senha} onKeyUp={logarAdm} onChange={e => setSenha(e.target.value)}/>


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