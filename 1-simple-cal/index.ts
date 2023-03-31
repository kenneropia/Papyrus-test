/**
 * If the string is empty that most likely means there is no numbers
 * Using ',' as a delimiter and assuming all other chars can be converted to a num. construct an array
 * Loop over the arr adding the itemx to a whole sum variable
 **/
export default function strCalulator(str: string): number {
  if (!str) return 0;
  const arrONum = str.split(",");
  const sumOfNum = arrONum.reduce((a, b) => a + Number(b), 0);
  return sumOfNum;
}

/**
 * Loop through all the array items adding all items that can be converted to an integer into a variable
 **/
// export default function strCalulator(str: string): number {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     const item = Number(str[i]);
//     if (item) {
//       sum += item;
//     }
//   }
//   return sum;
// }
