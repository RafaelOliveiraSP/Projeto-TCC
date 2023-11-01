import conexao from "./connection.js";

export async function listarMarcas(){
    let comando = `
        select id_marca       id,
               ds_marca       marca
        from   tb_marca`;

        let [dados] = await conexao.query(comando);
        return dados;
}

export async function buscarMarcaPorId(id) {
    let comando = `
        select  * 
        from    tb_marca 
        where   id_marca = ?`;

    let [dados] = await conexao.query(comando, [id]);
    return dados;
  }