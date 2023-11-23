import axios from 'axios';
import { API_URL } from '../constants.js';

const api = axios.create({
    baseURL: API_URL
})


export async function loginAdmin(email, senha){
    const r = await api.post('/verificarLoginAdm', {
        email: email,
        senha: senha
    });

    return r.data;
}

export async function inserirProduto(nome, codigo, descricao, estoque, preco, precopromocional, marca, cor){
    const r1 = await api.post('/inserirProduto', {
        nome: nome,
        codigo: codigo,
        descricao: descricao,
        estoque: estoque,
        preco: preco,
        precopromocional: precopromocional,
        marca: marca,
        cor: cor
    });
    
    return r1.data;
}

export async function enviarImagem(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/inserirProduto/${id}/capa`, formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function alterarProduto( id ,nome, codigo, descricao, estoque, preco, precopromocional, marca, cor){
    const r1 = await api.put(`/alterarProduto/${id}`, {
        nome: nome,
        codigo: codigo,
        descricao: descricao,
        estoque: estoque,
        preco: preco,
        precopromocional: precopromocional,
        marca: marca,
        cor: cor
    });
    
    return r1.data;
}

export async function deletarProduto(id){
    const resposta = await api.delete(`/deletarProduto/${id}`);
    return resposta.status;
}

export async function listaDeProdutos(){
    const resposta = await api.get('/listarProdutos');
    return resposta.data;
}

export async function listaProdutosPorNome(nome){
    const resposta = await api.get(`/buscarProdutoPorNome?nome=${nome}`);
    return resposta.data;
}

export async function listaProdutosPorId(id){
    const resposta = await api.get(`/buscarProdutoPorId/${id}`);
    return resposta.data;
}

export async function listaProdutosPorMarca(marca){
    const resposta = await api.get(`/buscarProdutoPorMarca/${marca}`)
    return resposta.data;
}

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}
