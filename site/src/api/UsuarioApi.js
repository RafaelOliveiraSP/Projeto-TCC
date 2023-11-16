import axios from 'axios';
import { API_URL } from '../constants.js';


export async function login(email, senha){
    const r = await axios.post( API_URL + '/verificarLogin', {
        email: email,
        senha: senha
    });

    return r.data;
}