'use strict'

// Core calculator logic used by CLI and tests
// Supported operations:
//  - add (addition)        : add 2 3  OR use +
//  - sub (subtraction)     : sub 5 2  OR use -
//  - mul (multiplication)  : mul 4 3  OR use * or x
//  - div (division)        : div 8 2  OR use /

function toNumber(v) {
  const n = Number(v)
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${v}`)
  }
  return n
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
    default:
      throw new Error(`Unknown operation: ${op}`)
  }
}

module.exports = { toNumber, calculate }
