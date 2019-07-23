var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3307,

    user: "root",

    password: "root",
    database: "inventory_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function inventoryDisplay() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("-----------------------------------");
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nID #" + res[i].id + " : " + res[i].product_name + " | Price: $" + res[i].price + " | Quantity: " + res[i].quantity);
        }
        console.log("-----------------------------------");
        start();
    })
};
function start() {
    inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Choose an option below to manage current inventory:",
        choices: ["Display Inventory", "Restock A Product", "Add A Product", "Delete A Product", "EXIT"]
    }]).then(function (answers) {
        switch (answers.action) {
            case "Display Inventory":
                inventoryDisplay();
                break;
            case "Restock A Product":
                restockProduct();
                break;
            case "Add A Product":
                addProduct();
                break;
            case "Delete A Product":
                deleteProduct();
                break;
            case "EXIT":
                console.log("\nThank you. Come again!")
                connection.end();
        }
    });
}
function restockProduct() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please input ID of product you would like to restock."
    },
    {
        name: "quantity",
        type: "input",
        message: "What is the quantity that you would like to add?"
    }]).then(function (answer) {
        connection.query("UPDATE products SET quantity = quantity + " + answer.quantity + " WHERE id = " + answer.id);
        console.log("Product successfully restocked!");
        start();
    })
}

function addProduct() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Give an ID # for this product."
    }, {
        name: "product_name",
        type: "input",
        message: "Input product name."
    }, {
        name: "department_name",
        type: "input",
        message: "Under what department would you like to sell this product?"
    }, {
        name: "price",
        type: "input",
        message: "How much would you like to sell this product?"
    }, {
        name: "quantity",
        type: "input",
        message: "How many of this product is there?"
    }]).then(function (answer) {
        connection.query('INSERT INTO products (id,product_name,department_name,price,quantity) VALUES("' + answer.id + '","' + answer.product_name + '","' + answer.department_name + '",' + answer.price + ',' + answer.quantity + ')');
        console.log("Item successfully added!");
        start();
    });
}

function deleteProduct() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please input ID of the product you would like to delete."
    }]).then(function (answer) {
        connection.query("DELETE FROM products WHERE id = " + answer.id);
        console.log("Product successfully deleted!")
        start();
    })
}

start();