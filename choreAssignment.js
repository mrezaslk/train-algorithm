function choreAssignment(chores) {
  const result = [];
  let sortArr = chores.sort((a, b) => a - b);
  for (let i = 1; i <= sortArr.length / 2; i++) {
    const firstEl = sortArr[i - 1];
    const lastEl = sortArr[sortArr.length - i];
    result.push(firstEl + lastEl);
  }
  return result.sort((a, b) => a - b);
}

// best practice
// const choreWhile = (chores) => {
//   var result = [];
//   chores.sort((a, b) => a - b);
//   while (chores.length) {
//     result.push(chores.pop() + chores.shift());
//   }
//   return result;
// };

let chore = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9];
// let chore = [5, 2, 1, 6, 4, 4];
// let chore2 = [10, 11, 10, 8, 7, 8];
console.log(choreAssignment(chore));
