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

            <div>
                <h3>Minha Conta</h3>
                <Link><i class="fa-solid fa-user usuario" style={{color: "#000000",}}></i></Link>
                <h3>Perfil</h3>
                <h3>Cartões / Contas Bancarias  </h3>
                <h3>Endereços                   </h3>
                <h3>Trocar senha                </h3>
                <h3>Preferncias De Cookies      </h3>
            </div>












            <Rodape/>
        </div>
    )
}