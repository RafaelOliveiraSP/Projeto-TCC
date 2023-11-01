import { listarMarcas } from '../repository/marcasRepository.js';
import { listarTamanhos } from '../repository/tamanhoRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/marcas', async (req, resp) => {
  let r = await listarMarcas();
  resp.send(r);
});

endpoints.get('/tamanhos', async (req, resp) => {
    let r = await listarTamanhos();
    resp.send(r);
  });

  export default endpoints;