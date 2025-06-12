export function fizzBuzz(value: number): string {
  const originalValue = value;
  const [, hasDecimal] = value.toString().split(".");

  if (hasDecimal) value = Number(hasDecimal);

  const isDivisibleBy5 = value % 5 === 0;
  const isDivisibleBy3 = value % 3 === 0;

  if (isDivisibleBy5 && isDivisibleBy3) return "FizzBuzz";
  if (isDivisibleBy5) return "Buzz";
  if (isDivisibleBy3) return "Fizz";
  return originalValue.toString();
}
