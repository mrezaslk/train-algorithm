/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // let count = 0;
  // for (let i = 0; i < dominoes.length; i++) {
  //   for (let j = i + 1; j < dominoes.length; j++) {
  //     let [a, b] = dominoes[i];
  //     let [c, d] = dominoes[j];

  //     if ((a == c && b == d) || (a == d && b == c)) {
  //       count++;
  //     }
  //   }
  // }
  // return count;
  // improvement

  let map = new Map();
  let count = 0;
  for (let [a, b] of dominoes) {
    let key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (map.has(key)) {
      count += map.get(key);
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  return count;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
