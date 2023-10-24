import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function Trocas(){

    return(
     <div className='pagina-trocas'>
       <Cabecalho/>
       <h1 className='reginaldo'>Trocas e Devoluções</h1>
        <div className='universo'>
             <h1 className='picapau'>COMO INICIAR UMA DEVOLUÇÃO</h1>
            <div className='galaxia'>
                <div className='via-lactea'>
                   <p className='plutao'>  Não é possível trocar qualquer
                    produto que <br/> passe do prazo 30 dias.
                    Também não <br/> realizamos troca dos artigos de máscaras.
                    </p>
                    <p className='marte'>  Em caso de devolução por defeito e/ou 
                        <br/> desistência de um produto exclusivo, não será 
                        <br/> garantida a troca por outro produto, somente a
                         <br/> restituição do valor pago, após análise e 
                        <br/> aprovação do nosso Controle de Qualidade.</p>
                </div>

                <div></div>
            </div>
        </div>
            <div className='lua'>
                <button className='f1'>Voltar para a página inicial</button>
            </div>
        <Rodape/>
     </div>
    )
    }