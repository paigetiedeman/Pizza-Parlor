// Allow the user to choose toppings and size for the pizza they'd like to order.

//Business Logic 
function Pizza() {
  this.pizzas = {};
}

function Pizza(topping, size, crust) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
}

Pizza.prototype.calculateCost = function (pizzaCost) {
  let plainPizza = 15;
  if (this.topping === "1" || this.topping === "2" || this.topping === "3" || this.topping === "4") {
    plainPizza += 2;
    return plainPizza;
  } else if (this.size >= 15) {
    plainPizza += 5;
    return plainPizza;
  } else {
    return plainPizza;
  }
};

Pizza.prototype.calculateCrust = function () {
let plainPizza = 15;
  if (this.crust === "CS" || this.crust === "GF") {
    return plainPizza += 6;
  }
}

// UI Logic
let pizza = new Pizza();

function displayPrice(pizzaCost) {
  $(".price").html("Your Pizza is $" + (pizzaCost.calculateCost() + pizzaCost.calculateCrust()));
}

$(document).ready(function () {
  $("form#pizza-cost").submit(function(event) {
    event.preventDefault();
    const selectedToppings = $("#toppings option:selected").val();
    const selectedSize = $("input:radio[name=crustSize]:checked").val();
    const selectedCrust = $("#crust option:selected").val();
    $("#toppings option:selected").val("");
    $("input:radio[name=crustSize]:checked").val("");
    $("#crust option:selected").val("");
    let pizzaCost = new Pizza(
      selectedToppings,
      selectedSize,
      selectedCrust
    );
    displayPrice(pizzaCost);
  });
});