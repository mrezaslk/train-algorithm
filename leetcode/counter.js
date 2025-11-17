var createCounter = function (n) {
  let counter = 0;
  let temp;
  return function () {
    if (!counter) {
      temp = n;
      counter++;
    } else {
      temp = n + counter;
      counter++;
    }
    return temp;
  };
};

function createCounter(start) {
  let count = start;
  return function () {
    return count++;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
