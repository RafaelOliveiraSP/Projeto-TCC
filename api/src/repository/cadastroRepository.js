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
