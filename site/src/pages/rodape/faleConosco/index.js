import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

export default function Faleconosco(){

    return(
        <div className="pagina-fale-conosco">
            <Cabecalho />
                <h1>Fale Conosco</h1>
            <div className='borda'>   
              <div className='informacoes'>
                <div className='primeira-pt'>
                    <p className='p1'> Você pode entrar em contato com o Atendimento ao Cliente Fors através de duas alternativas:
                            <br/>1.Chat com atendentes online em seu aplicativo.
                              <br/>2.Por meio do formulário de contato.</p>
                </div>
                <div className='segunda-pt'>
                                    <p>Chat online</p>
                    <p className='primeiro'>Para falar com nossos atendentes online em seu aplicativo, vá para a
                    guia Eu (Selecione Chat Fors) (Selecione Bate papo) com
                    atendimento para começar a conversar.</p>

                    <p className='second'>Nosso atendimento através do chat funciona de segunda a sexta, das 8:00 às</p>
                                                <p className='tres'>20:00h.</p>    
                </div>
                <div className='terceira-pt'>
                  <p className='ultimo'>Formulário de contato
                      Preencha o formulário com o nome de usuário da
                        sua conta e uma breve declaração sobre sua solicitação, 
                          usaremos essas informações para te atender de uma maneira mais eficiente.</p>
                
                </div>
                  
              </div>
            </div>  
              <Rodape/>
        </div>
    )
}