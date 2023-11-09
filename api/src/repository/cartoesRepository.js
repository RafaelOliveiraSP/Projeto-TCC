import conexao from "./connection.js";

/* Cadastra um novo cartão */

export async function CadastrarCartao (cartao){
    let comando = `
        insert into tb_dados_cartao (nr_cartao, nm_cartao, nr_cod_seguranca, dt_vencimento, qtd_parcelas) 
                             values (?, ?, ?, ?, ?)
    `
  
    let [resp] = await conexao.query(comando,
      [
        cartao.numero,
        cartao.nome,
        cartao.codigo,
        cartao.vencimento,
        cartao.parcelas
      ])
  
      cartao.id = resp.insertId;
      return cartao;
  }

 /* Consulta número do cartão*/

// export async function consultarNumeroCard(busca){
//     let comando = `
//         select *
//           from tb_dados_cartao
//           where tb_dados_cartao  like ?
//     `
  
//     let [dados] = await conexao.query(comando,
//       [
//         '%' + busca + '%'
//       ])
//     return dados;
// }