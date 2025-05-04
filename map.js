function findPairs(array, target) {
  let map = new Map();
  let count = 0;
  for (let element of array) {
    let complement = target - element;
    if (map.has(complement)) {
      count += map.get(complement);
    }
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  return count;
}

let nums = [1, 5, 7, -1, 5];
target = 6;
console.log(findPairs(nums, target));
