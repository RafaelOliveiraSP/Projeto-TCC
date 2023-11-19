import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import './index.scss';

export default function HomePage() {
  return (
    <div className="pagina-principal">
        <Cabecalho />

          <section className='banner-fors'>
            <div><img  src='./assets/images/Banner.png' alt='Banner' /></div>
          </section>
            
          <div className='dunk-low'>
            <div className='cartao-dunk-low'>
              <div><img src='./assets/images/Banner-Travis_clipdrop-enhance.png' alt='dunk-low'/></div>
            </div>
            <div className='detalhes-dunk-low'>
              <h1>TRAVIS SCOTT x NIKE</h1>
              <h2>Dunk Low Cactus Jack </h2>
              <p>Combinando o estilo clássico do Dunk Low com a criatividade de Travis Scott, este tênis se destaca na multidão. <b>Sua paleta de cores vibrantes e detalhes artísticos</b> únicos refletem a personalidade única de Travis Scott, tornando-o um item de moda autêntico.</p>
            
              <Link to='/produto-mais-vendido'>VENHA CONFERIR</Link>
            </div>
          </div>

          <section className='banner-salamon'>
            <div><img  src='./assets/images/segunda-faixa.webp' alt='Salmon'/></div>
          </section>

          <div className='Texto-segunda-faixa'>
            <h1>ODYSSEY ELMT LOW</h1>
            <p>Conquiste trilhas com confiança e velocidade</p>
            <div><Link to='/produtos'>VER PRODUTO</Link></div>
          </div>

          <div className='terceira-faixa'>
            <div className='detalhes-titulo'>
              <div></div>
              <h2>DESTAQUES</h2>
              <div></div>
            </div>

            <div className='faixa-destaques'>
              <div>
                <img src='./assets/images/tenis-Adidas1.png' alt='tenis Adidas'/>
                <Link to='/produtos'>VER PRODUTO</Link>
              </div>
              <div>
                <img src='./assets/images/tenis-Adidas2.png' alt='tenis Adidas'/>
                <Link to='/produtos'>VER PRODUTO</Link>
              </div>
              <div>
                <img src='./assets/images/tenis-Adidas3.png' alt='tenis Adidas'/>
                <Link to='/produtos'>VER PRODUTO</Link>
              </div>
              <div>
                <img src='./assets/images/tenis-Adidas4.png' alt='tenis Adidas'/>
                <Link to='/produtos'>VER PRODUTO</Link>
              </div>
            </div>
          </div>

          <section className='ultima-faixa-hp'>
              <div className='tenis-personalizados'><img src='./assets/images/grupo-tenis-persinalizados-uldo.png' alt='tênis personalizados' /></div>

              <h1>PRODUTOS</h1>
              <p>Nossos tênis são o resultado da <b>fusão entre estilo e qualidade, proporcionando uma experiência única para os seus pés</b>. Com um design exclusivo, você terá a oportunidade de expressar sua personalidade e marcar presença onde quer que vá.</p>

              <Link to='/produtos'>VENHA CONFERIR</Link>
          </section>

        <Rodape />
    </div>
  );
}


