var argumentsLength = function (...args) {
    return args.length
//   let temp = { ...args };
//   let lengthOfArgs = 0;
//   Object.entries(temp).map(([key, value]) => {
//     lengthOfArgs = Number(key) + 1;
//   });
//   return lengthOfArgs;
};

// const args = [5];
// const args = [{}, null, "3"]
const args = 5;
// const second = {}, null, "3"
console.log(argumentsLength(5));
