var map = function (arr, fn) {
  let transformArray = [];
  for (let i = 0; i < arr.length; i++) {
    transformArray[i] = fn(arr[i], i);
  }
  return transformArray;
};

(arr = [1, 2, 3]),
  (fn = function plusI(n, i) {
    return n + i;
  });
// arr = [1, 2, 3];
// fn = function plusone(n) {
//   return n + 1;
// };
console.log(map(arr, fn));
