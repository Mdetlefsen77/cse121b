/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    const subtractNumber1 = Number(document.querySelector("#subtract1").value);
    const subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) {
    return number1 * number2;
}

const multiplyNumbers = () => {
    const multiplyNumber1 = Number(document.querySelector("#factor1").value);
    const multiplyNumber2 = Number(document.querySelector("#factor1").value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const divideNumber1 = Number(document.querySelector("#dividend").value);
    const divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function () {
    const subtotalValue = parseFloat(document.getElementById("subtotal").value) || 0;
    const isMember = document.getElementById("member").checked;
    const discount = isMember ? 0.2 : 0;
    const total = subtotalValue * (1 - discount);
    document.getElementById("total").textContent = `$${total.toFixed(2)}`
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
evensElement.innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sumOfArray.toString();

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied.toString();
