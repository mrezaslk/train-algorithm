// function firstDup(s) {
//   let strtoArr = s.split("");
//   let repeatItem = [];
//   let ind = [];
//   for (let i = 0; i < strtoArr.length; i++) {
//     for (let j = i + 1; j < strtoArr.length; j++) {
//       if (strtoArr[i] === strtoArr[j]) {
//         repeatItem.push(strtoArr[i]);
//       }
//     }
//   }
//   for (let k = 0; k < repeatItem.length; k++) {
//     ind.push(strtoArr.indexOf(repeatItem[k]));
//   }
//   let sortArr = ind.sort((a, b) => a - b);
//   return strtoArr[sortArr[0]];
// }

// Improvment

function firstDup(s) {
  const seen = new Set();
  for (let char of s) {
    if (seen.has(char)) return char;
    seen.add(char);
  }
  return undefined;
}

let str = "translator";
firstDup(str);
