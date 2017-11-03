var express = require('express');
var app = express();
var rs = require('readline-sync');

    var result ;
    var firstNumber = rs.question('Enter a Number ?');
    var secondNumber = rs.question('Enter another no. ?');
    var operation = rs.question('Enter the operation to perform the task ? ');

    switch(operation) {
        case "+": 
        result= parseFloat(firstNumber) + parseFloat(secondNumber);
        break;

        case "-":
        result= parseFloat(firstNumber) - parseFloat(secondNumber);
        break;

        case "*":
        result= parseFloat(firstNumber) * parseFloat(secondNumber);
        break;

        case "/":
        result= parseFloat(firstNumber) / parseFloat(secondNumber);
        break;

        default:
        console.log("server is running");
    }
    console.log("The result is " + result);
app.listen(3000, function() {
    console.log("first api running");
});