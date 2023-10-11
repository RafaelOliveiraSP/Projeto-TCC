import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function QuemSomos(){

    return(
        
       <div className='pagina-QuemSomos'>
         <Cabecalho/>
            <h1 className='roger'>Quem Somos</h1>
            <div className='espaco'>
                <div className='borda'>
                    <p className='descao'>A Fors é uma empresa que se destaca no mercado de calçados, especialmente tênis, por oferecer aos seus clientes uma experiência única de acesso a modelos exclusivos a preços excelentes.
                    Fundada com a missão de tornar a moda mais acessível, a Fors tem conquistado um lugar especial no coração dos amantes de calçados ao redor do mundo.
                    O que torna a Fors verdadeiramente única é o seu compromisso com a exclusividade e a raridade. A empresa se dedica a trazer para seus clientes tênis que são considerados difíceis 
                    de encontrar em outras lojas. Essa abordagem exclusiva se traduz em uma seleção de produtos que vai além das marcas populares e dos lançamentos tradicionais.
                    </p>
                </div>
            </div> 
         <Rodape/>
        </div>
    )
}