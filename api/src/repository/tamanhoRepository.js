import conexao from "./connection.js";

export async function listarTamanhos(){
    let comando = `
        select id_tamanho       id,
               ds_numero        numero
        from   tb_tamanho`;

        let [dados] = await conexao.query(comando);
        return dados;
}

export async function buscarTipoPorId(id) {
    let comando = `
        select  * 
        from    tb_tamanho 
        where   id_tamanho = ?`;

    let [dados] = await conexao.query(comando, [id]);
    return dados;
  }