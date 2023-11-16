import conexao from "./connection.js";

/* Adiciona um adm*/

export async function InserirAdm(adm){
    let comando =`
        insert into tb_admin (ds_email, ds_senha)
                     values  (?,?)
    `

    let [resp] = await conexao.query(comando,
        [
          adm.email,
          adm.senha
        ])
      
      adm.id = resp.insertId;
      return adm;
}

/* Verifica login adm */

export async function listaAdms(email, senha){
  let comando = `
    select  id_admin    Id,
            ds_email    Email,							
            ds_senha 	  Senha					 
    from tb_admin where ds_email = ? and
                      ds_senha = ?                           
  `

  let [dados] = await conexao.query(comando,
    [
      email,
      senha
    ]
    );
  return dados[0];
}