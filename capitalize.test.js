/* eslint-disable no-undef */
const capitalize = require("./capitalize");

test("capitalize happy case", () => {
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("bye")).toBe("Bye");
});

test("Test should be Test", () => {
  expect(capitalize("Test")).toBe("Test");
});

test("TEST should be TEST", () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("characters with no uppercase", () => {
  expect(capitalize("1abc")).toBe("1abc");
  expect(capitalize("@")).toBe("@");
  expect(capitalize(" ")).toBe(" ");
});

test("multiple words sentence", () => {
  expect(capitalize("three word test")).toBe("Three word test");
});