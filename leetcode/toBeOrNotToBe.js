var expect = function (val) {
  return {
    toBe: function (tVal) {
      if (val === tVal) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: function (nVal) {
      if (val !== nVal) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};

console.log((func = () => expect(5).toBe(5)));
