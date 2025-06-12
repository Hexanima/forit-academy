import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizz-buzz";

describe("FizzBuzz Kata", () => {
  test("Given a number that is divisible by 3, should return 'Fizz'", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  test("Given a number that is divisible by 5, should return 'Buzz'", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  test("Given a number that is divisible by both 3 and 5, should return 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  test("Given a number that is not divisible by neither 3 and 5, should return the same number", () => {
    expect(fizzBuzz(16)).toBe("16");
    expect(fizzBuzz(31)).toBe("31");
  });

  test("Given a negative number that is divisible by 3, should return 'Fizz'", () => {
    expect(fizzBuzz(-3)).toBe("Fizz");
    expect(fizzBuzz(-6)).toBe("Fizz");
  });
  test("Given a negative number that is divisible by 5, should return 'Buzz'", () => {
    expect(fizzBuzz(-5)).toBe("Buzz");
    expect(fizzBuzz(-10)).toBe("Buzz");
  });
  test("Given a negative number that is divisible by both 3 and 5, should return 'FizzBuzz'", () => {
    expect(fizzBuzz(-15)).toBe("FizzBuzz");
    expect(fizzBuzz(-30)).toBe("FizzBuzz");
  });
  test("Given a negative number that is not divisible by neither 3 and 5, should return the same number", () => {
    expect(fizzBuzz(-16)).toBe("-16");
    expect(fizzBuzz(-31)).toBe("-31");
  });

  test("Given a number with decimals that are divisible by 3, should return 'Fizz'", () => {
    expect(fizzBuzz(12.3)).toBe("Fizz");
    expect(fizzBuzz(12.6)).toBe("Fizz");
  });
  test("Given a number with decimals that are divisible by 5, should return 'Buzz'", () => {
    expect(fizzBuzz(12.5)).toBe("Buzz");
    expect(fizzBuzz(12.55)).toBe("Buzz");
  });
  test("Given a number with decimals that are divisible by both 3 and 5, should return 'FizzBuzz'", () => {
    expect(fizzBuzz(12.45)).toBe("FizzBuzz");
    expect(fizzBuzz(12.15)).toBe("FizzBuzz");
  });
  test("Given a number with decimals that aren't divisible by neither 3 and 5, should return the same number", () => {
    expect(fizzBuzz(12.4)).toBe("12.4");
    expect(fizzBuzz(12.8)).toBe("12.8");
  });
});
