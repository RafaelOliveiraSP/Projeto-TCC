import conexao from "./connection.js";


// Cadastra novo endereço

export async function CadastrarEnderecos(endereco){
    let comando = `
            insert into tb_endereco(ds_cep, ds_endereco, ds_numero_casa)
                             values(?, ?, ?);
    `

    let [dados] = await conexao.query(comando, 
        [
            endereco.cep,
            endereco.endereco,
            endereco.numero 
        ])

    endereco.id = dados.insertId;
    return endereco;
}