import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { Link } from 'react-router-dom'

export default function MinhaConta(){

        return(
            
            <div className='pagina-MinhaConta'>

            <Cabecalho/>

            <div className='texto-principal'>
                <h1>Minha Conta</h1>
            </div>


            <div className='texto-dos-nomes-de-cadastro'>
                <div>
                    <h4>Nome:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Sobrenome:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Usúario:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>CPF:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Sexo:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Número de Telefone:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Data de Nascimento:</h4>
                    <input></input>
                </div>

                <div>
                    <h4>Email:</h4>
                    <input></input>
                </div>

                </div>

                <div className='rodapezi'>
                    <Rodape/>
                </div>

            </div>
        )
    }
    