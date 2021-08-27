// Allow the user to choose toppings and size for the pizza they'd like to order.

// Business Logic 
function Pizza() {
this.pizzas = {};
}

function Pizza(topping, size, crust) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
}

Pizza.prototype.calculateCost = function(pizzaCost) {
  let plainPizza = "$15";
  let price;
  if (this.topping === "1" || this.topping === "2" || this.topping === "3" || this.topping === "4") {
    return price = "$20";
  } else if (this.size >= 15) {
    return price = "$25"
  } else if (this.crust === "6" || this.crust === "7") {
    return price = "$30"
  } else {
    return plainPizza;
  }
};

//let pizza = new Pizza("cheese", 20);
