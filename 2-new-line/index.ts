/**
 * My original solution can still be used to handle the new requirements
 */

export default function strCalulator(str: string): number {
  if (!str) return 0;
  let sum = 0;
  const arrOfNum = str.split(",");
  for (let i = 0; i < arrOfNum.length; i++) {
    const item = Number(arrOfNum[i]);
    if (item) {
      sum += item;
    }
  }

  return sum;
}
