const button = document.querySelectorAll("button");
const display = document.querySelector(".display");

const add = function(a,b) {
    return a+b;
}

const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a*b;
}

const divide = function(a,b) {
    if (b === 0){
        return "Error"
    }
    return a/b;
}

let value1;
let value2;
let operatorType;

const operate = function(a,b,type){
    if (type === '+'){
        return add(a,b);
    } else if (type === '-'){
        return subtract(a,b);
    } else if (type === '*'){
        return multiply(a,b)
    } else if (type === '/'){
        return divide(a,b);
    } else {
        return "Invalid type"
    }
}

console.log(button);