import './index.scss';

import { Link } from 'react-router-dom';


export default function Cabecalho(){

    return(
        <div className='pagina-cabecalho'>
            <div className='prtcima-cabecalho'>
                <Link to='/ajuda'>Ajuda</Link>
                <span>|</span>
                <Link to='/cadastro'>Venha fazer parte da FORS</Link>
                <span>|</span>
                <Link to='/login'>Entrar</Link>
            </div>
            <div className='conteudo-cabecalho'>
                <div className='logo-cabecalho'>
                    <Link to='/'> <img src='../../assets/images/Logo-Fors.png' alt='Logo-for' /></Link>
                </div>
                <div className='links-cabecalho'>
                    <div className='paginas-cabecalho'>
                        <Link to='/'>Home</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/produto-mais-vendido'>Mais vendido</Link>
                        <Link to='/quemsomos'>Conheça-nos</Link>
                    </div>
                    <div className='icones-compras'>
                        <input type='text'/>
                        <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}}></i>
                    </div>                      
                </div>
                <div className='carrinho-cabecalho'>
                    <div className='icones-compras'>
                        <input type='text'/>
                        <i class="fa-solid fa-magnifying-glass lupa" style={{color: "#000000",}}></i>
                    </div>
                    <i class="fa-regular fa-heart coracao" style={{color: "#000000",}}></i>
                    <Link to='/carrinho'><i class="fa-solid fa-cart-shopping carrinho" style={{color: "#000000",}}></i></Link>
                    
                </div>
            </div>
            <div className='prt-fixa-cabecalho'>
                COM&nbsp;<b>FRETE GRÁTIS</b> &nbsp;PARA TODO PAÍS
            </div> 
        </div>
    )
} 