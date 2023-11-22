import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';

import { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { API_URL } from '../../../constants.js';
import { toast } from 'react-toastify';

import axios from "axios";
import storage from 'local-storage';

import { alterarProduto, enviarImagem, inserirProduto, listaProdutosPorId, buscarImagem } from '../../../api/AdmApi';


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

    const { id } = useParams();

    const [primeiraImg, setPrimeiraImg]             = useState();

    async function listarMarcas(){
        let r = await axios.get(  API_URL + '/marcas');
        setOpcoesMarcas(r.data);
    }

    
    async function ProdutoConsultado(){
        let r = await listaProdutosPorId(id)
        setNome(r.nome);
        setCodigoProduto(r.codigo);
        setDescricao(r.descricao);
        setEstoque(r.estoque);
        setPreco(r.preco);
        setPrecoPromocional(r.precopromocional);
        setMarca(r.marca);
        setCor(r.cor);
        setPrimeiraImg(r.imagem);
    }

    async function cadastrarNovoProduto() {
        try {
            if(!primeiraImg)
                throw new Error('Escolha a imagem do produto');

            if(!id){
                
                const novoProduto = await inserirProduto(nome, codigo, descricao, estoque, preco, precopromocional, marca, cor);
                await enviarImagem(novoProduto.id, primeiraImg);

                toast.success(`Produto foi cadastrado com sucesso!`)
                limparFormulario(); 
            }
            else{
                await alterarProduto(id, nome, codigo, descricao, estoque, preco, precopromocional, marca, cor);
                
                if(typeof(primeiraImg) == 'object')
                    await enviarImagem(id, primeiraImg);

                toast.success(`Produto foi alterado com sucesso!`);
                navigate('/');
            }

            
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
        setPrimeiraImg();
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
        
        let cont = 8;

        if(cont >= e.length){
            setPreco(e)
        }  
    }

    function verificarPrecoPromocional(e){
            let cont = 8;
            

        if(cont >= e.length){
            setPrecoPromocional(e);
        }
        
    }

    // adicionando imagens

    // 1ª imagem  -----------------------------------------------------

    function escolherPrimeiraImg(){
        document.getElementById('primeira-img').click();
    }

    function mostrarPrimeiraImagem(){
        if(typeof (primeiraImg) == 'object') {
          return URL.createObjectURL(primeiraImg);  
        }
        else {
            return buscarImagem(primeiraImg);
        }
        
    }

    

    const navigate = useNavigate();

    useEffect(() => {
        
        listarMarcas();
        if(id){
            ProdutoConsultado();
        }  

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
                                    <img src={mostrarPrimeiraImagem()} className='prm-fr-select' alt='Imagem Produto' />
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
                            <div><input placeholder='Ex: 1500.00' type='text' value={preco} onChange={e => verificarPreco(e.target.value)}/></div>
                        </div>

                        <div>
                            <span>Promoção:</span>
                            <div><input placeholder='Ex: 1000.00' type='text' value={precopromocional} onChange={e => verificarPrecoPromocional(e.target.value)}/></div>
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

                        <div className='botaoCadastrar' onClick={cadastrarNovoProduto}> 
                        
                        {!id &&
                            <button>Adicionar Produto</button>
                        } 
                        {id &&
                            <button>Alterar Produto</button>
                        }

                        </div>
                        
                    </div>
                </div>
                
                <Link id='voltarMenu' to='/administrador'>Volte para o menu do ADM</Link>
            </div>
            <Rodape />
        </div>
    )
}



