function add (a, b) {
  return a + b
}

const subtract = ((a, b) => a - b)

const multiply = ((a, b) => a * b)

const divide = ((a, b) => a / b)

const firstNumber = 'a'

const secondNumber = 'b' 

const operator  = + 

function operate(operator, a, b) {
  if (operator === '+') {
    add(a, b)
  }
  else if (operator === '-' ) {
    subtract(a, b)
  }
  else if (operator === '*') {
    multiply(a, b)
  }
  else if (operator === '/') {
    divide(a, b)
  }
} 



const displayNumbers = document.getElementById("numbers");
let currentNumber = '';

for (let i = 0; i < document.querySelectorAll(".flexButton").length; i++) {
  document.querySelectorAll(".flexButton")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.textContent;
    currentNumber += buttonInnerHTML; // Append the clicked number to the current number
    displayNumbers.textContent = currentNumber; // Update the displayed number
    buttonAnimation(this);
  });
}

function buttonAnimation(button) {
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 150);
}





