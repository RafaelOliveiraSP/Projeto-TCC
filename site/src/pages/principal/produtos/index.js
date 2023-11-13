
import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

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

                        <div className='marca-produtos-por-preço'>
                            <div>
                               <h2> De  </h2>
                               <input type='text'/> 
                            </div>
                            <div>
                                <h2> Até </h2>
                                <input type='text'/> 
                            </div>
                        </div>
                            
                        
                    </div>

                </div>

                <div className='produtos'>     
                    
                    <div className='faixa-cima-produtos'>
                        <div className='quadrado-do-tenis'>
                            <img src='./assets/images/Tenis-KD14Pink.png' alt='KD14'/>
                            <h1 className='Kd14'>Tênis Nike KD 14</h1>
                            <h1 className='valorzinho'>R$1.709,99</h1>

                            <div className='botao1'>
                                <button  className='button3-do-produto'>Ver Produto</button>
                            </div>

                        </div>
                        <div className='quadrado-do-tenis'>
                            <img src='./assets/images/Tenis-KD14Pink.png' alt='Mizuno'/>
                            <h1 className='Mizuno'>Mizuno Wave Prophecy 12</h1>
                            <h1 className='valorzinho2'>R$1.799,99</h1>

                            <div className='button2'>
                                <button  className='button3-do-produto'>Ver Produto</button>
                            </div>

                        </div>
                        <div className='quadrado-do-tenis'>
                            <img className='Nike-Dunk' src='./assets/images/Tenis-KD14Pink.png' alt='Jordan'/>
                            <h1 className='nike-dunk'>Nike Dunk Low Gray</h1>
                            <h1 className='valorzinho3'>R$1099,99</h1>

                            <div className='button3'>
                                <button  className='button3-do-produto'>Ver Produto</button>
                            </div>

                        </div>
                        <div className='quadrado-do-tenis'>
                            <img className= 'Travis' src='./assets/images/Tenis-KD14Pink.png' alt='Jordan'/>
                            <h1  className='travis-de-tenis'> Travis Scott x Nike Dunk Low Cactus Jack </h1>
                            <h1  className='valorzinho4'>R$14.500,00</h1>

                            <div className='button4'>
                                <button className='button3-do-produto'>Ver Produto</button>
                            </div>

                        </div>        
                    </div>


                </div>
            </div>

            

                <Rodape/>

        </div>
    )
}
