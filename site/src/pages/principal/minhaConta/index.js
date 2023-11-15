import './index.scss'

import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'

import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';
import { useEffect } from 'react';

export default function MinhaConta(){

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
                        <input></input>
                    </div>

                    <div>
                        <h2>Sobrenome:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>Usúario:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>CPF:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>Sexo:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>Número de Telefone:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>Data de Nascimento:</h2>
                        <input></input>
                    </div>

                    <div>
                        <h2>Email:</h2>
                        <input></input>
                    </div>

                    <button onClick={sairConta}> Sair da minha conta</button>
                </div>

            </div>

                <div className='rodapezi'>
                    <Rodape/>
                </div>

            </div>
        )
    }
    