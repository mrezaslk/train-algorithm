function countRepeatNumber(numbers) {
  let map = new Map();
  for (const element of numbers) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  return map;
}

let numbers = [2, 3, 2, 5, 3, 4, 2];
let result = countRepeatNumber(numbers);

for (let [key, value] of result) {
  console.log(`${key} => ${value} بار`);
}
