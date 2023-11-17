use fors_bd;

insert into tb_tamanho(ds_numero)
			    values('37'), ('38'), ('39'), ('40'), ('41'), ('42'), ('43');

select * from tb_tamanho;

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

-- ----------------------------------------------------------------------------------------------------------

select * from tb_cadastrar_produto;

-- Busca todos os produtos cadastrados

select id_produto				as  id,
	    nm_produto				as produto,
        ds_codigo				as codigo,
        ds_descricao			as descricao,
        qnt_estoque				as estoque,
        vl_preco				as preco,
        vl_preco_promocional	as precoPromocional,
        id_marca				as marca,
        ds_cor					as cor,
        img_produto				as imagem
		from tb_cadastrar_produto;

-- Busca produto por id

select  id_produto				    as id,
        nm_produto				    as produto,
        ds_codigo				    as codigo,
        ds_descricao			    as descricao,
        qnt_estoque				    as estoque,
        vl_preco				    as preco,
        vl_preco_promocional	    as precoPromocional,
        id_marca				    as marca,
        ds_cor					    as cor,
        img_produto				    as imagem
  from tb_cadastrar_produto
  where id_produto = 1;