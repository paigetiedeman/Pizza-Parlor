// Allow the user to choose toppings and size for the pizza they'd like to order.

//Business Logic 
function Pizza() {
  this.pizzas = {};
}

function Pizza(topping, size, crust) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.plain = 15;
}

Pizza.prototype.calculateTopping = function () {
  let price = 0;
  if (this.topping === "1" || this.topping === "2" || this.topping === "3" || this.topping === "4") {
    return price += 12;
  } else {
    return this.plain;
  }
};

Pizza.prototype.calculateSize = function () {
  let price = 0;
  if (this.size === "20") {
    return price += 5;
  } else if (this.size === "25") {
    return price += 7;
  } else {
    return price;
  }
}

Pizza.prototype.calculateCrust = function () {
let price = 0;
  if (this.crust === "CS" || this.crust === "GF") {
    return price += 6;
  } else {
    return price;
  }
}

// UI Logic
let pizza = new Pizza();

function displayPrice(pizzaCost) {
  $(".price").html("Your Pizza is $" + (pizzaCost.calculateTopping() + pizzaCost.calculateCrust() + pizzaCost.calculateSize()));
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