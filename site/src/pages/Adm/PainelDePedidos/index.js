import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { Link, useNavigate } from 'react-router-dom';

import storage from 'local-storage';
import { useEffect } from 'react';

export default function Produtos(){

    const navigate = useNavigate();
    
    useEffect(() => {
        if (storage('usuario-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado') && !storage('usuario-logado')){
            navigate('/');
        }
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='pagina-produtos'>
            <Cabecalho />

        <div className='texto1'>
            <h1>Painel De Pedidos concluídos</h1>
        </div>

            <div className='meio-dos-quadrados'>

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
            <i class="fa-solid fa-check"style={{color: "#00f529",}}></i>
        </div>
        </div>

        <div className='btvoltar-ao-menu'>
        <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>
        </div>

            <Rodape />
        </div>
    )
}