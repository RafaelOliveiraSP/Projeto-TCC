import { Link } from 'react-router-dom';
import './index.scss';


export default function Rodape(){
   
    return(
        <div className='pagina-rodape'>
            <div>
                <h2>POLÍTICA</h2>

                <Link to='/privacidade'>Privacidade</Link>
                <Link to='/termos'>Termos e condições</Link>

            </div>
            <div>
                <h2>AJUDA</h2>

                <Link to='/ajuda'>Fale conosco</Link>
                <Link to='/trocas'>Trocas e Devoluções</Link >
            </div>
            <div>
                <h2>SOBRE A FORS</h2>
                
                <Link to='/quemsomos'>Quem somos</Link>
            </div>
            <div>
                <h2>REDES SOCIAIS</h2>

                <div>
                    <i class="fa-brands fa-instagram" style={{color: "#d6dbe5",}} ></i>
                    <i class="fa-brands fa-twitter" style={{color: "#d6dbe5",}} ></i>
                    <i class="fa-brands fa-youtube" style={{color: "#d6dbe5",}}></i>
                    <i class="fa-brands fa-tiktok" style={{color: "#d6dbe5",}}></i>
                </div>
            </div>
        </div>
    )
}