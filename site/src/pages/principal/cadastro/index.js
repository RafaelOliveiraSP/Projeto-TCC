import './index.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { API_URL } from '../../../constants.js';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import axios from 'axios';


export default function Cadastrar(){

    const [idCliente, SetIdCliente]   = useState(0);
    const [nome, SetNome]             = useState('');
    const [sobrenome, SetSobrenome]   = useState('');
    const [usuario, SetUsuario]       = useState('');
    const [cpf, SetCpf]               = useState('');
    const [sexo, SetSexo]             = useState('');
    const [nascimento, SetNascimento] = useState('');
    const [telefone, SetTelefone]     = useState('');
    const [email, SetEmail]           = useState('');
    const [senha, SetSenha]           = useState('');

    

    const navigate = useNavigate();

    async function salvar() {
      try {
        let cliente = {
          id: idCliente,
          nome: nome,
          sobrenome: sobrenome,
          usuario: usuario,
          cpf: cpf,
          sexo: sexo,
          nascimento: nascimento,
          telefone: telefone,
          email: email,
          senha: senha
        }
      
        if (idCliente === 0) {
           await axios.post(API_URL + '/inserirCliente', cliente);
           alert('Cliente cadastrado com sucesso!');
           navigate('/')
        }
      } 
      catch (err) {
        toast.error(err.response.data.erro);
        alert('Você não possui cadastro!!')  
      }
    }

    return(
        <div className='pagina-cadastro'>
            <Cabecalho /> 
            <div className='cartao'>
                <h1 className='titulo'>Crie sua conta na Fors</h1>

                <div className='formulario-cadastro'>


                    <span> Nome: </span>
                    <input type='text' value={nome} onChange={e => SetNome(e.target.value)} />

                    <span> Sobrenome: </span>
                    <input type='text' value={sobrenome} onChange={e => SetSobrenome(e.target.value)}/>

                    <span > Usuário: </span>
                    <input type='text' value={usuario} onChange={e => SetUsuario(e.target.value)}/>

                    <span> CPF: </span>
                    <input type='text' value={cpf} onChange={e => SetCpf(e.target.value)}/>
                
                    <span>Sexo: </span>
                    <input type='text' value={sexo} onChange={e => SetSexo(e.target.value)}/>
                  
                    <span >Data de nascimento:</span>
                    <input type='date' value={nascimento} onChange={e => SetNascimento(e.target.value)}/>

                    <span >Telefone: </span>
                    <input type='text' value={telefone} onChange={e => SetTelefone(e.target.value)}/>

                    <span >Email: </span>
                    <input type='text' value={email} onChange={e => SetEmail(e.target.value)}/>

                    <span > Senha:</span>
                    <input type='password' value={senha} onChange={e => SetSenha(e.target.value)}/>
                    {SetIdCliente}
                </div>

                <div className='botao-cadastrar'>
                    <button className='cadastro' onClick={salvar}>Cadastrar</button>
                   
                </div>
                
                <div className='texto-login'>
                    <span >Já é um usuário?<Link to='/login'>Fazer Login</Link></span>
                </div>
            </div>
            <Rodape/>
        </div>
        
    )
}