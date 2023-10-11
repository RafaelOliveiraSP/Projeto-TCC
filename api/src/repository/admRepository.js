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