var expect = function (val) {
  return {
    toBe: (nval) => {
      if (nval === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (nval) => {
      if (nval !== val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};

const tempt = (func = () => expect(5).toBe(5));
console.log(tempt());
