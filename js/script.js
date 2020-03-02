$(document).ready(function(){
    //user-logic for informative paragraphs.
    
    //selectors for toppings
    $("#topping1").click(function(){
        if($(this).prop("checked") == true){
            topping1=this.value;    
        }
        else if($(this).prop("checked") == false){
            topping1=""
        }
    });  
    
    $("#topping2").click(function(){
        if($(this).prop("checked") == true){
            topping2=this.value;  
        }
        else if($(this).prop("checked") == false){
            topping2="";
        }
    });
    $("#topping3").click(function(){
        if($(this).prop("checked") == true){
            topping3=this.value;
        }
        else if($(this).prop("checked") == false){
            topping3="";
        }
    });  
    
    $("#topping4").click(function(){
        if($(this).prop("checked") == true){
            topping4=this.value;
        }
        else if($(this).prop("checked") == false){
            topping4="";
        }
    });

    //delivery and self pick up
    $("#deliveryButton").click(function(){
        $("deliveryOptions").show();
        alert("delivery shall cost you Ksh100 extra on your total amount")
    });
    $("#selfPickUp").click(function(){
        $("pickUpParagraph").show();
    });

    // location
    $('#locationbtn').click(function() {
        orderLocation=$("#location").val();
        if (delivery==="Yes"){
            alert(" Your order will be delivered to "+orderLocation+ " once you checkout"); 
        }
        
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
            if(topping1==="Bacon"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Extra Cheese"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Cheese and Onions"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Mushrooms"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Black Olives"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            }
            if(topping1==="Green Peppers"){
                totalToppingsPrice = totalToppingsPrice + 100;  
            };
        }
        else if(pizzaSize==="medium"){
            if(topping1==="Bacon"){
                totalToppingsPrice = totalToppingsPrice + 120;  
            }
            if(topping1==="Extra Cheese"){
                totalToppingsPrice = totalToppingsPrice + 140;  
            }
            if(topping1==="Cheese and Onions"){
                totalToppingsPrice = totalToppingsPrice + 160;  
            }
            if(topping1==="Mushrooms"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            }
            if(topping1==="Black Olives"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            }
            if(topping1==="Green Pepper"){
                totalToppingsPrice = totalToppingsPrice + 180;  
            };
        }
        else if(pizzaSize==="large"){
            if(topping1==="Bacon"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Extra Cheese"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Cheese and Onions"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Mushrooms"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Black Olives"){
                totalToppingsPrice = totalToppingsPrice + 200;  
            }
            if(topping1==="Green Pepper"){
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
        alert("Delivery shall cost you an extra ksh100")
    }
    else{deliveryCost =  0;}
};

//function to calculate the total price
function totalCalculator(totalSizeOfPizzaPrice, totalCrustPrice, totalToppingsPrice, deliveryCost){
    totalAmount = totalSizeOfPizzaPrice + totalCrustPrice + totalToppingsPrice + deliveryCost;
}
    //form section
    
    $("form#orderForm").submit(function(event){
        event.preventDefault();
        var pizzaQuantity=$("#numberOfPizzas").val();
        var quantity=parseInt(pizzaQuantity);
        
        var pizzaSize=$("#pizzaSize").val();
        var crustType=$("#crustType").val();
        
        var topping1=$("#topping1").prop("checked");
        var topping2=$("#topping2").prop("checked");
        var topping3=$("#topping3").prop("checked");
        var topping4=$("#topping4").prop("checked");
        var topping5=$("#topping5").prop("checked");
        var topping6=$("#topping6").prop("checked");
        if(t1==false&&t2==false&&t3==false&&t4==false){
            alert("Choose atleast one topping");
            return;
        }
        
        
        var newPizzaOrder = new pizzaOrder(pizzaSize,crustType,numberOfPizzas,deliveryLocation,topping1,topping2,topping3,topping4,topping5,topping6); 
        
        sizeOfPizza(pizzaSize,numberOfPizzas);
        pizzaCrust(crustType,numberOfPizzas);
        pizzaToppings(pizzaSize,topping1,topping2,topping3,topping4,topping5,topping6,numberOfPizzas);
        deliveryDetails(delivery);
        totalCalculator(totalSizeOfPizzaPrice, totalCrustPrice, totalToppingsPrice, deliveryCost);
    });

    $("#submitButton").click(function(){
        totalPrice=0;
        totalToppingsPrice=0;
        totalCrustPrice=0;
        totalSizeOfPizzaPrice=0
        deliveryCost=0;
        topping1="";
        topping2="";
        topping3="";
        topping4="";
        topping5="";
        topping6="";
    });
});    


