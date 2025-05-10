function findRepeat(words) {
  let map = new Map();
  for (const element of words) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  return map;
}

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let result = findRepeat(words);

for (const [key, value] of result) {
  if (value > 1) console.log(`${key} => ${value}`);
}
