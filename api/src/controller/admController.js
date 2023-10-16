import { listaAdms } from '../repository/admRepository.js';

import { Router } from 'express';
const endpoints = Router();

/*  Verefica dados Login*/

endpoints.post('/verificarLoginAdm', async (req, resp) => {
    try{
      let login = req.body;
  
      let r1 = await listaAdms(login)
  
      if(r1.length === 0) 
        throw new Error('Você não possui cadastro!');
  
  
    resp.status(204).send()
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })