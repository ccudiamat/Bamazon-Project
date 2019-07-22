DROP DATABASE IF EXISTS inventory_DB;

CREATE DATABASE inventory_DB;

USE inventory_DB;

CREATE TABLE products (
  id INT(4) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT(4) NOT NULL,
  quantity INT(4) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, department_name, price, quantity)
VALUES (321, "Toothbrush", "Hygiene", 4, 50),
    (122, "Laptop", "Electronics", 500, 5),
    (534, "Pants", "Clothes", 35, 100),
    (981, "Shirt", "Clothes", 20, 100),       
    (134, "Shampoo", "Hygiene", 7, 50),
    (612, "Luggage", "Travel", 50, 10),
    (144, "Keyboard", "Electronics", 100, 15),
    (731, "Piano", "Music", 250, 10),
    (856, "Lightbulb", "Home", 2, 200),
    (471, "Couch", "Home", 300, 2);