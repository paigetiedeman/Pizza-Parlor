// Allow the user to choose toppings and size for the pizza they'd like to order.

// Business Logic 
function Pizza() {
this.pizzas = {};
}

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateCost = function(pizzaCost) {
  let plainPizza = "$15";
  let price;
  if (this.topping === "1") {
    return price = "$20";
  } else {
    return plainPizza;
  }
};

//let pizza = new Pizza("1", 20);
//console.log(pizza)