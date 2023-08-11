const caesarCipher = require("./caesarCipher");

test("no shift", () => {
  expect(caesarCipher("abcde", 0)).toBe("abcde");
  expect(caesarCipher("ABCDE", 0)).toBe("ABCDE");
});

test("no wrap, no uppercase", () => {
  expect(caesarCipher("abcde", 1)).toBe("bcdef");
  expect(caesarCipher("abcde", 2)).toBe("cdefg");
});

test("string with spaces and special symbols", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
  expect(caesarCipher("hello!!!11", 1)).toBe("ifmmp!!!11");
});

test("uppercase", () => {
  expect(caesarCipher("ABCDE", 1)).toBe("BCDEF");
  expect(caesarCipher("DEFEND THE EAST WALL!", 1)).toBe("EFGFOE UIF FBTU XBMM!");
});

test("wrap", () => {
  expect(caesarCipher("tuvwxyz", 3)).toBe("wxyzabc");
  expect(caesarCipher("defend the east wall", 20)).toBe("xyzyhx nby yumn quff");
  expect(caesarCipher("TUVWXYZ", 3)).toBe("WXYZABC");
  expect(caesarCipher("DEFEND THE EAST WALL", 20)).toBe("XYZYHX NBY YUMN QUFF");
});

test("big shifts", () => {
  expect(caesarCipher("Defend the east wall", 1299)).toBe("Cdedmc sgd dzrs vzkk");
  expect(caesarCipher("Defend the east wall", 78)).toBe("Defend the east wall");
});