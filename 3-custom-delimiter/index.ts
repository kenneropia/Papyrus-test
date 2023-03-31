/**
 * My original solution from '2-new-line' can still be used to handle the new requirements
 */

export default function strCalulator(str: string): number {
  if (!str) return 0;
  let sum = 0;
  const delimiter = str[2];

  const arrOfNum = str.replace(/\n/g, "").split(delimiter);

  for (let i = 1; i < arrOfNum.length; i++) {
    const item = Number(arrOfNum[i]);
    if (item) {
      sum += item;
    }
  }

  return sum;
}
