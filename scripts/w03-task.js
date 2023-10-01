/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
    //function body
    return number1 + number2;
}


/* Function Definition - Add Numbers */
function addNumbers()
{
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */
function subtractNumbers()
{
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = add(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = () => document.querySelector("#product").value = number(document.querySelector("#factor1")) * number(document.querySelector("#factor2").value);

let multiplyNumbers = document.querySelector("#multiplyNumbers".addEventListener("click"), multiply);

/* Open Function Use - Divide Numbers */
const divide = () => document.querySelector("#quotient").value = number(document.querySelector("#dividend")) / number(document.querySelector("#divisor").value);

let divideNumbers = document.querySelector("#divideNumbers".addEventListener("click"), divide);

/* Decision Structure */
let currentDate = new Date().getFullYear;
let currentYear = new Date(year);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let arrayElement = document.getElementById("array").value
    
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
array.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
array.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
