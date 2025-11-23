var compose = function (functions) {
  if (functions.length > 0) {
    let val = 0;
    return function (x) {
      for (let index = functions.length - 1; index >= 0; index--) {
        if (index === functions.length - 1) {
          val = functions[index](x);
        } else {
          val = functions[index](val);
        }
      }
      return val;
    };
  } else {
    return function (x) {
      return x;
    };
  }
};
const composeFunc = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const result = composeFunc(4);
console.log("result", result);

// function Invoke(fn) {
//   return function (x) {
//     return fn(x);
//   };
// }
// // // console.log(Invoke((x) => 2 * x));
// const funcc = Invoke((x) => 2 * x);
// const resultt = funcc(4);
// console.log("result", resultt);
