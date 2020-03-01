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
            return totalCrustPrice = 100;
        }
        else if(crustType==="stuffed"){
            return totalCrustPrice = 150;
        }
        else if(crustType==="Glutten-Free-crispy"){
            return totalCrustPrice = 200;
        }
        else if(crustType==="Glutten-Free-stuffed"){
            return totalCrustPrice = 250;
        }
        totalCrustPrice = totalCrustPrice*numberOfPizzas
    };

    //function for toppings price
    function pizzaToppings(pizzaSize, topping1, topping2, topping3, topping4, topping5, topping6, numberOfPizzas){
        if(pizzaSize==="small"){
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            };
        }
        else if(pizzaSize==="medium"){
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 120;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 140;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 160;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            };
        }
        else if(pizzaSize==="large"){
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Barbrque Chicken"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            };
        }
        else{alert("All fields are required to complete your order")};

        totalToppingsPrice = totalToppingsPrice * numberOfPizzas;
    };
//function for delivery
function deliveryDetails(deliveryLocation){
    if(delivery==="Yes"){
        deliveryCost = deliveryCost + 100;
    }
    else{deliveryCost =  0;}
};

//function to calculate the total price
function totalCalculator(totalSizeOfPizzaPrice, totalCrustPrice, totalToppingsPrice, deliveryCost){
    totalAmount = totalSizeOfPizzaPrice + totalCrustPrice + totalToppingsPrice + deliveryCost;
}
$(document).ready(function(){
    //user-logic for informative paragraphs.
    $("#deliveryButton").click(function(){
        $("deliveryOptions").toggle();
    });
    $("#selfPickUp").click(function(){
        $("pickUpParagraph").toggle();
    });
    
});


