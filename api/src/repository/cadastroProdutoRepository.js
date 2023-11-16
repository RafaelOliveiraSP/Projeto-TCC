import conexao from "./connection.js";


// Inserindo um produto  

export async function inserirProduto(produto) {
    let comando = `
        insert into tb_cadastrar_produto(nm_produto, ds_codigo, ds_descricao, qnt_estoque, vl_preco, vl_preco_promocional, id_marca, ds_cor) 
                                 values (?, ?, ?, ?, ?, ?, ?, ?)`
  
    let [resp] = await conexao.query(comando,
      [
        produto.nome,
        produto.codigo,
        produto.descricao,
        produto.estoque,
        produto.preco,
        produto.precopromocional,
        produto.marca,
        produto.cor
      ])
  
      produto.id = resp.insertId;
      return produto;
}

// Inserindo imagens ao produto 

export async function inserirImagem(imagem, id) {
  const comando = `
        update tb_cadastrar_produto
           set img_produto        = ?
         where id_produto         = ?;   
  `

  const [dados] = await conexao.query(comando, [imagem, id])
  return dados.affectedRows;
}



// verifica código do produto

export async function verificarCodigo(codigo) {
  let comando = `
      select * from tb_cadastrar_produto                                    
              where ds_codigo       like ?
  `

  let [dados] = await conexao.query(comando, [ '%' + codigo + '%',])
  return dados;
}

// busca marcas pelo id 

export async function buscarMarcaPorId(id) {
  let comando = `
      select * from tb_marca 
              where id_marca = ?
      `
      
  let [dados] = await conexao.query(comando, [id]);
  return dados;
}

// busca todos os produtos

export async function BuscarTodosOsProdutos(){
  let comando = `
      select id_produto				        as id,
             nm_produto				        as produto,
             ds_codigo				        as codigo,
             ds_descricao			        as descricao,
             qnt_estoque				      as estoque,
             vl_preco				          as preco,
             vl_preco_promocional	    as precoPromocional,
             id_marca				          as marca,
             ds_cor					          as cor,
             img_produto				      as imagem
      from tb_cadastrar_produto;`

  let [dados] = await conexao.query(comando);
  return dados;
}