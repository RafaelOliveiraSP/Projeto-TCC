import './index.scss'

import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'

import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';
import { useEffect, useState } from 'react';

export default function MinhaConta(){

    
    const [nome, setNome]           = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [usuario, setUsuario ]    = useState('');
    const [cpf, setCpf]             = useState('');
    const [sexo, setSexo]           = useState('');
    const [telefone, setTelefone]   = useState('');
    const [dtNasc, setDtNasc]       = useState('');
    const [email , setEmail]        = useState('');

    const navigate = useNavigate();

    function sairConta(){
        storage.remove('usuario-logado');
        navigate('/');
    }

    useEffect(() => {

        if (!storage('usuario-logado')){
            navigate('/login');
        }
        else if(storage('adm-logado')){
             navigate('/administrador');
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setNome(usuarioLogado.Nome);
            setSobrenome(usuarioLogado.Sobrenome);
            setUsuario(usuarioLogado.Usuario);
            setCpf(usuarioLogado.CPF); 
            setSexo(usuarioLogado.Sexo);
            setTelefone(usuarioLogado.Telefone);
            setDtNasc(usuarioLogado.DataNascimento);
            setEmail(usuarioLogado.Email);     
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
            
            <div className='pagina-MinhaConta'>

            <Cabecalho/>

            <div className='texto-principal'>
                <h1>Minha Conta</h1>
            </div>


            <div className='texto-dos-nomes-de-cadastro'>
                
                <div>
                    <img src='../assets/images/logo-Jordan1.png' alt='Jordan1-logo'/>
                    
                    <div>
                        <h2>Nome:</h2>
                        <div>{nome}</div>
                    </div>

                    <div>
                        <h2>Sobrenome:</h2>
                        <div>{sobrenome}</div>
                    </div>

                    <div>
                        <h2>Usúario:</h2>
                        <div>{usuario}</div>
                    </div>

                    <div>
                        <h2>CPF:</h2>
                        <div>{cpf}</div>
                    </div>

                    <div>
                        <h2>Sexo:</h2>
                        <div>{sexo}</div>
                    </div>

                    <div>
                        <h2>Número de Telefone:</h2>
                        <div>{telefone}</div>
                    </div>

                    <div>
                        <h2>Data de Nascimento:</h2>
                        <div>{dtNasc.substring(0, 10)}</div>
                    </div>

                    <div>
                        <h2>Email:</h2>
                        <div>{email}</div>
                    </div>

                    <span>
                        <button onClick={sairConta}> Sair da minha conta <i class="fa-solid fa-right-from-bracket"></i></button>
                    </span>
                </div>

            </div>

                <div className='rodapezi'>
                    <Rodape/>
                </div>

            </div>
        )
    }
    