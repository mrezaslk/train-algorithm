/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //   const reverseTemp = x.toString().split("").reverse().join("");
  //   const numToString = String(x);
  //   if (reverseTemp === numToString) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  let boolean;
  if (x.toString().split("").reverse().join("") === String(x)) {
    boolean = true;
  } else {
    boolean = false;
  }
  return boolean;
};

console.log(isPalindrome(212));
