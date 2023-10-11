import conexao from "./connection.js";


/* Faz cadastro de um novo cliente */

export async function inserirCliente(cliente) {
  let comando = `
      insert into tb_cliente (nm_nome, ds_sobrenome, ds_usuario, ds_cpf, ds_sexo, dt_nascimento, ds_telefone, ds_email, ds_senha) 
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

/* Altera o cadastro do cliente */

export async function alterar(id, cliente) {
  let comando = `
      update tb_cliente 
         set nm_nome         = ?,
             ds_sobrenome    = ?,
             ds_usuario      = ?,
             ds_cpf          = ?,
             ds_sexo         = ?,
             dt_nascimento   = ?,
             ds_telefone     = ?,
             ds_email        = ?,
             ds_senha        = ?
       where id_cliente      = ?
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
      cliente.senha,
      id
    ])
  
  return resp.affectedRows;
}


/* Filtrar por marca*/

export async function consultar(busca) {
  let comando = `
      select id_cliente         as  Id,
             nm_nome			      as  Nome,
             ds_sobrenome       as  Sobrenome,		
             ds_usuario         as  Usuario,				    
             ds_cpf             as  CPF, 			
             ds_sexo            as  Sexo,				 
             dt_nascimento      as  DataNascimento,				     
             ds_telefone        as  Telefone,			 
             ds_email           as  Email,
             ds_senha           as  Senha
        from tb_cliente
        where ds_usuario       like ?
           or ds_cpf           like ?
           or ds_telefone      like ?
           or ds_email         like ?
        order 
          by id_cliente
  `

  let [dados] = await conexao.query(comando,
    [
      '%' + busca + '%',
      '%' + busca + '%',
      '%' + busca + '%',
      '%' + busca + '%'
    ])
  return dados;
}

/* Lista todos os clientes */

export async function listarTodos(){
  let comando = `
      select id_cliente         as  Id,
             nm_nome			      as  Nome,
             ds_sobrenome       as  Sobrenome,		
             ds_usuario         as  Usuario,				    
             ds_cpf             as  CPF, 			
             ds_sexo            as  Sexo,				 
             dt_nascimento      as  DataNascimento,				     
             ds_telefone        as  Telefone,			 
             ds_email           as  Email,
             ds_senha           as  Senha
        from tb_cliente
  `

  let [dados] = await conexao.query(comando);
  return dados;
}

/* Busca login dos usuarios */

export async function listaLogins(login){
  let comando = `
    select  id_cliente          as  Id,
            nm_nome			        as  Nome,
            ds_sobrenome        as  Sobrenome,		
            ds_usuario          as  Usuario,				    
            ds_cpf              as  CPF, 			
            ds_sexo             as  Sexo,				 
            dt_nascimento       as  DataNascimento,				     
            ds_telefone         as  Telefone,			 
            ds_email            as  Email,
            ds_senha            as  Senha
        from tb_cliente where ds_email = ? and
                              ds_senha = ?
  `

  let [dados] = await conexao.query(comando,
    [
      login.email,
      login.senha
    ]
    );
  return dados;
}





























// export async function listarTodos() {
//   let comando = `
//     select id_agenda      as id,
//            nm_contato     as contato,
//            ds_telefone    as telefone,
//            ds_email       as email,
//            bt_favorito    as favorito,
//            dt_cadastro    as dtCadastro 
//       from tb_agenda
//   `

//   let [dados] = await connection.query(comando);
//   return dados;
// }


// export async function listarPorNome(nome) {
//   let comando = `
//     select id_agenda       as id,
//             nm_contato     as contato,
//             ds_telefone    as telefone,
//             ds_email       as email,
//             bt_favorito    as favorito,
//             dt_cadastro    as dtCadastro
//       from tb_agenda where nm_contato like ?
//   `

//   let [dados] = await connection.query(comando, ['%'+nome+'%']);
//   return dados;
// }


// export async function listarFavoritos() {
//   let comando = `
//     select id_agenda       as id,
//             nm_contato     as contato,
//             ds_telefone    as telefone,
//             ds_email       as email,
//             bt_favorito    as favorito,
//             dt_cadastro    as dtCadastro
//       from tb_agenda where bt_favorito = true
//   `

//   let [dados] = await connection.query(comando);
//   return dados;
// }


// export async function listarPorIntervalo(inicio, fim) {
//   let comando = `
//       select id_agenda   as id,
//           nm_contato     as contato,
//           ds_telefone    as telefone,
//           ds_email       as email,
//           bt_favorito    as favorito,
//           dt_cadastro    as dtCadastro
//       from tb_agenda where dt_cadastro between ? and ?
//   `

//   let [dados] = await connection.query(comando, [inicio, fim]);
//   return dados;
// }


// export async function inserir(agenda) {
//   let comando = `
//     insert into tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
//                    values (?, ?, ?, ?, ?)
//   `

//   let [info] = await connection.query(comando,
//     [
//       agenda.nome,
//       agenda.telefone,
//       agenda.email,
//       agenda.favorito,
//       agenda.cadastro
//     ]);
  
//   agenda.id = info.insertId;
//   return agenda;
// }



// export async function alterar(id, agenda) {
//   let comando = `
//     update tb_agenda 
//       set nm_contato = ?, 
//           ds_telefone = ?, 
//           ds_email = ?, 
//           bt_favorito = ?, 
//           dt_cadastro = ?
//     where id_agenda = ?
//   `

//   let [info] = await connection.query(comando,
//     [
//       agenda.nome,
//       agenda.telefone,
//       agenda.email,
//       agenda.favorito,
//       agenda.cadastro,
//       id
//     ]);
  
//   let linhasAfetadas = info.affectedRows;
//   return linhasAfetadas;
// }



// export async function deletar(id) {
//   let comando = `
//     delete from tb_agenda where id_agenda = ?
//   `

//   let [info] = await connection.query(comando, [id]);
//   let linhasAfetadas = info.affectedRows;
//   return linhasAfetadas;
// }

