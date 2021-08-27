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
  if (this.topping === "cheese" || this.topping === "pepperoni" || this.topping === "mushrooms") {
    return price = "$20";
  } else if (this.size >= 15) {
    return price = "$25"
  } else if (this.crust === "gluten-free") {
    return price = "$30"
  } else {
    return plainPizza;
  }
};

//let pizza = new Pizza("cheese", 20);
