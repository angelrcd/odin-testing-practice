const analizeArray = require("./analizeArray");

test("Calculate average", () => {
  expect(analizeArray([1,8,3,4,2,6]).average).toBe(4);
  expect(analizeArray([3,1]).average).toBe(2);
})

test("Calculate min", () => {
  expect(analizeArray([1,8,3,4,2,6]).min).toBe(1);
  expect(analizeArray([1,1,1,5]).min).toBe(1);
  expect(analizeArray([-100, 1, 5]).min).toBe(-100);
})

test("Calculate max", () => {
  expect(analizeArray([1,8,3,4,2,6]).max).toBe(8);
  expect(analizeArray([1,5,5,5]).max).toBe(5);
})

test("Length", () => {
  expect(analizeArray([1,8,3,4,2,6]).length).toBe(6);
  expect(analizeArray([]).length).toBe(0);
})