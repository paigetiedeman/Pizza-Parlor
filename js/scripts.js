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

Pizza.prototype.calculateCost = function (pizzaCost) {
  let plainPizza = "$15";
  let price;
  if (
    this.topping === "1" ||
    this.topping === "2" ||
    this.topping === "3" ||
    this.topping === "4"
  ) {
    return (price = "$20");
  } else if (this.size >= 15) {
    return (price = "$25");
  } else if (this.crust === "CS" || this.crust === "GF") {
    return (price = "$30");
  } else {
    return plainPizza;
  }
};

//let pizza = new Pizza("cheese", 20);
// UI Logic
let pizza = new Pizza();

function displayPrice(pizzaCost) {
  $(".price").html(pizzaCost.calculateCost());
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
    var pizzaCost = new Pizza(
      selectedToppings,
      selectedSize,
      selectedCrust
    );
    displayPrice(pizzaCost);
  });
});