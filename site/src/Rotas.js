import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from               './pages/Adm/administrador';
import Consulta from            './pages/Adm/consultaProduto';
import LoginAdm from            './pages/Adm/LoginAdm';
import CadastrarProduto from    './pages/Adm/cadastrarProduto';
import PainelDePedidos from     './pages/Adm/PainelDePedidos';
import PedidosEmAndamento from  './pages/Adm/pedidosAndamento';

import HomePage from            './pages/principal/homePage';
import Produtos from            './pages/principal/produtos';
import Login from               './pages/principal/login';
import Cadastrar from           './pages/principal/cadastro';
import ProdutoMaisVendido from  './pages/principal/produtoMaisVendido';
import Carrinho from            './pages/principal/carrinho';
import FinalizarPedido from     './pages/principal/FinalizarPedido';
import PedidoRealizado from     './pages/principal/PedidoRealizado';
import StatusPedido from        './pages/principal/StatusPedido';
import MeusPedidos from         './pages/principal/carrinhoCheio';
import FormasDePagamento from   './pages/principal/formasDePagamento';
   

import QuemSomos from           './pages/rodape/quemSomos';
import Faleconosco from         './pages/rodape/faleConosco';
import Privacidade from         './pages/rodape/privacidade';
import Termoscondicoes from     './pages/rodape/termos';
import Trocas from              './pages/rodape/trocas';
import MinhaConta from          './pages/principal/minhaConta';
import Estatisticas from        './pages/Adm/estatisticas';






export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastrar />} />
                <Route path='/produtos' element={<Produtos />}/>
                <Route path='/detalhesDoProduto/:id' element={<ProdutoMaisVendido />}/>
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/FinalizarPedido' element={<FinalizarPedido/>} />
                <Route path='/PedidoRealizado' element={<PedidoRealizado/>} />
                <Route path='/StatusPedido' element={<StatusPedido/>} />
                <Route  path='/meuspedidos'  element={<MeusPedidos />} />
                <Route path='/minhaconta' element={<MinhaConta/>} />
                <Route path='/formasdepagamento' element={<FormasDePagamento />} />
                
                <Route path='/LoginAdm' element={<LoginAdm/>}/>
                <Route path='/administrador' element={<Admin />} />
                <Route path='/consulta-produto' element={<Consulta/>} />

                <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
                <Route path='/cadastrar-produto/:id' element={<CadastrarProduto />} />

                <Route path='/PainelDePedidos' element={<PainelDePedidos/>}/>
                <Route path='/PedidosEmAndamento' element={<PedidosEmAndamento/>}/>
                <Route path='/estatisticas' element={<Estatisticas />} />

                <Route path='/ajuda' element={<Faleconosco />} />
                <Route path='/privacidade' element={<Privacidade />}/>
                <Route path='/quemsomos' element={<QuemSomos />}/>
                <Route path='/termos' element={<Termoscondicoes/>}/>
                <Route path='/trocas' element={<Trocas/>}/>

             </Routes>
        </BrowserRouter>
    )
}