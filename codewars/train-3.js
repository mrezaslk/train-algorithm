// function collatz(n) {
//   let result = [];
//   result.push(n);
//   while (n !== 1) {
//     if (n % 2 === 0) {
//       result.push(n / 2);
//       n = n / 2;
//     } else {
//       result.push(3 * n + 1);
//       n = 3 * n + 1;
//     }
//   }
//   return result.join(" / ").replaceAll(" / ", "->");
// }
// collatz(3);
// Improve

function collatz(n) {
  let result = [];
  const recursive = (n) => {
    // if (n !== 1) {
    //   if (n % 2 === 0) {
    //     result.push(n);
    //     return recursive(n / 2);
    //   } else {
    //     result.push(n);
    //     return recursive(3 * n + 1);
    //   }
    // } else {
    //   result.push(n);
    // }
    // Improve
    result.push(n);
    if (n !== 1) {
      return recursive(n % 2 === 0 ? n / 2 : 3 * n + 1);
    }
  };
  recursive(n);
  //   return result.join(" / ").replaceAll(" / ", "->");
  // Improve
  return result.join("->");
}

collatz(3);
