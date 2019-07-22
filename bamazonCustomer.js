var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "inventory_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

connection.query("SELECT * FROM products", function (err, res) {
    console.log("-----------------------------------");
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log("\nID #" + res[i].id + " : " + res[i].product_name + " | Price: $" + res[i].price);
    }
    console.log("-----------------------------------");
});

function start() {
    inquirer
        .prompt([
            {
                name: "initial",
                type: "input",
                message: "Please enter ID of the product you would like to purchase."
            }, {
                name: "quantity",
                type: "input",
                message: "How much of the product would you like to purchase?"
            }])
        .then(function (answer) {
            var IDrequest = answer.initial;
            var quantityAsking = answer.quantity;
            connection.query("Select * FROM products WHERE id = " + IDrequest, function (err, res) {
                if (err) {
                    console.log(err)
                };
                if (quantityAsking <= res[0].quantity) {
                    var totalCost = res[0].price * quantityAsking;
                    console.log("Your order is in stock!");
                    console.log("Your total cost for " + quantityAsking + " " + res[0].product_name + " is $" + totalCost + ". Thank you!");
                    
                    connection.query("UPDATE products SET quantity = quantity - " + quantityAsking + " WHERE id = " + IDrequest);
                    connection.end();
                } else {
                    console.log("Our apologies, but we do not have enough " + res[0].product_name + " to complete your order. Please select a different quantity.");
                    start();
                };
            });
        });
}


