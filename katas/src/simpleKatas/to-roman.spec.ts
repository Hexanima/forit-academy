import { describe, expect, test } from "vitest";
import { toRoman } from "./to-roman";

describe("ToRoman Kata", () => {
  // Base numbers
  test("Given a 5, should return its roman counterpart V", () =>
    expect(toRoman(1)).toBe("I"));
  test("Given a 1, should return its roman counterpart I", () =>
    expect(toRoman(5)).toBe("V"));
  test("Given a 10, should return its roman counterpart X", () =>
    expect(toRoman(10)).toBe("X"));
  test("Given a 50, should return its roman counterpart L", () =>
    expect(toRoman(50)).toBe("L"));
  test("Given a 100, should return its roman counterpart C", () =>
    expect(toRoman(100)).toBe("C"));
  test("Given a 500, should return its roman counterpart D", () =>
    expect(toRoman(500)).toBe("D"));
  test("Given a 1000, should return its roman counterpart M", () =>
    expect(toRoman(1000)).toBe("M"));

  // Limits
  test("Given a number greater than 4998, should return 'Out of range'", () =>
    expect(toRoman(4999)).toBe("Out of range"));
  test("Given a 0, should return 'No zero'", () =>
    expect(toRoman(0)).toBe("No zero"));
  test("Given smaller than 0, should return 'No negatives'", () =>
    expect(toRoman(-1)).toBe("No negatives"));

  // Basic adding
  test("Given a 6, should return VI", () => expect(toRoman(6)).toBe("VI"));
  test("Given a 7, should return VII");
  test("Given an 11, should return XI");
  test("Given an 13, should return XIII");
  test("Given an 15, should return XV");
  test("Given an 17, should return XVII");
  test("Given an 21, should return XXI");

  // Basic substraction
  test("Given a 4, should return IV");
  test("Given a 9, should return IX");
  test("Given a 14, should return XIV");
  test("Given a 19, should return XIX");
});
