Create database jewery_store;

use jewery_store;

create table product_type (
	id int primary key auto_increment,
    name varchar(255)
);

create table products (
	id int primary key auto_increment,
    `name` varchar(255),
    `description` longtext,
    price double,
    inventory int,
    product_type_id int,
    foreign key (product_type_id) references product_type (id)
);

create table size (
	id int primary key auto_increment,
    name varchar(255)
);

create table size_product (
	id int primary key auto_increment,
    name varchar(255),
    size_id int,
    product_id int ,
    foreign key (product_id) references products(id),
    foreign key (size_id) references size(id)
);

create table roles (
	id int primary key auto_increment,
    name varchar(255)
);

create table accounts (
	id int primary key auto_increment,
    `name` varchar(255),
    email varchar(255),
    username varchar(255) unique,
    `password` varchar(255),
    `status` bit(1)
);

create table account_roles (
	id int primary key auto_increment,
    account_id int,
    role_id int,
    foreign key (account_id) references accounts (id),
    foreign key (role_id) references roles (id)
);

create table customer_type (
	id int primary key auto_increment,
    name varchar(255)
);

create table customers (
	id int primary key auto_increment,
    `name` varchar(255),
    email varchar(255),
    username varchar(255) unique,
    `password` varchar(255),
    `status` bit(1),
    is_deleted boolean default 0,
    customer_type_id int,
    account_role_id int,
    foreign key (account_role_id) references account_roles (id),
    foreign key (customer_type_id) references customer_type (id)
);

create table carts (
	id int primary key auto_increment,
    payment_date datetime,
    is_deleted boolean default 0,
    customer_id int,

	foreign key (customer_id) references customers (id)
);

create table cart_detail (
	id int primary key auto_increment,
    quantity int ,
    payment_date datetime,
    is_deleted boolean default 0,
    customer_id int,
    product_id int,
	foreign key (customer_id) references customers (id),
	foreign key (product_id) references products (id)
);

create table payments(
id int primary key auto_increment,
pay_date datetime,
method varchar(255),
cart_id int,
is_deleted boolean default 0,
foreign key (cart_id) references carts(id)
);