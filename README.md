# Pizza Parlor

#### This is an application where a user can input items and receive a pizza order.

#### _By Paige Tiedeman_

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Description

This simple HTML site lets the user to choose toppings and pizza size to pick out a pizza to order. Using JavaScript OOP to take inputs and return the final cost of a pizza. 

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Go to the top level of this directory_
* _Open index.html in your browser_
* _Input the various toppings and size options_
* _Receive your cost for the pizza_

## Known Bugs

* _N/A_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Paige Tiedeman

## Contact Information

_Paige Tiedeman **paigetiedeman@gmail.com**_

## Tests

Describe Pizza()

Test: "A user can input one topping for their desired pizza and the function will store it"  
Code: let pizza = new Pizza("1", 20);  
Expected Output: Pizza {topping: "1", size: 20}  

Test: "It will return a cost for one topping"  
Code: let pizza = new Pizza("1", 20);
Expected Output: $20

Test: "A user can input additional toppings for their desired pizza and the function will store it"  
Code: let pizza2 = new Pizza(["cheese", "pepperoni"], 20);  
Expected Output: Pizza {topping: Array(2), size: 20}  

Test: "A user can input toppings and size for their desired pizza and get a price"  
Code: let pizza2 = new Pizza(["cheese", "pepperoni"], 20);  
Expected Output: pizza2 = $25  

Test: "An additional charge is added for crust type"  
Code: let pizza2 = new Pizza(["cheese", "pepperoni"], 20, "gluten-free");  
Expected Output: pizza2 = $30  

Test: "It will output a price based on user selections"   
Code: input "Cheese", 20", "Cheese Stuffed"  
Expected Output: $30   