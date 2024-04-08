const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multBtn = document.querySelector("#mult");
const divBtn = document.querySelector("#divide");
const equal = document.querySelector("#equal");

const add = function(a,b) {
    return display.textContent+= `= ${a+b}`;
}

const subtract = function(a,b) {
    return display.textContent+= `= ${a-b}`;
}

const multiply = function(a,b) {
    return display.textContent+= `= ${a*b}`;
}

const divide = function(a,b) {
    if (b === 0){
        return "Error"
    }
    return display.textContent+= `= ${a/b}`;
}

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

const updateDisplay = function(a){
    display.textContent += a;
    return display.textContent;
}

const clearDisplay  = () => {
    display.textContent='';
    addBtn.disabled = false;
    minusBtn.disabled = false;
    multBtn.disabled = false;
    divBtn.disabled = false;
}

let expression = [];

equal.addEventListener("click", () => {
    expression = updateDisplay('').split(' ');
    let type = expression[1].charAt(0);
    let value1 = +expression[0];
    let value2 = +expression[1].slice(1);
    operate(value1, value2, type);


})