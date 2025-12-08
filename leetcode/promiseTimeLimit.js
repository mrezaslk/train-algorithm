var timeLimit = function (fn, t) {
  return async function (...args) {
    const newFn = fn(...args);
    const secondPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([newFn, secondPromise]);
  };
};

const FN = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
// timeLimit(FN(5, 10), 20);
const limitedFn = timeLimit(FN, 120);
// limitedFn(5);
limitedFn(5)
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err));
