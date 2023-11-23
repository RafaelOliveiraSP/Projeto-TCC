import './index.scss';



export default function CarrinhoItem({ item: { produto: { info, categorias, imagens }, qtd }, removerItem }) {

    // function removerItem(id) {
    //     let carrinho = Storage('compCarrinhoItem');
    //     carrinho = carrinho.filter(item => item.id !== id);

    //     Storage('carrinho', carrinho);
    //     // carregarCarrinho();
    // }

    return(
        <div className="compCarrinhoItem">
                
            <div>
                <div >
                    {/* <img/> */}
                    <div className="nome"></div>
                            
                    <div>
                        <span className='preco'></span>
                        <button> Comprar </button>       
                    </div>
                </div> 
            </div>

            <hr/>

        </div>
    )
}