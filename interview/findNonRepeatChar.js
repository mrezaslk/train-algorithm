const str = "aabbccdde";
function firstUniqueCharStable(s) {
  const freq = new Map();
  for (const ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);
  console.log("freq =>", freq);
  for (const [ch, count] of freq) if (count === 1) return ch;
  return null;
}
console.log("firstUniqueCharStable =>", firstUniqueCharStable(str));
// let repeatChar = [];
// for (const char of str) {
//   if (!repeatChar.includes(char)) {
//     repeatChar.push(char);
//   } else {
//     repeatChar = repeatChar.filter((item) => item !== char);
//   }
// }
// console.log("repeatChar", repeatChar[0]);
