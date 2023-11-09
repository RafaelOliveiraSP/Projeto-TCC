import { inserirCliente, consultar, listarTodos, listaLogins} from '../repository/cadastroRepository.js';

import { Router } from 'express';
const endpoints = Router();

  /*  Adiciona um Cliente  */

endpoints.post('/inserirCliente', async (req, resp) => {

  try{
    let cliente = req.body;

      if(!cliente.nome)
        throw new Error('Nome obrigatório!');

      if(!cliente.sobrenome)
        throw new Error('Sobrenome obrigatório!');

      if(!cliente.usuario)
        throw new Error('Usuário obrigatório!');

      let r1 = await consultar(cliente.usuario)
      if (r1.length > 0)
        throw new Error('Usuário já cadastrado!');

      if(!cliente.cpf)
        throw new Error('CPF obrigatório'); 

      let r2 = await consultar(cliente.cpf)
      if (r2.length > 0)
        throw new Error('CPF já cadastrado!');

      if(!cliente.sexo)
        throw new Error('Sexo obrigatório!'); 

      if(!cliente.nascimento)
        throw new Error('Data de Nascimento obrigatória!');

      if(!cliente.telefone)
        throw new Error('Telefone obrigatório!');

      let r3 = await consultar(cliente.telefone)
      if (r3.length > 0)
        throw new Error('Telefone já cadastrado!');

      if(!cliente.email)
        throw new Error('Email obrigatório!');

      let r4 = await consultar(cliente.email)
        if (r4.length > 0)
          throw new Error('Email já cadastrado!');

      if(!cliente.senha)
        throw new Error('Senha obrigatória!');

        let r = await inserirCliente(cliente)
        resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
})


/*  Verefica dados Login*/

endpoints.post('/verificarLogin', async (req, resp) => {
  try{
    let login = req.body;

    let r1 = await listaLogins(login)

    if(r1.length === 0) 
      throw new Error('Você não possui cadastro!');


  resp.status(204).send()
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


/* Busca todos os clientes*/

endpoints.get('/buscarClientes', async (req, resp) => {
  try {
    let r = await listarTodos();
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


export default endpoints;