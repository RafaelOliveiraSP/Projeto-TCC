import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from               './pages/Adm/administrador';
import Consulta from            './pages/Adm/consultaProduto';
import LoginAdm from            './pages/Adm/LoginAdm';
import CadastrarProduto from    './pages/Adm/cadastrarProduto';
import PainelDePedidos from     './pages/Adm/PainelDePedidos';

import HomePage from            './pages/principal/homePage';
import Produtos from            './pages/principal/produtos';
import Login from               './pages/principal/login';
import Cadastrar from           './pages/principal/cadastro';
import ProdutoMaisVendido from  './pages/principal/produtoMaisVendido';
import Carrinho from            './pages/principal/carrinho';
import FinalizarPedido from     './pages/principal/FinalizarPedido';
import PedidoRealizado from     './pages/principal/PedidoRealizado';
import DadosPedidos from        './pages/principal/dadosPedido';
import StatusPedido from        './pages/principal/StatusPedido';
import MeusPedidos from         './pages/principal/meusPedidos';
   

import QuemSomos from           './pages/rodape/quemSomos';
import Faleconosco from         './pages/rodape/faleConosco';
import Privacidade from         './pages/rodape/privacidade';
import Termoscondicoes from     './pages/rodape/termos';
import Trocas from              './pages/rodape/trocas';
import MinhaConta from          './pages/principal/minhaConta';





export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastrar />} />
                <Route path='/produtos' element={<Produtos />}/>
                <Route path='/produto-mais-vendido' element={<ProdutoMaisVendido />}/>
                <Route path='/carrinho' element={<Carrinho/>} />
                <Route path='/FinalizarPedido' element={<FinalizarPedido/>} />
                <Route path='/PedidoRealizado' element={<PedidoRealizado/>} />
                <Route path='/DadosPedido' element={<DadosPedidos/>} />
                <Route path='/StatusPedido' element={<StatusPedido/>} />
                <Route path='/meusPedidos' element={<MeusPedidos/>} />
                <Route path='/minhaconta' element={<MinhaConta/>} />
                <Route path='/formasdepagamento' element={<FormasDePagamento />} />

                <Route path='/LoginAdm' element={<LoginAdm/>}/>
                <Route path='/administrador' element={<Admin />} />
                <Route path='/consulta-produto' element={<Consulta/>} />
                <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
                <Route path='/PainelDePedidos' element={<PainelDePedidos/>}/>
                
                <Route path='/ajuda' element={<Faleconosco />} />
                <Route path='/privacidade' element={<Privacidade />}/>
                <Route path='/quemsomos' element={<QuemSomos />}/>
                <Route path='/termos' element={<Termoscondicoes/>}/>
                <Route path='/trocas' element={<Trocas/>}/>

             </Routes>
        </BrowserRouter>
    )
}