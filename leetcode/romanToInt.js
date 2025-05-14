/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const conditionRomanObj = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let totalNum = 0;
  let workingStr = s;
  for (const [key, value] of Object.entries(conditionRomanObj)) {
    if (s.includes(key)) {
      totalNum += value;
      workingStr = workingStr.replace(key, "");
    }
  }
  let numToArray = workingStr.split("");
  for (let i = 0; i < numToArray.length; i++) {
    const element = romanObj[numToArray[i]];
    totalNum += element;
  }
  return totalNum;
};
let s = "MMCMLXIV";
romanToInt(s);
