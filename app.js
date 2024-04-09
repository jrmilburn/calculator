let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberBtns = document.querySelectorAll('#data-number');
const operatorBtns = document.querySelectorAll('#data-operator');
const equalBtn = document.querySelector('#equalsBtn');
const clearBtn = document.querySelector('#clearBtn');
const lastOp = document.querySelector('#lastOperationScreen');
const currentOp = document.querySelector('.screen-current');



numberBtns.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)))


function appendNumber(number){
    if(currentOp.textContent === '0' || shouldResetScreen){
        resetScreen();
    }
    currentOp.textContent += number;
}

const resetScreen = function(){
    currentOp.textContent = '';
    shouldResetScreen = false;
}

const clear = function() {
    currentOp.textContent = '0';
    lastOp.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}

const setOperation = function(operator) {
    if(currentOperation !== null) {evaluate}
    firstOperand = currentOp.textContent;
    currentOperation = operator;
    lastOp.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
}

const evaluate = function(){
    if(currentOperation === null || shouldResetScreen) {return}
    else if(currentOperation === '/' && currentOp.textContent === '0'){
        currentOp.textContent = "Can't divide by 0 ya hero";
        return
    }
    secondOperand = currentOp.textContent;
    currentOp.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand));
    lastOp.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    currentOperation = null;
}

const roundResult = function(number){
    return Math.round(number * 1000) / 1000;
}

const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(operator, a, b){
    a = +a;
    b = +b;
    if(operator === '+'){
        return add(a,b);
    }else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === '*'){
        return multiply(a,b);
    }else if(operator === '/'){
        if(b===0){return null}
        else{return divide(a,b)}
    } else {
        return "Operation Error"
    }
}

equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);