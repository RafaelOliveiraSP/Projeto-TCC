import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { API_URL } from '../../../constants.js';
import { toast } from 'react-toastify';

import axios from "axios";
import storage from 'local-storage';


export default function CadastrarProduto(){
    
    const [fotos, setFotos] = useState([]);
    
    const [idProduto, setIdProduto]                 = useState(0);
    const [nome, setNome]                           = useState('');
    const [codigo, setCodigoProduto]                = useState('');
    const [descricao, setDescricao]                 = useState('');
    const [estoque, setEstoque]                     = useState('');
    const [valor, setValor]                         = useState();
    const [valorPromocional, setValorPromocional]   = useState();
    const [opcoesMarcas, setOpcoesMarcas]           = useState([]);
    const [marca, setMarca]                         = useState(0);
    const [cor, setCor]                             = useState('');

    async function listarMarcas(){
        let r = await axios.get(  API_URL + '/marcas');
        setOpcoesMarcas(r.data);
    }

    async function cadastrarNovoProduto() {
        try {
          let produto = {
            id: idProduto,
            nome: nome,
            codigo: codigo,
            descricao: descricao,
            estoque: estoque,
            preco: valor,
            precopromocional: valorPromocional,
            marca: marca,
            cor: cor
          }
        
          if (idProduto === 0) {
            await axios.post(API_URL + '/inserirProduto', produto);
            toast.dark('Produto cadastrado com sucesso!')
            limparFormulario();
          }
        } 
        catch (err) {
          toast.error(err.response.data.erro);
        }
    }

    function limparFormulario(){
        setIdProduto(0);
        setNome('');
        setCodigoProduto('');
        setDescricao('');
        setEstoque('');
        setValor('');
        setValorPromocional('');
        setMarca(0);
        setCor('');
    }

    function verificarCodigo(e){
        let n = Number(e);

        if(isNaN(n)){
            setCodigoProduto('')
        }
        else{
            let cont = 6;
            let tam = n + "";

            if(cont >= tam.length){
                setCodigoProduto(n)
            }
        }
    }

    function verificarEstoque(e){
        let n = Number(e);

        if(isNaN(n)){
            setEstoque('')
        }
        else{
            let cont = 10;
            let tam = n + "";

            if(cont >= tam.length){
                setEstoque(n)
            }
        }
    }

    function verificarValor(e){
        let n = Number(e);

        if(isNaN(n)){
            setValor('')
        }
        else{
            let cont = 9;
            let tam = n + "";

            if(cont >= tam.length){
                setValor(n)
            }
        }
    }

    function verificarValorPromocional(e){
        let n = Number(e);

        if(isNaN(n)){
            setValorPromocional('')
        }
        else{
            let cont = 9;
            let tam = n + "";

            if(cont >= tam.length){
                setValorPromocional(n)
            }
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        
        listarMarcas();
        
        if (storage('usuario-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado')){
            navigate('/');
        }
        else if(!storage('adm-logado') && !storage('usuario-logado')){
            navigate('/');
        }    
          
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='pagina-cadastro-produto'>
            <Cabecalho />
            <div className='dados-produtos'>

                <h1>Cadastre um novo produto</h1>

                <div className='formulario-produto'>
                    
                    <div className='colocar-imagens'>

                        <input type='text' />
                        <div>
                             
                        </div>
                    </div>
                    {fotos.map((item) => {
                        return (
                            <main>
                                <img src={item} />
                            </main>
                        )
                    })}
                    <div className='input-duplo'>
                        <span>Nome:</span>
                        <input id='primeiro-input' type='text' value={nome} onChange={e => setNome(e.target.value)}/>

                        <span>Código:</span>
                        <input type='text' value={codigo} onChange={e => verificarCodigo(e.target.value)}/>
                    </div>

                    <div>
                        <span>Descrição:</span>
                        <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    </div>
                    
                    <div>
                        <span>Estoque:</span>
                        <input type='text' value={estoque} onChange={e => verificarEstoque(e.target.value)}/>
                    </div>

                    <div>
                        <input type='text' value={valor} onChange={e => verificarValor(e.target.value)}/>
                        <span>Valor:</span>
                    </div>

                    <div>
                        <span>Valor promocional:</span>
                        <input type='text' value={valorPromocional} onChange={e => verificarValorPromocional(e.target.value)}/>
                    </div>

                    <div className='input-duplo'>
                        <span>Marca:</span>
                        <select value={marca} onChange={e => setMarca(e.target.value)} style={{width: '175px'}}>
                        <option value={0}> Selecione </option>
                            {opcoesMarcas.map(item =>
                                <option value={item.id}> {item.marca} </option>  
                            )}
                        </select>

                        <span style={{width: '54.84px', textAlign: 'right'}}>Cor:</span>
                        <input type='color' value={cor} onChange={e => setCor(e.target.value)}/>
                    </div>


                    <div className='botaoCadastrar' onClick={cadastrarNovoProduto}><button>Adicionar Produto</button></div>
                </div>
                
                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>
            </div>
            <Rodape />
        </div>
    )
}






    // const [urlImagem, setUrlImagem] = useState('');
 
    // function adicionarImagem () {
    //     const img = new Image();
    //     img.src = urlImagem;

    //     img.onload = () => {
    //         if(id !== 0) {
    //             setFotosAdicionadas([...fotosAdicionadas, urlImagem])
    //             let object = { caminho: urlImagem }
    //             setFotos([...fotos, object])
    //             setUrlImagem('');
    //         }
    //         else{
    //             setFotos([...fotos, urlImagem]);
    //             setUrlImagem('');
    //         }
    //     }
    //     img.onerror = () => {
    //         toast.error('URL Inválida!')
    //     }
    // }

    // async function cadastrarImagens(idProduto) {
    //     try {
    //         if(id !== 0){

    //             if(fotosAdicionadas) {
    //                 for (let item of fotosAdicionadas) {
    //                     let url = URLRota + "/imagemproduto";
    //                     const imagem = {
    //                         idProduto: idProduto,
    //                         caminho: item
    //                     }
    //                     await axios.post(url, imagem)
    //                 }
    //             }
    //             if(fotosExcluir) {
    //                 await excluirImagens(fotosExcluir, idProduto)
    //             }
    //         }
    //         else{
    //             for (let item of fotos) {
    //                 let urlFormando = URLRota + "/imagemproduto";
    //                 const imagem = {
    //                     idProduto: idProduto,
    //                     caminho: item
    //                 }
    //                 await axios.post(urlFormando, imagem)
    //             }
    //         }

    //     } catch (err) {
    //         if(err.response)
    //             toast.warn(err.response.data.erro)
    //         else
    //             toast.warn(err.message)
    //     }
    // }