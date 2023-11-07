import { CadastrarCartao } from '../repository/cartoesRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/inserirCartao', async (req, resp) => {

    try{
        let cartao = req.body;

        if(!cartao.numero)
            throw new Error('Digite o número de seu cartão!');

        if(!cartao.nome)
            throw new Error('Digite o nome impresso no cartão!');

        if(!cartao.codigo)
            throw new Error('Digite o código de segurança de seu cartão');

        if(isNaN(cartao.codigo))
            throw new Error('O código de segurança deve ser um número')
    
        if(!cartao.vencimento)
            throw new Error('Digite o vencimento de seu cartão');

        
        let r = await CadastrarCartao(cartao)
        resp.send(r);
    }
    catch (err){
      resp.status(500).send({ erro: err.message });
    }
})

export default endpoints;