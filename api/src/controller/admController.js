import { listaAdms } from '../repository/admRepository.js';

import { Router } from 'express';
const endpoints = Router();

/*  Verefica dados Login*/

endpoints.post('/verificarLoginAdm', async (req, resp) => {
    try{
      const {email, senha} = req.body;
  
      let r1 = await listaAdms(email, senha)
  
      if(!r1) 
        throw new Error('Credenciais inválidas!');
  
  
      resp.send(r1)
    }
    catch (err) {
      resp.status(401).send({ erro: err.message });
    }
  })

  export default endpoints;