function makeValley(arr) {
  let sorted = arr.slice().sort((a, b) => b - a);
  let left = [];
  let right = [];
  for (let index = 0; index < sorted.length; index++) {
    if (index % 2 == 0) {
      left.push(sorted[index]);
    } else {
      right.push(sorted[index]);
    }
  }
  let result = left.concat(right.reverse());
  return result;
}

a = [79, 35, 54, 19, 35, 25];
makeValley(a);
