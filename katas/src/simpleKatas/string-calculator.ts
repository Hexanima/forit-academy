export function add(payload: string): number {
  const curatedString = payload.trim();
  if (curatedString.length === 0) throw new Error("Please enter a number");
  const result = curatedString
    .split(new RegExp("[/,+]"))
    .map<number>((value) => {
      const trimmedVal = value.trim();
      if (trimmedVal.length === 0) throw new Error("Extra separator detected");
      if (trimmedVal.includes("x")) {
        const [numStr, exponential] = trimmedVal.split("x");

        let [base, power] = exponential.split("^").map((val) => Number(val));
        if (Number.isNaN(base)) throw new Error("Base has a letter");
        if (Number.isNaN(power)) throw new Error("Power has a letter");
        if (!base) throw new Error("Wrong exponential detected");
        if (!power) power = 1;
        let number = Number(numStr);
        for (let i = 1; i <= power; i++) {
          number *= base;
        }
        return number;
      }
      return Number(trimmedVal);
    })
    .reduce<number>((prev, val) => prev + val, 0);

  if (Number.isNaN(result))
    throw new Error("Error parsing the numbers, make sure there is no letters");
  return result;
}
