/* eslint-disable no-undef */
const calculator = require("./calculator");

test("add operation", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(0, -1)).toBe(-1);
});

test("subtract operation", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(0, -1)).toBe(1);
});

test("divide operation", () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(1, 0)).toBe(Infinity);
  expect(calculator.divide(1, -1)).toBe(-1);
});

test("multiply operation", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(5, -2)).toBe(-10);
  expect(calculator.multiply(1, 0)).toBe(0);
});

test("floating point values", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.subtract(1, 0.6)).toBeCloseTo(0.4);
  expect(calculator.divide(1, 0.5)).toBe(2);
  expect(calculator.multiply(0.2, 3)).toBeCloseTo(0.6);
});