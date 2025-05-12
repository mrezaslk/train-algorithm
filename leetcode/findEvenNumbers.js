var findEvenNumbers = function (digits) {
  let result = new Set();
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j) continue;
        if (digits[k] % 2 !== 0) continue;
        let num = digits[i] * 100 + digits[j] * 10 + digits[k];
        result.add(num);
        // if (i !== j && j !== k && i !== k) {
        //   let numq = digits[i] * 100 + digits[j] * 10 + digits[k];
        //   if (!Boolean(numq % 2)) {
        //     result.add(numq);
        //   }
        // }
      }
    }
  }
  return [...result].sort((a, b) => a - b);
};

let digits = [1, 2, 3];
findEvenNumbers(digits);
