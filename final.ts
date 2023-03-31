export default function strCalulator(str: string): number | number[] {
  if (!str) return 0;
  let sum = 0;
  const arrOfNegativeNums: Array<number> = [];

  const arrOfstr = str.replace(/\n/g, "");
  const arrOfNum: number[] = [];
  let numAsStr = "";

  for (let i = 2; i < arrOfstr.length; i++) {
    const item = Number(arrOfstr[i]);
    if (Math.sign(item) == -1) {
      arrOfNegativeNums.push(item);
      continue;
    }
    if (arrOfstr[i] == "-") {
      numAsStr = numAsStr + item;
      continue;
    }
    if (!isNaN(item)) {
      numAsStr = "" + Number(numAsStr + item);
    }
    if (isNaN(Number(arrOfstr[i + 1]))) {
      arrOfNum.push(Number(numAsStr));

      numAsStr = "";
    }
  }

  for (let i = 0; i < arrOfNum.length; i++) {
    const item = Number(arrOfNum[i]);
    if (Math.sign(item) == -1) {
      arrOfNegativeNums.push(item);
      continue;
    }

    if (item && item <= 1000) {
      sum += item;
    }
  }
  if (arrOfNegativeNums.length) {
    throw new Error(`Negatives not allowed: ${arrOfNegativeNums}`);
  }
  return sum;
}
