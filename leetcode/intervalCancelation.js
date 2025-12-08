var cancellable = function (fn, args, t) {
  fn(...args);
  const timerId = setInterval(() => fn(...args), t);
  return function cancelFn() {
    clearInterval(timerId);
  };
};

// const cancelTimeMs = 190;
// const cancelFn = cancellable((x) => x * 2, [4], 35);

// console.log(setTimeout(cancelFn, cancelTimeMs))
