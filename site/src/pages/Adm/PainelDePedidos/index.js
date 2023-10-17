import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function Produtos(){

    return(
        <div className='pagina-produtos'>
            <Cabecalho />

        <div className='texto1'>
            <h1>Painel De Pedidos concluídos</h1>
        </div>

        <div className='quadrado-1-tenis'>
            <p>Cliente</p>
            <img  className='Nike-Kd14' src='./assets/images/Tenis-KD14Pink.png' alt='Jordan'/>
            <h1>Tênis Da Nike KD14 Unissex</h1>


        </div>










            <Rodape />
        </div>
    )
}