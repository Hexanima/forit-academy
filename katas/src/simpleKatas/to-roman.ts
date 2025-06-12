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
  const valueArr = value.toString().split("");

  let result: string = "";

  for (let i = valueArr.length - 1; i >= 0; i--) {
    const currentVal = Number(valueArr[i]) * 10 ** (valueArr.length - 1 - i);
    if (currentVal === 0) continue;
    result = romanDictionary[currentVal] + result;
  }

  return result;
}
