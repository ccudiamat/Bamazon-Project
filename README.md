# Bamazon-Project
Utilizing node.js and mySQL, created my version of an inventory store.

## What Does My APP do?

### bamazonCustomer.js

1. Goes through mySQL database, *bamazonDB.sql*, and lists the table of a pre-set list of products in the database on the terminal when first run, using *bamazonCustomer.js*.

2. The user then has to input the matching ID # accordingly with the given table of products presented to them initially. Following after giving an ID #, prompts the user to input how many of the product they would like to purchase.

3. If the product is in stock, it will print out, *"Your order is in stock!"*, and also how much it costed them. If the user chose more than one, it would mathmatically calculate the price of the product multipled by their quantity chosen and print it accordingly. Also, if the user input a large quantity that couldn't be fullfilled, then it would print an apology statement and start the ordering process from the beginning.

### bamazonManager.js

1. Utilizing the same database as *bamazonCustomer.js*, this feature is used to either Display Inventory, Add A Product, Delete A Product, or Restock A Product.

2. The initial prompt gives the user a list of choices.

3. If user chooses **Display Inventory**, it will pull up the inventory list and print it in the terminal.

4. If user chooses **Add A Product**, it will prompt the user for a *unique_ID*, *product_name*, *department_name*, *price*, and lastly *quantity*. If successful, it will print that the product was added and will bring them back to the menu.

5. If user chooses **Delete A Product**, it will prompt the user to input the ID # of the product they would like to remove from the inventory. If successful, it will print that the product was removed and will bring them back to the menu.

6. Lastly, if the user chooses **Restock A Product**, it will prompt the user to input the ID # of the product they would like to restock and then after will decide how many of the product they would like to restock. If successful, it will print that the restock went through and will return the user to the menu.

# VIDEO

Click [here!](https://drive.google.com/file/d/1jYJOpXbHjB4oDKalE7HDXBwqkFSdoAYC/view?usp=sharing)

## Technologies used:
node.js
Javascript
mySQL

## Author:
* **Christopher Cudiamat**