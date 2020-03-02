var total=0;
var sizeTotal=0;
var crustTotal=0;
var toppingsTotal=0;
var deliveryTotal=0;
var newTotal;
var topping1="",topping2="",topping3="",topping4="",topping5="",topping6="";
var delivery;
var orderLocation

//business logic constructors, prototype, and functions.

//pizza constructor
function Pizza(size,crust,number,delivery,orderLocation,topping1,topping2,topping3,topping4,topping5,topping6){
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.delivery=delivery;
    this.orderLocation=orderLocation;
    this.topping1=topping1;
    this.topping2=topping2;
    this.topping3=topping3;
    this.topping4=topping4;
    this.topping5=topping5;
    this.topping6=topping6;
}

//prototype to display receipt
Pizza.prototype.order=function(){
    return ("Number of pizzas: "+this.number+"\n \n"
    +"Pizza size: "+this.size+" = "+sizeTotal+"\n\n"
    +"Crust type: "+this.crust+" = "+crustTotal+"\n\n"
    +"Toppings: "+this.topping1+" "+this.topping2+" "+
    this.topping3+" "+this.topping4+" "+this.topping5+" "+this.topping6+" = "+toppingsTotal+"\n\n"
    +"Delivery: "+this.delivery+" = "+deliveryTotal);
}

// selecting size function
function sizeCheckout(size,number){
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

//crust selector function
function crustCheckout(crust,number){
    switch (crust){
        case ("Crispy"):
            crustTotal=crustTotal+150;
            break;
        case ("Stuffed"):
            crustTotal=crustTotal+200;
            break;
        case ("Gluten Free Crispy"):
            crustTotal=crustTotal+190;
            break;
        case ("Gluten Free Stuffed"):
            crustTotal=crustTotal+110;
            break;        
    }

    crustTotal=crustTotal*number
}

//toppings selector function
function toppingsCheckout(size,topping1,topping2,topping3,topping4,topping5,topping6,number){
        if (size==="Small"){
        if(topping1==="Bacon"){
            toppingsTotal=toppingsTotal+140;
        }
        if(topping2==="Extra Cheese"){
            toppingsTotal=toppingsTotal+140;
        }
        if(topping3==="Cheese and Onions"){
            toppingsTotal=toppingsTotal+150;
        }
        if(topping4==="Mushroom"){
            toppingsTotal=toppingsTotal+120;
        }
        if(topping5==="Black Olives"){
            toppingsTotal=toppingsTotal+100;
        }
        if(topping5==="Green Peppers"){
            toppingsTotal=toppingsTotal+100;
        }
    }
    else if (size==="Medium"){
        if(topping1==="Bacon"){
            toppingsTotal=toppingsTotal+210;
        }
        if(topping2==="Extra Cheese"){
            toppingsTotal=toppingsTotal+160;
        }
        if(topping3==="Cheese and Onion"){
            toppingsTotal=toppingsTotal+200;
        }
        if(topping4==="Mushrooms"){
            toppingsTotal=toppingsTotal+200;
        }
        if(topping5==="Black Olives"){
            toppingsTotal=toppingsTotal+200;
        }
        if(topping6==="Green Pepper"){
            toppingsTotal=toppingsTotal+200;
        }
    }
    else if(size==="Large"){
        if(topping1==="Bacon"){
            toppingsTotal=toppingsTotal+330;
        }
        if(topping2==="Extra Cheese"){
            toppingsTotal=toppingsTotal+310;
        }
        if(topping3==="Cheese and Onions"){
            toppingsTotal=toppingsTotal+290;
        }
        if(topping4==="Mushroom"){
            toppingsTotal=toppingsTotal+240;
        }
        if(topping5==="Black Olives"){
            toppingsTotal=toppingsTotal+300;
        }
        if(topping6==="Green Peppers"){
            toppingsTotal=toppingsTotal+300;
        }
    }
    else{alert("please select all boxes")}

    toppingsTotal=toppingsTotal*number
}

//delivery options function

function deliveryCheckout(delivery){
    if (delivery==="Deliver to my location"){
        deliveryTotal=deliveryTotal+100
    }
    else{
        deliveryTotal=0
    }
}

//calculate total function

function Checkout(sizeTotal,crustTotal,toppingsTotal,deliveryTotal){

    total=sizeTotal+crustTotal+toppingsTotal+deliveryTotal;    
            
}

//user logic
$(document).ready(function(){
    //delivery 
    $("#delivery").click(function(){
        $(".hide-delivery").show();
        alert("Delivery to all locations includes an extra charge of Ksh100");
        delivery=this.value;
    });
    $("#pickUp").click(function(){
        $(".hide-delivery").hide();
        delivery=this.value;    
    });

    // location  function
    $('#locationbtn').click(function() {
        orderLocation=$("#location").val();
        if (delivery==="Deliver to my location"){
            alert(" Your pizza shall be delivered to "+orderLocation+ " after completing you order"); 
        }
        
    });
    //checkbox for toppings selection radiiobuttons 
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
    $("#topping5").click(function(){
        if($(this).prop("checked") == true){
            topping5=this.value;
            
        }
        else if($(this).prop("checked") == false){
            topping5="";
        }
        
    });
    $("#topping6").click(function(){
        if($(this).prop("checked") == true){
            topping6=this.value;
            
        }
        else if($(this).prop("checked") == false){
            topping6="";
        }
        
    });
    //form section input output
    
    $("form#myForm").submit(function(event){
        event.preventDefault();
        var size=$("#size").val();
        var crust=$("#crust").val();
        
        var myNumber=$("#noOfPizzas").val();
        var number=parseInt(myNumber);
        
        var t1=$("#topping1").prop("checked");
        var t2=$("#topping2").prop("checked");
        var t3=$("#topping3").prop("checked");
        var t4=$("#topping4").prop("checked");
        var t5=$("#topping5").prop("checked");
        var t6=$("#topping6").prop("checked");
        if(t1==false&&t2==false&&t3==false&&t4==false&&t5==false&&t6==false){
            alert("Choose atleast one topping or as many as you'd like");
            return;
        }
        
        
        var newPizza=new Pizza(size,crust,number,delivery,orderLocation,topping1,topping2,topping3,topping4,topping5,topping6); 
        
        sizeCheckout(size,number);
        crustCheckout(crust,number);
        toppingsCheckout(size,topping1,topping2,topping3,topping4,topping5,topping6,number);
        deliveryCheckout(delivery);
        Checkout(sizeTotal,crustTotal,toppingsTotal,deliveryTotal);
        $(".pizza-form").hide();
        $(".hide-order").show();
        $(".hide-delivery").hide();
        $(".order").text(newPizza.order())
        $(".ordertotal").text(total);
        $("#myForm").trigger("reset");
        $("#orderDetails").trigger("reset");

    });

    $("#orderbtn").click(function(){
        $(".hide-order").hide();
        $(".pizza-form").show();
    });
});