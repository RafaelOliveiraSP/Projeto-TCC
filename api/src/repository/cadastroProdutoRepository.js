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

export async function verificarCodigo(codigo) {
  let comando = `
      select * from tb_cadastrar_produto                                    
              where ds_codigo       like ?
  `

  let [dados] = await conexao.query(comando, [ '%' + codigo + '%',])
  return dados;
}

export async function buscarMarcaPorId(id) {
  let comando = `
      select * from tb_marca 
              where id_marca = ?
      `
      
  let [dados] = await conexao.query(comando, [id]);
  return dados;
}

export async function consultarCodigo(busca) {
  let comando = `
      select * from tb_cadastrar_produto                                    
              where ds_codigo       like ?
  `

  let [dados] = await conexao.query(comando, [ '%' + busca + '%',])
  return dados;
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