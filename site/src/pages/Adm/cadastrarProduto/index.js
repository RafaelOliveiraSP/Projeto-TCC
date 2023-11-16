import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { API_URL } from '../../../constants.js';
import { toast } from 'react-toastify';

import axios from "axios";
import storage from 'local-storage';

import { enviarImagem, inserirFilme } from '../../../api/AdmApi';


export default function CadastrarProduto(){

    const [nome, setNome]                           = useState('');
    const [codigo, setCodigoProduto]                = useState('');
    const [descricao, setDescricao]                 = useState('');
    const [estoque, setEstoque]                     = useState('');
    const [preco, setPreco]                         = useState('');
    const [precopromocional, setPrecoPromocional]   = useState('');
    const [opcoesMarcas, setOpcoesMarcas]           = useState([]);
    const [marca, setMarca]                         = useState(0);
    const [cor, setCor]                             = useState('');

    const [primeiraImg, setPrimeiraImg]             = useState();

    async function listarMarcas(){
        let r = await axios.get(  API_URL + '/marcas');
        setOpcoesMarcas(r.data);
    }

    async function cadastrarNovoProduto() {
        try {
            if(!primeiraImg)
                throw new Error('Escolha a imagem do produto');
            
            const novoProduto = await inserirFilme(nome, codigo, descricao, estoque, preco, precopromocional, marca, cor);
            const r = await enviarImagem(novoProduto.id, primeiraImg);


            toast.success(`Produto foi cadastrado com sucesso!`)
            limparFormulario();
        }
        catch(err) {
            if(err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    function limparFormulario(){
        setNome('');
        setCodigoProduto('');
        setDescricao('');
        setEstoque('');
        setPreco('');
        setPrecoPromocional('');
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

    function verificarPreco(e){
        let n = Number(e);

        if(isNaN(n)){
            setPreco('')
        }
        else{
            let cont = 9;
            let tam = n + "";

            if(cont >= tam.length){
                setPreco(n)
            }
        }
    }

    function verificarPrecoPromocional(e){
        let n = Number(e);

        if(isNaN(n)){
            setPrecoPromocional('')
        }
        else{
            let cont = 9;
            let tam = n + "";

            if(cont >= tam.length){
                setPrecoPromocional(n)
            }
        }
    }

    // adicionando imagens

    // 1ª imagem  -----------------------------------------------------

    function escolherPrimeiraImg(){
        document.getElementById('primeira-img').click();
    }

    function mostrarPrimeiraImagem(){
        return URL.createObjectURL(primeiraImg);
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

                <div className='cartao-produto'>
                    <div className='formulario-produto'> 
                        <div className='colocar-primeira-imagm'>
                            <div onClick={escolherPrimeiraImg}>

                                {!primeiraImg &&
                                    <i class="fa-solid fa-plus" style={{fontSize: '28px', color: '#000'}}></i>
                                }

                                {primeiraImg &&
                                    <img src={mostrarPrimeiraImagem()} className='prm-fr-select' alt='prm-img' />
                                }
                                <input type='file' id='primeira-img' onChange={e => setPrimeiraImg(e.target.files[0])}/>
                            </div>
                        </div>
            
                        <div className='input-duplo'>
                            <span>Nome:</span>
                            <input id='primeiro-input' type='text' value={nome} onChange={e => setNome(e.target.value)}/>

                            <span style={{textAlign: 'center'}}>Código:</span>
                            <input type='text' value={codigo} onChange={e => verificarCodigo(e.target.value)}/>
                        </div>

                        <div>
                            <span>Descrição:</span>
                            <div><input type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/></div>
                        </div>
                        
                        <div>
                            <span>Estoque:</span>
                            <div><input type='text' value={estoque} onChange={e => verificarEstoque(e.target.value)}/></div>
                        </div>

                        <div>
                            <span>Valor:</span>
                            <div><input type='text' value={preco} onChange={e => verificarPreco(e.target.value)}/></div>
                        </div>

                        <div>
                            <span>Promoção:</span>
                            <div><input type='text' value={precopromocional} onChange={e => verificarPrecoPromocional(e.target.value)}/></div>
                        </div>

                        <div className='input-duplo'>
                            <span>Marca:</span>
                            <select value={marca} onChange={e => setMarca(e.target.value)} style={{width: '175px'}}>
                            <option value={0}> Selecione </option>
                                {opcoesMarcas.map(item =>
                                    <option value={item.id}> {item.marca} </option>  
                                )}
                            </select>

                            <span style={{width: '73px', textAlign: 'center'}}>Cor:</span>
                            <input type='color' value={cor} onChange={e => setCor(e.target.value)}/>
                        </div>


                        <div className='botaoCadastrar' onClick={cadastrarNovoProduto}><button>Adicionar Produto</button></div>
                    </div>
                </div>
                
                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>
            </div>
            <Rodape />
        </div>
    )
}



