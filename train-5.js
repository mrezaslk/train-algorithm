function solve(arr) {
  let result = [];
  let maxFromRight = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log("test loop", arr[i]);
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      result.push(arr[i]);
    }
  }
  return [...new Set(result.reverse())];
}
let testArray = [1, 21, 4, 7, 5];
let testArray2 = [5, 4, 3, 2, 1];
let testArray3 = [92, 52, 93, 31, 89, 87, 77, 105];
let testArray4 = [75, 47, 42, 56, 13, 55];
solve(testArray4);
