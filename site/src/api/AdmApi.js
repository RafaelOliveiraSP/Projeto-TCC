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

export async function inserirFilme(nome, codigo, descricao, estoque, preco, precopromocional, marca, cor){
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
