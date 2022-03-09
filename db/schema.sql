-- DROP
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE
CREATE DATABASE ecommerce_db;

-- USE
USE ecommerce_db;

-- CATEGORY TABLE
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);

-- PRODUCT TABLE
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    FOREIGN KEY (category_id)
    REFERENCES category(id)
);

-- TAG TABLE
CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(30)    
);

-- PRODUCT_TAG TABLE
CREATE TABLE product_tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    FOREIGN KEY (product_id)
    REFERENCES product(id),
    tag_id INT,
    FOREIGN KEY (tag_id)
    REFERENCES tag(id)
);