#!/usr/bin/env node
'use strict'

// Node.js CLI Calculator (thin wrapper around core logic)
// Supported operations are listed in src/calculator-core.js

const fs = require('fs')
const { toNumber, calculate } = require('./calculator-core')

function printUsage() {
  console.log('Usage: node src/calculator.js <op> <num1> <num2>')
  console.log('Or provide an expression on stdin, e.g. echo "2 + 3" | node src/calculator.js')
  console.log('\nSupported ops: add (+), sub (-), mul (*, x), div (/)')
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
  const parts = txt.split(/\s+/)
  if (parts.length === 3 && /^[+\-*/xX]$/.test(parts[1])) {
    const a = toNumber(parts[0])
    const op = parts[1]
    const b = toNumber(parts[2])
    console.log(calculate(op, a, b))
    return
  }
  if (parts.length === 3 && /^(add|sub|mul|div)$/i.test(parts[0])) {
    const op = parts[0].toLowerCase()
    const a = toNumber(parts[1])
    const b = toNumber(parts[2])
    console.log(calculate(op, a, b))
    return
  }
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

    const stat = fs.fstatSync(process.stdin.fd)
    if (stat && stat.isFIFO() || !process.stdin.isTTY) {
      let data = ''
      process.stdin.setEncoding('utf8')
      for await (const chunk of process.stdin) data += chunk
      runFromStdin(data)
      return
    }

    printUsage()
    process.exit(2)
  } catch (err) {
    console.error('Error:', err.message)
    process.exit(1)
  }
}

main()
