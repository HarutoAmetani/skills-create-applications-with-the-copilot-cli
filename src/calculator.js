#!/usr/bin/env node
'use strict'

// Node.js CLI Calculator
// Supported operations:
//  - add (addition)        : add 2 3  OR use +
//  - sub (subtraction)     : sub 5 2  OR use -
//  - mul (multiplication)  : mul 4 3  OR use * or x
//  - div (division)        : div 8 2  OR use /
// Usage examples:
//  node src/calculator.js add 2 3
//  node src/calculator.js + 2 3
//  echo "2 + 3" | node src/calculator.js
// The calculator handles division-by-zero with a friendly error and non-zero exit code.

const fs = require('fs')

function printUsage() {
  console.log('Usage: node src/calculator.js <op> <num1> <num2>')
  console.log('Or provide an expression on stdin, e.g. echo "2 + 3" | node src/calculator.js')
  console.log('\nSupported ops: add (+), sub (-), mul (*, x), div (/)')
}

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

function runFromArgs(argv) {
  if (argv.length < 3) {
    printUsage()
    process.exit(2)
  }
  const op = argv[0]
  const a = toNumber(argv[1])
  const b = toNumber(argv[2])
  const res = calculate(op, a, b)
  console.log(res)
}

function runFromStdin(stdinData) {
  const txt = stdinData.trim()
  if (!txt) {
    printUsage()
    process.exit(2)
  }
  // Try to parse formats like: "2 + 3" or "add 2 3"
  const parts = txt.split(/\s+/)
  if (parts.length === 3 && /^[+\-*/xX]$/.test(parts[1])) {
    // form: num op num
    const a = toNumber(parts[0])
    const op = parts[1]
    const b = toNumber(parts[2])
    console.log(calculate(op, a, b))
    return
  }
  if (parts.length === 3 && /^(add|sub|mul|div)$/i.test(parts[0])) {
    // form: op num num
    const op = parts[0].toLowerCase()
    const a = toNumber(parts[1])
    const b = toNumber(parts[2])
    console.log(calculate(op, a, b))
    return
  }
  // As a fallback, try to evaluate a simple expression safely: number operator number
  const match = txt.match(/\s*([-+]?[0-9]*\.?[0-9]+)\s*([+\-*/xX])\s*([-+]?[0-9]*\.?[0-9]+)\s*/)
  if (match) {
    const a = toNumber(match[1])
    const op = match[2]
    const b = toNumber(match[3])
    console.log(calculate(op, a, b))
    return
  }

  throw new Error('Could not parse stdin expression. Expected formats: "2 + 3" or "add 2 3"')
}

async function main() {
  try {
    const argv = process.argv.slice(2)
    if (argv.length >= 3) {
      runFromArgs(argv)
      return
    }

    // If there are fewer than 3 args, check stdin
    const stat = fs.fstatSync(process.stdin.fd)
    if (stat && stat.isFIFO() || !process.stdin.isTTY) {
      // Data is being piped
      let data = ''
      process.stdin.setEncoding('utf8')
      for await (const chunk of process.stdin) data += chunk
      runFromStdin(data)
      return
    }

    // If no stdin and not enough args, show usage
    printUsage()
    process.exit(2)
  } catch (err) {
    console.error('Error:', err.message)
    process.exit(1)
  }
}

main()
