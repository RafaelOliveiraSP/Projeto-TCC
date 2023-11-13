import conexao from "./connection.js";

export async function inserirProduto(produto) {
    let comando = `
        insert into tb_cadastrar_produto(nm_produto, ds_codigo, ds_descricao, qnt_estoque, vl_preco, vl_preco_promocional, id_marca, ds_cor) 
                                 values (?, ?, ?, ?, ?, ?, ?, ?)
    `
  
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


export async function cadastrarImagens(img) {
  const comando = `
              insert into tb_produto_imagem(id_produto, img_produto)
                                     values(?, ?);`

  let resp = await conexao.query(comando, 
    [
      img.idProduto,
      img.caminho
    ])

    const dados = resp[0]; 

    // img.id = resp.insertId;
    // return img;
}