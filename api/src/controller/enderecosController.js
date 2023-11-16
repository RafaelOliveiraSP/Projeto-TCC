import { CadastrarEnderecos } from "../repository/enderecosRepository.js";

import { Router } from "express";
let endpoints = Router();

endpoints.post('/cadastrarEndereco', async (req, resp) => {
    try{
        let endereco = req.body;

        if(!endereco.cep)
            throw new Error('Informe o CPE de sua residência!')

        if(!endereco.endereco)
            throw new Error('Informe o seu endereço') 

        if(!endereco.numero)
            throw new Error('Informe o número de sua residência!') 

        let r = CadastrarEnderecos(endereco);
        resp.send(r);
    }
    catch(err){
        resp.status(500).send({ erro: err.message });
    }
}) 

export default endpoints;