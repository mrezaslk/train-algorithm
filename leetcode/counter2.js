var createCounter = function (init) {
  if (Number.isInteger(init)) {
    let counter = init;
    return {
      increment: function () {
        // counter++;
        return ++counter;
      },
      decrement: function () {
        // counter--;
        return --counter;
      },
      reset: function () {
        return (counter = init);
      },
    };
  }
};

const counter = createCounter(5);
// console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
