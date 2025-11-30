var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timerId);
  };
};

// setTimeout(cancellable(), 1500);
// setTimeout(cancelFn, 500);

// const result = [];

// const fn = (x) => x * 5;
// const args = [2];
// const t = 20;
// const cancelTimeMs = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15);
