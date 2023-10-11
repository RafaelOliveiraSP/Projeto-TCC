import './index.scss';
import Cabecalho from '../../../components/cabecalho';

export default function Produtos(){

    return(
        <div className='pagina-produtos'>
            <Cabecalho />

            <h1>Produtos</h1>

            <div  className='mais-vendidos'>
                <button>Mais Vendidos</button>
            </div>

            <div className='faixa-produtos'>
           
                <div className='filtrar-tenis'>  
                         
                    <h1>filtrar por</h1>
                    <p className='Marca'>Marca</p>
                   
                    <article>
                        <button className='button1'> NIKE        </button>
                        <button className='button1'> MIZUNO      </button>
                        <button className='button1'> ADIDAS      </button>
                        <button className='button1'> OLYMPIKUS   </button>
                        <button className='button1'> PUMA        </button>
                        <button className='button1'> CONVERSE    </button>
                    </article>
                    <div className='Preço'>
                            <h1>Preço</h1>
                    </div>

                </div>

                <div className='produtos'>     
                    
                    <div className='faixa-cima-produtos'>
                        <div className='quadrado-do-tenis'>
                            <img src='./assets/images/Tenis-KD14Pink.png' alt='Jordan'/>
                            <h1 className='jordan'>Tênis Nike KD 14</h1>
                            <h1 className='valorzinho'>R$1.709,99</h1>
                        </div>
                        <div className='quadrado-do-tenis'>
                            <img src='./assets/images/mizuno1.png' alt='Mizuno'/>
                            <h1 className='Mizuno'>Mizuno Wave Prophecy 12</h1>
                            <h1 className='valorzinho2'>R$1.799,99</h1>
                        </div>    
                    </div>

                    <div className='faixa-cima-produtos'>
                        <div className='quadrado-do-tenis'>
                            <img className='Nike-Dunk' src='./assets/images/Nike-Dunk.png' alt='Jordan'/>
                            <h1 className='nike-dunk'>Nike Dunk Low Gray</h1>
                            <h1 className='valorzinho3'>R$999,99</h1>

                        </div>
                        <div className='quadrado-do-tenis'>
                            <img className= 'Travis' src='./assets/images/dunk-travis1.png' alt='Jordan'/>
                            <h1  className='travis-de-tenis'> Nike x Travis Scott</h1>
                            <h1  className='valorzinho4'>R$14.500,00</h1>
                        </div>  

                    </div>

                </div>
            </div>

            <div className='marca-produtos-por-preço'>
                    <h1>De</h1>
                    <h1>Até</h1>
            </div>

                <article className='botão'>
                    <button className='button'> 1000,00</button>
                    <button className='button2'> 2000,00 </button>
                </article>

        </div>
    )
}