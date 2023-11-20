import { buscarMarcaPorId, verificarCodigo, inserirProduto, inserirImagem, BuscarTodosOsProdutos, BuscarProdutosPorId, BuscarProdutosPorNome } from '../repository/cadastroProdutoRepository.js';
import { listarMarcas } from '../repository/marcasRepository.js';
import { listarTamanhos } from '../repository/tamanhoRepository.js';

import  multer from 'multer';

import { Router } from 'express';
const endpoints = Router();

const upload = multer({dest: 'storage/imagensProdutos'});

endpoints.post('/inserirProduto', async (req, resp) => {
  try{
    let produto = req.body;

    if(!produto.nome)
      throw new Error('Informe o nome do produto!');

    if(!produto.codigo)
      throw new Error('Informe o código do produto!');
    
    const r1 = await verificarCodigo(produto.codigo)
      if(r1.length > 0)
      throw new Error('Código já cadastrado!');

    if(!produto.descricao)
      throw new Error('Dê uma pequena descrição do produto!');

    if(!produto.estoque)
      throw new Error('Digite a quantidade disponível no estoque!');

    if(!produto.preco)
      throw new Error('Informe o preço desse produto!');
    
    if(!produto.precopromocional)
      throw new Error('Informe o preço promocional desse produto!');

    if(!produto.marca)
      throw new Error('Informe a marca desse produto!');

    const r2 = await buscarMarcaPorId(produto.marca);
      if(r2.length === 0)
      throw new Error('Marca Inválida');

    if(!produto.cor)
      throw new Error('Informe a cor desse produto!');

      const produtoInserido = await inserirProduto(produto);

      resp.send(produtoInserido);
  }
  catch (err) {
    resp.status(400).send({ 
      erro: err.message 
    });
  }
})

// Insere uma imagem

endpoints.put('/inserirProduto/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        if(!req.file)
          throw new Error('A imagem do tênis!')   

        const { id } = req.params;
        const imagem = req.file.path;
        
        const dados = await inserirImagem(imagem, id);
        if(dados != 1)
          throw new Error('A imagem não pode ser salva!')

        resp.status(204).send();
    } catch (error) {
        resp.status(500).send({
          erro: error.message
        })
    }
});

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

// Lista todos os produtos cadastrados

endpoints.get('/listarProdutos', async (req, resp) => {
  try{
    let r = await BuscarTodosOsProdutos()
    resp.send(r)
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

// Busca produtos pelo id

endpoints.get('/buscarProdutoPorId/:id', async (req, resp) => {
  try {
      const { id } = req.params;
      const r = await BuscarProdutosPorId(id);
      
      if(r.length === 0)
        throw new Error('Esse produto não existe!')
      
      resp.send(r);
  } catch (error) {
      resp.status(500).send({
        erro: error.message
      })
  }
});

// Busca produtos pelo nome

endpoints.get('/buscarProdutoPorNome', async (req, resp) => {
  try {
      const { nome } = req.query;

      const r = await BuscarProdutosPorNome(nome);
      
      if(r.length === 0 )
        throw new Error('Esse produto não existe!')
        
      else
        resp.send(r);
  } catch (error) {
      resp.status(500).send({
        erro: error.message
      })
  }
});



export default endpoints;