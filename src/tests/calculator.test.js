const { calculate, toNumber } = require('../calculator-core')

describe('calculator core', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calculate('+', 2, 3)).toBe(5)
    expect(calculate('add', 2, 3)).toBe(5)
  })

  test('subtraction: 10 - 4 = 6', () => {
    expect(calculate('-', 10, 4)).toBe(6)
    expect(calculate('sub', 10, 4)).toBe(6)
  })

  test('multiplication: 45 * 2 = 90', () => {
    expect(calculate('*', 45, 2)).toBe(90)
    expect(calculate('mul', 45, 2)).toBe(90)
  })

  test('division: 20 / 5 = 4', () => {
    expect(calculate('/', 20, 5)).toBe(4)
    expect(calculate('div', 20, 5)).toBe(4)
  })

  test('division by zero throws', () => {
    expect(() => calculate('/', 1, 0)).toThrow(/Division by zero/)
  })

  test('invalid operation throws', () => {
    expect(() => calculate('powr', 2, 3)).toThrow(/Unknown operation/)
  })

  test('toNumber rejects non-number input', () => {
    expect(() => toNumber('abc')).toThrow(/Invalid number/)
  })

  test('works with floats and negatives', () => {
    expect(calculate('+', -1.5, 2.25)).toBeCloseTo(0.75)
    expect(calculate('/', 7.5, 2.5)).toBeCloseTo(3)
  })

  // New operation tests
  test('modulo: 10 % 3 = 1', () => {
    expect(calculate('%', 10, 3)).toBe(1)
    expect(calculate('mod', 10, 3)).toBe(1)
  })

  test('modulo by zero throws', () => {
    expect(() => calculate('%', 5, 0)).toThrow(/Modulo by zero/)
  })

  test('power: 2 ^ 8 = 256', () => {
    expect(calculate('^', 2, 8)).toBe(256)
    expect(calculate('pow', 2, 8)).toBe(256)
    expect(calculate('**', 2, 8)).toBe(256)
  })

  test('square root: sqrt 9 = 3', () => {
    expect(calculate('sqrt', 9)).toBe(3)
  })

  test('square root of negative throws', () => {
    expect(() => calculate('sqrt', -4)).toThrow(/Square root of negative number/)
  })
})
