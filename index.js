function add (a, b) {
  return a + b
}


const subtract = ((a, b) => a - b)

const multiply = ((a, b) => a * b)

const divide = ((a, b) => a / b)

const firstNumber = a 

const secondNumber = b 

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