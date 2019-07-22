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

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nID #" + res[i].id + " : " + res[i].product_name + " | Price: $" + res[i].price);
        }
        console.log("-----------------------------------");
    });
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

        });
}


