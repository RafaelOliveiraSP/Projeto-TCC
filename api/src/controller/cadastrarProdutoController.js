import { Router } from 'express';
import { buscarMarcaPorId, cadastrarImagens, verificarCodigo, inserirProduto } from '../repository/cadastroProdutoRepository.js';
import { listarMarcas } from '../repository/marcasRepository.js';
import { listarTamanhos } from '../repository/tamanhoRepository.js';

import  multer from 'multer';

const endpoints = Router();
const upload = multer({dest: 'storage/imagensProdutos'});

endpoints.post('/inserirProduto', async (req, resp) => {
  try{
    let produto = req.body;

    if(!produto.nome)
      throw new Error('Informe o nome do produto!');

    if(!produto.codigo)
      throw new Error('Informe o código do produto!');
    
    let r1 = await verificarCodigo(produto.codigo)
      if(r1.length > 0)
      throw new Error('Código já cadastrado!');

    if(!produto.descricao)
      throw new Error('Dê uma pequena descrição do produto!');

    if(!produto.estoque)
      throw new Error('Digite a quantidade disponível no estoque!');

    if(!produto.preco)
      throw new Error('Informe o valor desse produto!');
    
    if(!produto.precopromocional)
      throw new Error('Informe o valor promocional(antes do preço atual) desse produto!');

    if(!produto.marca)
      throw new Error('Informe a marca desse produto!');

    let r2 = await buscarMarcaPorId(produto.marca);
      if(r2.length === 0)
      throw new Error('Marca Inválida');

    if(!produto.cor)
      throw new Error('Informe a cor desse produto!');

      let r = await inserirProduto(produto)
      resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

// Lista todas as marcas

endpoints.get('/marcas', async (req, resp) => {
  try{
    let r = await listarMarcas();

    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

// Lista de tamanhos

endpoints.get('/tamanhos', async (req, resp) => {
    try{
      let r = await listarTamanhos();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
});

// Insere uma imagem

endpoints.post('/inserirProduto/:id/capa', upload.single('Capa'), async (req, resp) => {
    try {
         
        const { id } = req.params;
        const imagem = req.file.path;
        
        const dados = await cadastrarImagens(id, imagem);
        if(dados != 1)
          throw new Error('Imagem não pode ser salva')

        resp.status(204).send();
    } catch (error) {
        resp.status(500).send({
            erro: error.message
        })
    }
});

export default endpoints;