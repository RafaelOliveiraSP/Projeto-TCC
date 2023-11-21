use fors_bd;
show tables;

use fors_bd;

-- ----------------------------------- Consulta dos Produtos ----------------------------------- 

-- Cadastra Produto 

insert into tb_cadastrar_produto (nm_produto, ds_codigo, ds_descricao, qnt_estoque, vl_preco, vl_preco_promocional, id_marca, ds_cor) 
			  values ("Teste2", 5525, "TESTE2", 50, 101.00, 100.00, 1, "#000");


-- Consulta todos os produtos 

select * from tb_cadastrar_produto;


select  id_produto		as  id,
	nm_produto      	as produto,
        ds_codigo		as codigo,
        ds_descricao		as descricao,
        qnt_estoque		as estoque,
        vl_preco	        as preco,
        vl_preco_promocional	as precoPromocional,
        id_marca		as marca,
        ds_cor			as cor,
        img_produto		as imagem
	from  tb_cadastrar_produto;
        
-- Consulta produto por id
        
select  id_produto		as id,
        nm_produto		as nome,
        ds_codigo		as codigo,
        ds_descricao		as descricao,
        qnt_estoque		as estoque,
        vl_preco		as preco,
        vl_preco_promocional	as precopromocional,
        id_marca	    	as marca,
        ds_cor			as cor,
        img_produto		as imagem
  from  tb_cadastrar_produto
           where id_produto = 1;
           
-- Consulta produto por nome

select 	P.id_produto		as id,
        P.nm_produto		as nome,
        P.ds_codigo		as codigo,
        P.ds_descricao		as descricao,
        P.qnt_estoque		as estoque,
        P.vl_preco		as preco,
        P.vl_preco_promocional	as precopromocional,
        M.id_marca		as Idmarca,
        M.ds_marca		as marca,
        P.ds_cor		as cor
from 				tb_cadastrar_produto as P
inner join 			tb_marca as M on M.id_marca = P.id_marca
where P.nm_produto like "%a%";


-- Deleta produto

delete 	from   tb_cadastrar_produto
		where  id_produto  = 13;
        
-- Altera um produto 

update 	tb_cadastrar_produto
    set nm_produto		= "Teste Alterado",
	ds_codigo		= 5525,
        ds_descricao		= "TESTE2",
        qnt_estoque		= 50,
        vl_preco		= 101.00,
        vl_preco_promocional	= 100.00,
        id_marca		= 1,
        ds_cor			= "#000"
 where id_produto		= 12;

-- ---------------------------------------------------------------------------------------------------------

insert into tb_marca(ds_marca)
	      values('Nike'), ('Adidas'), ('Puma'), ('Salomon'), ('Mizuno'), ('Olympikus');
                
select * from tb_marca;

-- ----------------------------------------------------------------------------------------------------------

insert into tb_admin(ds_email, ds_senha)
              values('adm@admin', '1234');
                
select * from tb_admin;

-- ---------------------------------------------------------------------------------------------------------

insert into tb_dados_cartao(nr_cartao, nm_cartao, nr_cod_seguranca, dt_vencimento, qtd_parcelas)
	             values('0000000000000000', 'Rafael Oliveira', '0000', '2023-11-09', 0);
                     
select * from tb_dados_cartao;

-- -------------------------------------------------------------------------------------------------------------

insert into tb_tamanho(ds_numero)
		values('37'), ('38'), ('39'), ('40'), ('41'), ('42'), ('43');
           
select * from tb_tamanho;