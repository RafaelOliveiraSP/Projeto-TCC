import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'


export default function MinhaConta(){

        return(
            
            <div className='pagina-MinhaConta'>

            <Cabecalho/>

            <div className='texto-principal'>
                <h1>Minha Conta</h1>
            </div>


            <div className='texto-dos-nomes-de-cadastro'>
                
                <div>
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

                </div>

            </div>

                <div className='rodapezi'>
                    <Rodape/>
                </div>

            </div>
        )
    }
    