const add = ((a, b) => a + b)
const subtract = ((a, b) => a - b)
const multiply = ((a, b) => a * b)
const divide = ((a, b) => a / b)

let operator;
let secondNumber;

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
    default:
      return "Invalid operator";
  }
}

const displayNumbers = document.getElementById("numbers");
let firstNumber = '';

for (let i = 0; i < document.querySelectorAll(".flexButton").length; i++) {
  document.querySelectorAll(".flexButton")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.textContent; // grabs the number that user clicked
    firstNumber += buttonInnerHTML; // Append the clicked number to the current number
    displayNumbers.textContent = firstNumber; // Update the displayed number
    console.log(firstNumber)
    buttonAnimation(this);
  });
}

function buttonAnimation(button) {
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 150);
}

//clear button 
const clearButton = document.getElementById("clear")
clearButton.addEventListener('click', clearCurrentNumber); 
function clearCurrentNumber() {
  firstNumber = '';
  displayNumbers.textContent = '';
}


const addButton = document.getElementById("add");
addButton.addEventListener('click', function() {
  operator = "+"; 
  // For example, you can call the operate function passing the operator and numbers
});



const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
