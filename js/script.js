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
        return("Total Number Of Pizzas: " +this.numberOfPizzas+"\n \n"+
        "Size of Pizza: "+this.pizzaSize+" = "+totalSizeOfPizzaPrice+" \n\n"+
        "Type of Crust: "+this.crustType+" = "+totalCrustPrice+"\n\n"+
        "Toppings: "+this.topping1+" "+this.topping2+" "+this.topping3+" "+this.topping4+" "+this.topping5+" "+this.topping6+" = "+totalToppingsPrice+"\n\n"+
        "Delivery Cost: "+this.deliveryLocation+" = "+deliveryCost);
    };

    //function for size price
    function sizeOfPizza(pizzaSize, numberOfPizzas){
        if(pizzaSize==="small"){
            return totalSizeOfPizzaPrice = 250;
        }
        else if(pizzaSize==="medium"){
            return totalSizeOfPizzaPrice = 500;
        }
        else if(pizzaSize==="large"){
            return totalSizeOfPizzaPrice = 750;
        };
        totalSizeOfPizzaPrice = totalSizeOfPizzaPrice*numberOfPizzas
    };

    //function for crust price
    function pizzaCrust(crustType, numberOfPizzas){
        if(crustType==="crispy"){
            return totalSizeOfPizzaPrice = 100;
        }
        else if(crustType==="stuffed"){
            return totalSizeOfPizzaPrice = 150;
        }
        else if(crustType==="Glutten-Free-crispy"){
            return totalSizeOfPizzaPrice = 200;
        }
        else if(crustType==="Glutten-Free-stuffed"){
            return totalSizeOfPizzaPrice = 250;
        };
    };


});
