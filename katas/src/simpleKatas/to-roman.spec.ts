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

  // Max range (No me se mas numeros en romano, solo hasta la M)
  test("Given a number greater than 4998, should return 'Out of range'", () =>
    expect(toRoman(4999)).toBe("Out of range"));

  // Basic adding
  test("Given an 11, should return XI", () => expect(toRoman(11)).toBe("XI"));
  test("Given an 13, should return XI", () => expect(toRoman(13)).toBe("XIII"));
});
