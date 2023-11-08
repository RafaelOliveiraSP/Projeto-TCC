create database fors_bd;
use fors_bd;

create table tb_produto ( 
	id_produto 							int primary key auto_increment,
	nm_produto 							varchar(200) not null,
	ds_codigo							varchar(50)  not null,
	ds_descricao						varchar(200) not null,
	qnt_estoque							int          not null,
	vl_preco 							decimal(6,2) not null,        
	vl_preco_promocional 				decimal(6,2) not null,
	id_marca 							int          not null,
	ds_cor								varchar(50)  not null,
    foreign key (id_marca) 				references tb_marca (id_marca)
);

create table tb_pedido (
	id_pedido 							int primary key auto_increment,
	id_cliente 							int			 not null,
	id_endereco_entrega 				int			 not null,
	ds_status 							varchar(200) not null,
	tp_forma_de_pagamento 				varchar(200) not null,
    id_cartao							int			 not null,
	dt_pedido 							datetime 	 not null,
	qtd_parcelas 						int 		 not null,
    foreign key (id_cliente) 			references tb_cliente  		(id_cliente),
	foreign key (id_cartao)				references tb_dados_cartao	(id_cartao),
    foreign key (id_endereco_entrega)	references tb_endereco 		(id_endereco)
);

create table tb_dados_cartao(
	id_cartao							int primary key auto_increment,
    nr_cartao							varchar(200) not null,
    nm_cartao							varchar(200) not null,
    nr_cod_seguranca					int			 not null,
    dt_vencimento						varchar(5)   not null,
    qtd_parcelas 						int 		 
);

create table tb_pedido_item (
	id_pedido_item 						int primary key auto_increment,
	id_pedido 							int not null,
	id_produto 							int not null, 
	qtd_itens 							int not null,
    foreign key (id_pedido)  			references tb_pedido (id_pedido),
    foreign key (id_produto) 			references tb_produto(id_produto)
);

create table tb_cliente (
	id_cliente 							integer primary key auto_increment,
	nm_nome 							varchar(200) not null,
    ds_sobrenome						varchar(200) not null,
	ds_usuario 							varchar(200) not null,
	ds_cpf 								varchar(200) not null,	
	ds_sexo 							varchar(200) not null,
	dt_nascimento 						date		 not null,
	ds_telefone 						varchar(200) not null,
	ds_email 							varchar(200) not null,
	ds_senha 							varchar(200) not null
);

create table tb_tamanho(
	id_tamanho 							integer primary key auto_increment,
	ds_numero 							varchar(2) not null
);


create table tb_produto_imagem (
	id_produto_img 						int primary key auto_increment,
	id_produto 							int          not null, 
	img_produto 						varchar(200) not null,
    foreign key (id_produto)			references tb_produto(id_produto)
);

create table tb_marca (
	id_marca 							int primary key auto_increment,
	ds_marca 							varchar(200) not null
);

create table tb_endereco (
	id_endereco 						integer primary key auto_increment,
	ds_cep 								varchar(200) not null,
	ds_endereco 						varchar(200) not null,
	ds_enderco 							varchar(200) not null,
	ds_cidade 							varchar(200) not null
);


create table tb_admin (
	id_admin 							int primary key auto_increment,
	ds_email 							varchar(200) not null,
	ds_senha 							varchar(200) not null
);