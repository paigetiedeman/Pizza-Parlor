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
  if (this.topping === "cheese" || this.topping === "pepperoni" || this.topping === "mushrooms") {
    return price = "$20";
  } else {
    return plainPizza;
  }
};

//let pizza = new Pizza("cheese", 20);
