import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { Link } from 'react-router-dom'

export default function MinhaConta(){

return(

        <div className='pagina-MinhaConta'>
            <Cabecalho/>
            <h1>Minha Conta</h1>
            <Link><i class="fa-solid fa-user usuario" style={{color: "#000000",}}></i></Link>
        
            <Rodape/>
        </div>
    )
}