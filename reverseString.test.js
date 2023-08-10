/* eslint-disable no-undef */
const reverseString = require("./reverseString");

test("reverse happy case", () => {
  expect(reverseString("test")).toBe("tset");
  expect(reverseString("bye")).toBe("eyb");
});

test("reverse empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverse sentence", () => {
  expect(reverseString("three word sentence")).toBe("ecnetnes drow eerht");
});