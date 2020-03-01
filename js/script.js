$(document).ready(function(){
    //user-logic for informative paragraphs.
    $("#deliveryButton").click(function(whatToShow){
        $("deliveryOptions").toggle();
    });
    $("#selfPickUp").click(function(textToShow){
        $("pickUpParagraph").toggle();
    });

    //Business logic for calculating price and displaying receipts.

    //declaring global variables to be used in the constructors and functions...
    let totalPrice = 0;
    let totalSizeOfPizzaPrice = 0;
    let totalCrustPrice = 0;
    let totalToppingsPrice = 0;
    let deliveryCost = 0;
    let overallTotal = 0;
    let topping1 = "", topping2 = "",topping3 = "", topping3 = "",topping4 = "",topping5 = "",topping6 = "";
    let delivery;
    let orderLocation;

    //first constructor
    function pizzaOrder(numberOfPizzas, pizzaSize, crustType, topping1, topping2, topping3, topping4, topping5, topping6, deliveryLocation,){
        this.numberOfPizzas = numberOfPizzas;
        this.pizzaSize = pizzaSize;
        this.crustType = crustType;
        this.topping1 = topping1;
        this.topping2 = topping2;
        this.topping3 = topping3;
        this.topping4 = topping4;
        this.topping5 = topping5;
        this.topping6 = topping6;
        this.deliveryLocation = deliveryLocation;
    };

    //display prototype
    pizzaOrder.prototype.currentOrder=function(){
        return("Total Number Of Pizzas: " +this.numberOfPizzas+"\n
        \n"+)
    }
});
