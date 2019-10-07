function showCalc(customerName, customerAge, customerCountry, customerPower) {
    var customerName = document.getElementById("your_name").value;
    var customerAge = document.getElementById("age").value;
    var customerCountry = document.getElementById("country").value;
    var customerPower = document.getElementById("power").value;
    /* console.log(" a "+customerName+" b "+parseInt(customerAge)+" c "+customerCountry+" d "+customerPower);*/
    var insuranceA = parseInt(((customerPower * customerCountry) / customerAge)) + 50;
    var insuranceG = parseInt(((customerPower * customerCountry) / customerAge + 3)) + 50;
    var insuranceH = parseInt(((customerPower * customerCountry) / customerAge)) + 100;
    var nameCapitalized = customerName.charAt(0).toUpperCase() + customerName.slice(1);
    if (parseInt(customerCountry) == 100) {
       
        document.getElementById("calcText").innerHTML =   nameCapitalized + ", your insurance costs " + insuranceA + "€";

    } else if (parseInt(customerCountry) == 120) {
       
        document.getElementById("calcText").innerHTML =   nameCapitalized + ", your insurance costs " + insuranceH + "€";
    } else {
        
        document.getElementById("calcText").innerHTML =  nameCapitalized + ", your insurance costs " + insuranceG + "€";
    }


}