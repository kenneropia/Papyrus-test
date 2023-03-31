export default function strCalulator(str: string): number | number[] {
  if (!str) return 0;
  let sum = 0;
  const arrOfNegativeNums: Array<number> = [];
  const delimiter = str[2];
  const arrOfNum = str.replace(/\n/g, "").split(delimiter);
  for (let i = 1; i < arrOfNum.length; i++) {
    const item = Number(arrOfNum[i]);
    if (Math.sign(item) == -1) {
      arrOfNegativeNums.push(item);
      continue;
    }

    if (item) {
      sum += item;
    }
  }
  if (arrOfNegativeNums.length) {
    throw new Error(`Negatives not allowed: ${arrOfNegativeNums}`);
  }
  return sum;
}
