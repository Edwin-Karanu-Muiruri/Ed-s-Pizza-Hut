$(document).ready(function(){
    $("#deliveryButton").click(function(whatToShow){
        $("deliveryOptions").toggle();
    });
    $("#selfPickUp").click(function(textToShow){
        $("pickUpParagraph").toggle();
    });
});
