function add (a, b) {
  return a + b
}

console.log(add(20, 30))



const subtract = ((a, b) => a - b)

console.log(subtract(24, 4))

const multiply = ((a, b) => a * b)

console.log(multiply(2, 4))

const divide = ((a, b) => a / b)

console.log(divide(40, 10))


2 + 2 

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