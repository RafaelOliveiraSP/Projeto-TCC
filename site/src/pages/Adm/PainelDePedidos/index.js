import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';

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
            <i class="fa-solid fa-check" style={{color: "#00f529",}}></i>
        </div>

        <div className='quadrado-2-tenis'>
            <p>Cliente</p>
            <img className='Travis-scott' src='./assets/images/dunk-travis1.png' alt='Travis'/>
            <h1>Tênis Travis Scott x Nike Dunk Low Cactus Jack Special Box</h1>
            <i class="fa-solid fa-check" style={{color: "#00f529",}}></i>
        </div>

        <div className='quadrado-3-tenis'>
            <p>Cliente</p>
            <img className='jordann12' src='./assets/images/Jordan12.png' alt='Jordan'/>
            <h1> Tênis Air Jordan 12 Retro</h1>
            <i class="fa-solid fa-check" style={{color: "#00f529",}}></i>
        </div>

        <div className='quadrado-4-tenis'>
            <p>Cliente</p>
            <img className='Mizuno' src='./assets/images/mizuno1.png' alt='Mizuno'/>
            <h1>Tênis Masculino Mizuno Wave Prophecy 12-S</h1>
            <i class="fa-solid fa-xmark"style={{color: "#ff0026",}}></i>
        </div>

        <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>


            <Rodape />
        </div>
    )
}