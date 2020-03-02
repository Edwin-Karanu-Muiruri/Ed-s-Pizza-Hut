$(document).ready(function(){
    //user-logic for informative paragraphs.
    
    //selectors for toppings
    
    // location
    $('#deliveryButton').click(function() {
        orderLocation=$("#deliveryAddress").val();
            alert(" Your order will be delivered to "+orderLocation+ " once you checkout"); 
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
        $(".orderReceipt").text(newPizzaOrder.orderReceipt())
        $(".ordertotal").text(totalPrice);
        $("#myForm").trigger("reset");

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
//myjs+gtadjs
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
        $(".orderReceipt").text(newPizzaOrder.orderReceipt())
        $(".ordertotal").text(totalPrice);
        $("#myForm").trigger("reset");

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

//gta-code
var total=0;
var sizeTotal=0;
var crustTotal=0;
var toppingsTotal=0;
var deliveryTotal=0;
var newTotal;
var tp1="",tp2="",tp3="",tp4="";
var delivery;
var orderLocation

/*business logic*/

//pizza constructor
function Pizza(size,crust,number,delivery,orderLocation,tp1,tp2,tp3,tp4){
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.delivery=delivery;
    this.orderLocation=orderLocation;
    this.tp1=tp1;
    this.tp2=tp2;
    this.tp3=tp3;
    this.tp4=tp4;
}

//prototype
Pizza.prototype.order=function(){
    return ("Number of pizzas: "+this.number+"\n\n"+"Pizza size: "+this.size+" = "+sizeTotal+"\n\nCrust type: "+this.crust+" = "+crustTotal+"\n\n"+"Toppings: "+this.tp1+" "+this.tp2+" "+
    this.tp3+" "+this.tp4+" = "+toppingsTotal+"\n\n"+"Delivery: "+this.delivery+" = "+deliveryTotal);
}

// size function
function sizeCheckout(size,number){
    //switch statement for pizza size //small=200 medium=400 large=600
    switch (size){
        case ("Small"):
            sizeTotal=sizeTotal+200;
            break;
        case ("Medium"):
            sizeTotal=sizeTotal+400;
            break;
        case ("Large"):
            sizeTotal=sizeTotal+600;
            break;
    }
    
    sizeTotal=sizeTotal*number
    
    
}

//crust function
function crustCheckout(crust,number){
    //switch statement for pizza crust //crispy=50 stuffed=70 glutencrispy=90 gluttenstuffed=110 
    switch (crust){
        case ("Crispy"):
            crustTotal=crustTotal+50;
            break;
        case ("Stuffed"):
            crustTotal=crustTotal+70;
            break;
        case ("Gluten Free Crispy"):
            crustTotal=crustTotal+90;
            break;
        case ("Gluten Free Stuffed"):
            crustTotal=crustTotal+110;
            break;        
    }

    crustTotal=crustTotal*number
}

//toppings function
function toppingsCheckout(size,tp1,tp2,tp3,tp4,number){
    //switch statement for pizza topping //bbqchicken=90,110,130 bbqbeef=70,90,110 vegetarian=50,70,99 shrimp=100,120,140 
    if (size==="Small"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+70;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+50;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+100;
        }
    }
    else if (size==="Medium"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+110;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+70;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+120;
        }
    }
    else if(size==="Large"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+130;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+110;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+140;
        }
    }
    else{alert("please select all boxes")}

    toppingsTotal=toppingsTotal*number
}

//delivery function

function deliveryCheckout(delivery){
    if (delivery==="Yes"){
        deliveryTotal=deliveryTotal+50
    }
    else{
        deliveryTotal=0
    }
}

//calculate total function

function Checkout(sizeTotal,crustTotal,toppingsTotal,deliveryTotal){

    total=sizeTotal+crustTotal+toppingsTotal+deliveryTotal;    
            
}

/*user logic*/

$(document).ready(function(){
    //delivery 

    $("#Yes").click(function(){
        $(".hide-delivery").show();
        alert("Delivery will cost you 50 shillings");
        delivery=this.value;
        

    });
    $("#No").click(function(){
        $(".hide-delivery").hide();
        delivery=this.value;
        
    });

    // location
    $('#locationbtn').click(function() {
        orderLocation=$("#location").val();
        if (delivery==="Yes"){
            alert(" Your order will be delivered to "+orderLocation+ " once you checkout"); 
        }
        
    });
    //checkbox for toppings
   
    
    $("#tp1").click(function(){
        if($(this).prop("checked") == true){
            tp1=this.value;
             
        }
        else if($(this).prop("checked") == false){
            tp1=""
        }
       
    });  
    
    $("#tp2").click(function(){
        if($(this).prop("checked") == true){
            tp2=this.value;
            
        }
        else if($(this).prop("checked") == false){
            tp2="";
        }
        
    });
    $("#tp3").click(function(){
        if($(this).prop("checked") == true){
            tp3=this.value;
            
        }
        else if($(this).prop("checked") == false){
            tp3="";
        }
        
    });  
    
    $("#tp4").click(function(){
        if($(this).prop("checked") == true){
            tp4=this.value;
            
        }
        else if($(this).prop("checked") == false){
            tp4="";
        }
        
    });
    //form section
    
    $("form#myForm").submit(function(event){
        event.preventDefault();
        var size=$("#size").val();
        var crust=$("#crust").val();
        
        var myNumber=$("#noOfPizzas").val();
        var number=parseInt(myNumber);
        
        var t1=$("#tp1").prop("checked");
        var t2=$("#tp2").prop("checked");
        var t3=$("#tp3").prop("checked");
        var t4=$("#tp4").prop("checked");
        if(t1==false&&t2==false&&t3==false&&t4==false){
            alert("Choose atleast one topping");
            return;
        }
        
        
        var newPizza=new Pizza(size,crust,number,delivery,orderLocation,tp1,tp2,tp3,tp4); 
        
        sizeCheckout(size,number);
        crustCheckout(crust,number);
        toppingsCheckout(size,tp1,tp2,tp3,tp4,number);
        deliveryCheckout(delivery);
        Checkout(sizeTotal,crustTotal,toppingsTotal,deliveryTotal);
        $(".pizza-form").hide();
        $(".hide-order").show();
        $(".hide-delivery").hide();
        $(".order").text(newPizza.order())
        $(".ordertotal").text(total);
        $("#myForm").trigger("reset");

    });

    $("#orderbtn").click(function(){
        $(".hide-order").hide();
        $(".pizza-form").show();
        alert("Have a pizzaful day!");
        total=0;
        toppingsTotal=0;
        crustTotal=0;
        sizeTotal=0
        deliveryTotal=0;
        tp1="";
        tp2="";
        tp3="";
        tp4="";
    });



});




//my html form
<div class="orderForm">
        <form id="orderForm">
            <div class="form-group">
                <p>What type of pizza would you like?</p>
                <select id="pizzaOptions">
                    <option value="defaultOption" >Select a pizza type</option>
                    <option value="nYCStyle"id="nYCPizza">New-York style pizza</option>
                    <option value="pepperoni"id="pepperoni">Pepperoni</option>
                    <option value="vegan" id="veganPizza">Vegan Pizza</option>
                    <option value="otherPizzaTypes" id="pizzaViennese">Pizza Viennese</option>
                    <option value="otherPizzaTypes" id="swedishPizza">Swedish Pizza</option>
                    <option value="otherPizzaTypes" id="tandooriPizza">Tandoori Pizza</option>
                    <option value="otherPizzaTypes" id="sicilianPizza">Sicilian Pizza</option>
                    <option value="otherPizzaTypes"id="stLouisPizza">St.Louis Pizza</option>
                  </select>
            </div>
            <div class="form-group">
                <p>What size of pizza would you like?</p>
                <select id="pizzaSize">
                    <option value="defaultOption">Select a pizza size</option>
                    <option value="small" id="small">Small</option>
                    <option value="medium" id="medium">Medium</option>
                    <option value="large" id="large">Large</option>
                    <option value="doubleStacked" id="doubleStacked">Double Stacked</option>
                  </select>
            </div>
            <div class="form-group">
                <p>How Many Pizzas would you like?</p>
                <input type="number" class="form-control" id="numberOfPizzas" placeholder="" name="Number of Pizzas">
            </div>
            <div class="form-group" id="crustOptions">
                <p>What type of crust would you like on your Pizza?</p>
                <select id="crustType">
                    <option value="defaultOption">Crust options</option>
                    <option value="crispy" id="crispy">crispy</option>
                    <option value="stuffed" id="stuffed">stuffed</option>
                    <option value="glutten-Free-crispy" id="Glutten-Free-crispy">Glutten-Free-crispy</option>
                    <option value="glutten-Free-stuffed" id="Glutten-Free-stuffed">Glutten-Free-stuffed</option>
                  </select>
            </div>
            <div class="form-group">
                <p>Choose the toppings you'd like on your Pizza?</p>
                <select id="toppingsOptions">
                    <option value="bacon" id="topping1">Bacon</option>
                    <option value="extraCheese" id="topping2">Extra Cheese</option>
                    <option value="cheeseAndOnion" id="topping3">Cheese and onions</option>
                    <option value="mushroom" id="topping4">Mushrooms</option>
                    <option value="blackOlives" id="topping5">Black Olives</option>
                    <option value="greenPeppers" id="topping6">Green Peppers</option>
                  </select>
            <div class="checkbox">
                <p>Would you like your pizza to your location or pick it up from us?</p>
                <label><input type="checkbox" name="remember" onclick="whatToShow()" id="deliveryButton"> Deliver to me</label>
                <div class="deliveryOptions">
                    <p>Please enter a delivery Location</p>
                    <input type="text" class="form-control" id="deliveryAddress" placeholder="" name="Place of delivery">
                </div>
                <label><input type="checkbox" name="remember" id="selfPickUp"> I'll pick it up myself</label>
                <p class="pickUpParagraph">
                    Please show our attendants your receipt to receive your pizza.<br>
                    Thank you for choosing Ed's Pizza Hut ;-)
                </p>
            </div>
            <button type="submit" class="btn btn-default" id="submitButton" onclick="totalCalculator()">Place your order</button>
        </form>
    </div>


