'use strict'

// Core calculator logic used by CLI and tests
// Supported operations:
//  - add (addition)        : add 2 3  OR use +
//  - sub (subtraction)     : sub 5 2  OR use -
//  - mul (multiplication)  : mul 4 3  OR use * or x
//  - div (division)        : div 8 2  OR use /
//  - mod (modulo)         : mod 10 3 OR use %
//  - pow (exponentiation) : pow 2 8 OR use ^ or **
//  - sqrt (square root)   : sqrt 9  (unary)

function toNumber(v) {
  const n = Number(v)
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${v}`)
  }
  return n
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero')
  return a % b
}

function power(base, exponent) {
  return Math.pow(base, exponent)
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number')
  return Math.sqrt(n)
}

function calculate(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return a + b
    case 'sub':
    case '-':
      return a - b
    case 'mul':
    case '*':
    case 'x':
    case 'X':
      return a * b
    case 'div':
    case '/':
      if (b === 0) throw new Error('Division by zero')
      return a / b
    case 'mod':
    case '%':
      return modulo(a, b)
    case 'pow':
    case '^':
    case '**':
      return power(a, b)
    case 'sqrt':
      // unary: use `a` as the single operand
      if (a === undefined) throw new Error('Missing operand for sqrt')
      return squareRoot(a)
    default:
      throw new Error(`Unknown operation: ${op}`)
  }
}

module.exports = { toNumber, calculate, modulo, power, squareRoot }
