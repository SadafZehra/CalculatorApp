function getNumber(num){
 var result = document.getElementById("result");
 result.value += num;
}
 
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";  
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);  
}

function getCube(){
   var result = document.getElementById("result");
   result.value = result.value*result.value*result.value;  
}

function getSquare(){
    var result = document.getElementById("result");
    result.value = result.value*result.value;  
 }

 function getDivide(){
    var result = document.getElementById("result");
    result.value = 1/result.value;  
 }