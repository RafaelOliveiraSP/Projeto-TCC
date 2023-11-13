import { listarMarcas } from '../repository/marcasRepository.js';
import { listarTamanhos } from '../repository/tamanhoRepository.js';

import { Router } from 'express';
import { cadastrarImagens } from '../repository/cadastroProdutoRepository.js';
const endpoints = Router();

endpoints.post('/inserirProduto', async (req, resp) => {
  try{
    let produto = req.body;
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

endpoints.get('/marcas', async (req, resp) => {
  try{
    let r = await listarMarcas();

    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

endpoints.get('/tamanhos', async (req, resp) => {
    try{
      let r = await listarTamanhos();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
});

endpoints.post('/imagemproduto', async (req, resp) => {
    try {
        const infoImagem = {
            idProduto: req.body.idProduto,
            caminho: req.body.caminho
        }

        const cadastrar = cadastrarImagens(infoImagem);
        resp.send(cadastrar) 
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
});

  export default endpoints;