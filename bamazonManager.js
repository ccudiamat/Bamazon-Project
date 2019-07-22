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
            console.log("\nID #" + res[i].id + " : " + res[i].product_name + " | Price: $" + res[i].price);
        }
        console.log("-----------------------------------");
    })
};

inquirer.prompt([{
    name:"action",
    type: "list",
    message: "Choose an option below to manage current inventory:",
    choices: ["Display Inventory", "Restock A Product", "Add A Product", "Delete A Product", "EXIT"]
}]).then(function(answers){
    switch(answers.action){
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
            connection.end();		
    }
});

function restockProduct() {

}

function addProduct() {
    inquirer.prompt([{
        name:"id",
        type: "input",
        message: "Give an ID # for this product."
    }, {
        name:"product_name",
        type:"input",
        message:"Input product name."
    }, {
        name:"department_name",
        type:"input",
        message:"Under what department would you like to sell this product?"
    }, {
        name:"price",
        type:"input",
        message:"How much would you like to sell this product?"
    }, {
        name:"quantity",
        type:"input",
        message:"How many of this product is there?"
    }]).then(function(answer){
        connection.query('INSERT INTO products (id,product_name,department_name,price,quantity) VALUES("' + answer.id + '","' + answer.product_name + '","' + answer.department_name + '",' + answer.price + ',' + answer.quantity +  ')');
        console.log("Item successfully added.");
    });
}

function deleteProduct() {

}