/**
 * 11 - Loopimg through the array
 * The starting still be 2 because we want to skip '//' and the first delimiter
 * 12 - we check if item is '-' if it is, we take the next itemtoo and merge them together, then we treat them as a single item
 * 13 - using the sliding window technique, after adding the merged negative number into an array, i move the pointer to i + 2
 * 18 - but if the item isnt - and it is not a integer, I add it to the sum variable.
 */

// export default function strCalulator(str: string): number | Array<number> {
//   let sum = 0;
//   const arrOfNegativeNums: Array<number> = [];
//   for (let i = 2; i < str.length; i++) {
//     let item: number;
//     if (str[i] == "-") {
//       item = Number(`${str[i]}${str[i + 1]}`);
//       arrOfNegativeNums.push(item);
//       i = i + 1;
//       continue;
//     } else {
//       item = Number(str[i]);
//     }

//     if (item) {
//       sum += item;
//     }
//   }
//   if (arrOfNegativeNums.length) {
//     return arrOfNegativeNums;
//   }
//   return sum;
// }

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
