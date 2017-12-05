// CALCULATOR //

//GET ELEMENT BY ID
function getId(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

let addBtn = getId("add");
let subtractBtn = getId("subtract");
let multiplyBtn = getId("multiply");
let divideBtn = getId("divide");
let buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
let func = [add, subtract, multiply, divide];
let numOne = getId("number1");
let numTwo = getId("number2");

/*
Create a function that adds two numbers
passed in as arguments. Return the sum.
*/

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

 function subtract(num1, num2) {
    return Number(num1) - Number(num2);
 }

/*
Create a function that multiplies two numbers
passed in as arguments. Return the product.
*/

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 function divide(num1, num2) {
     return Number(num1) / Number(num2);
 }

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function calculate(num1, num2, func) {
    return func(num1, num2);
}

// Loop though buttons to add event listener and calculte result
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    let result = calculate(numOne.value, numTwo.value, func[i]);
    printToDom(result);
    }
  )
}

//Printo to Dom
function printToDom(result) {
    var resultDiv = getId("result");
    resultDiv.innerHTML = result;
}