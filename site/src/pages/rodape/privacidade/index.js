import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function Privacidade(){

    return(
        <div className='pagina-privacidade'>
        <Cabecalho/>
         <h1>Privacidade</h1>
         <div className='borda'>
            <div className='info'>
                <div className='texto'>
                    <p className='prime'>A Fors preza pela segurança dos seus dados, pelo respeito a sua privacidade e pela transparência 
                        com você e, por isso, dedicamos este documento para explicar como os seus
                         dados pessoais serão tratados pela Fors
                         e quais são as medidas que aplicamos para mantê-los seguros.</p>
                        
                        <p className='final'>Antes de mais nada, nos apresentamos, nós somos a Fors S/A,
                         inscrito no CNPJ 52.998.303/0001-15, 
                        com sede na Cidade de São Paulo, Estado de São Paulo,
                         na Avenida Celso Octaviano de Freitas, 463, Centro, e segundo a definição trazida 
                         pela Lei Geral de Proteção de Dados “LGPD” (Lei Federal nº 13.709.2018),
                        na maior parte do tempo seremos o controlador das suas informações, sendo assim, 
                        responsável por definir o que acontece com estes dados e por protegê-los.
                    </p>
                </div>
            </div>
         </div>
             <div className='dino'>
             <button className='ramon'>Voltar para a página inicial</button>
             </div>
        <Rodape/>
        </div>
    )
}