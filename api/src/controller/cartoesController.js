import { CadastrarCartao, consultarNumeroCard } from '../repository/cartoesRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/inserirCartao', async (req, resp) => {

    try{
        let cartao = req.body;

        if(!cartao.nome)
            throw new Error('Digite o nome impresso no cartão!');

        if(!cartao.numero)
            throw new Error('Digite o número de seu cartão!');

        let r1 = await consultarNumeroCard(cartao.numero)
            if(r1.length != 0)
            throw new Error('Cartão já cadastrado!');

        if(!cartao.codigo)
            throw new Error('Digite o código de segurança de seu cartão');

        if(!cartao.vencimento)
            throw new Error('Insira a data de vencimento do seu cartão');
        
        let r = await CadastrarCartao(cartao)
        resp.send(r);
    }
    catch (err){
      resp.status(500).send({ erro: err.message });
    }
})

export default endpoints;