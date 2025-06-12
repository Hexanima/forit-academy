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

        let [base, power] = exponential.split("^");
        if (base === "") throw new Error("Wrong base detected" + exponential);
        if (power === "")
          throw new Error("Wrong power detected: " + exponential);
        if (power === undefined) power = "1";

        const baseNum = Number(base);
        const powerNum = Number(power);

        if (Number.isNaN(baseNum))
          throw new Error("Base has a letter: " + base);
        if (Number.isNaN(powerNum))
          throw new Error("Power has a letter: " + power);
        let number = Number(numStr);
        for (let i = 1; i <= powerNum; i++) {
          number *= baseNum;
        }
        return number;
      }
      const res = Number(trimmedVal);
      if (Number.isNaN(res))
        throw new Error(
          "Error parsing the numbers, make sure there is no letters: " +
            trimmedVal
        );
      return res;
    })
    .reduce<number>((prev, val) => prev + val, 0);

  return result;
}
