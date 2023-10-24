import { listarTamanhos } from '../repository/tamanhoRepository.js';

import { Router } from 'express';
const endpoints = Router();



endpoints.get('/listartamanhos', async (req, resp) => {
    let r = await listarTamanhos();
    resp.send(r);
  });

  export default endpoints;