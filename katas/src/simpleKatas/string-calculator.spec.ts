import { describe, expect, test } from "vitest";
import { add } from "./string-calculator";

describe("StringCalculator Kata", () => {
  test("USAGE PAYLOAD, to use and see the result (Intended to experiment and test with the function)", () => {
    const INPUT: string = "2 + 2x2^2"; // Modifica esto para experimentar con la funcion y ver las posibilidades (está pa jugar con esto jaja, sino seria hacer un frontend)

    const result = add(INPUT);
    expect(result).toBeTypeOf("number");
    console.log(`StringCalculator Input Result: ` + result.toLocaleString());
  });

  test("Given one number in string, should return the same number in number type", () => {
    const result = add("5");
    expect(result).toBe(5);
  });
  test("Given three numbers in string separated by commas, should return the sum of the numbers", () => {
    const result = add("1,2,3");
    expect(result).toBe(6);
  });
  test("Given an extra separator, should throw", () => {
    expect(() => add("12,,2")).toThrow();
  });
  test("Given some numbers, both positive and negative, should properly calculate the sum", () => {
    const result = add("-5,0,7");
    expect(result).toBe(2);
  });
  test("Given decimal numbers using a dot, should correctly sum them", () => {
    const result = add("5.2,7.2");
    expect(result).toBe(12.4);
  });
  test("Given numbers separated by a slash, should properly return the sum of the numbers", () => {
    const result = add("5/2");
    expect(result).toBe(7);
  });
  test("Given numbers separated by a plus, should properly return the sum of the numbers", () => {
    const result = add("5+2");
    expect(result).toBe(7);
  });
  test("Given a number that is in cientific notation, should sum it correctly", () => {
    const result = add("5x10^2,5");
    expect(result).toBe(505);
  });
  test("Given a power 0 in cientific notation, should sum it correctly", () => {
    const result = add("5x10^0,5");
    expect(result).toBe(10);
  });
  test("Given no base when using cientific notation, should throw", () => {
    expect(() => add("12,2x^2")).toThrow();
  });
  test("Given base with letters when using cientific notation, should throw", () => {
    expect(() => add("12,2x2abc^2")).toThrow();
  });
  test("Given power with letters when using cientific notation, should throw", () => {
    expect(() => add("12,2x2^2as")).toThrow();
  });
  test("Given a number that is in cientific notation but no power, should consider a power 1 and sum correctly", () => {
    const result = add("5x10,5");
    expect(result).toBe(55);
  });
  test("Given no power number in cientific notation BUT a ^, should throw", () => {
    expect(()=>add("5x10^,5")).toThrow();
  });

  test("Given a value with E notation, should sum them correctly", () => {
    const result = add("4E2,4");
    expect(result).toBe(404);
  });
  test("Given a value with e notation, should sum them correctly", () => {
    const result = add("4e2,4");
    expect(result).toBe(404);
  });

  test("Given an empty string, should throw", () => {
    expect(add).toThrow();
    expect(() => add("")).toThrow();
  });

  test("Given a non numeric string, should throw", () => {
    expect(() => add("hola,2")).toThrow();
  });

  test("Given an exponential with different base, should return correctly", () => {
    const result = add("1x9^2");
    expect(result).toBe(81);
  });

  test("Given numbers separated with spaces, should still calculate correctly", () => {
    const result = add("4e2 , 4");
    expect(result).toBe(404);
  });

  test("Given just a space, should throw", () => {
    expect(() => add(" ")).toThrow();
  });
});
