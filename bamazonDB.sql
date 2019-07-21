DROP DATABASE IF EXISTS inventory_DB;

CREATE DATABASE inventory_DB;

USE inventory_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Toothbrush", "Hygiene", 4, 50),
    ("Laptop", "Electronics", 500, 5),
    ("Pants", "Clothes", 35, 100),
    ("Shirt", "Clothes", 20, 100),       
    ("Shampoo", "Hygiene", 7, 50),
    ("Luggage", "Travel", 50, 10),
    ("Keyboard", "Electronics", 100, 15),
    ("Piano", "Music", 250, 10),
    ("Lightbulb", "Home", 2, 200),
    ("Couch", "Home", 300, 2);