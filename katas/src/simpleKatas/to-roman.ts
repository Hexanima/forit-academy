const romanDictionary: Record<number, string> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

export function toRoman(value: number): string {
  if (value > 4998) return "Out of range";

  return romanDictionary[value];
}
