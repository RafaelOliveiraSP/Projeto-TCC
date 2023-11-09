import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import cadastroController from './controller/cadastroController.js';
import admController from './controller/admController.js';
import cadastrarProdutoController from './controller/cadastrarProdutoController.js';
import cartoesController from  './controller/cartoesController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(cadastroController);
servidor.use(admController);
servidor.use(cadastrarProdutoController);
servidor.use(cartoesController);



servidor.listen(
  process.env.PORT,
  () => console.log(`API subiu na porta ${process.env.PORT}`));