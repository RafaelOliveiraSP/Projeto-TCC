import conexao from "./connection.js";

/* Cadastra um novo cartão */

export async function CadastrarCartao(cartao) {
    let comando = `
        insert into tb_dados_cartao(nr_cartao, nm_cartao, nr_cod_seguranca, dt_vencimento, qtd_parcelas) 
                        values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
  
    let [resp] = await conexao.query(comando,
      [
        cliente.nome,
        cliente.sobrenome,
        cliente.usuario,
        cliente.cpf,
        cliente.sexo,
        cliente.nascimento,
        cliente.telefone,
        cliente.email,
        cliente.senha
      ])
  
      cliente.id = resp.insertId;
      return cliente;
  }