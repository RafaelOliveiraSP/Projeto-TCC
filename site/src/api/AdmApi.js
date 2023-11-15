import axios from 'axios';
import { API_URL } from '../constants.js';


export async function loginAdmin(email, senha){
    const r = await axios.post( API_URL + '/verificarLoginAdm', {
        email: email,
        senha: senha
    });

    return r.data;
}