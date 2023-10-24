import conexao from "./connection.js";

export async function listarTamanhos(){
    let comando = `
        select id_tamanho       id,
               ds_numero        numero
        from   tb_tamanho`;

        let [dados] = await conexao.query(comando);
        return dados;
}