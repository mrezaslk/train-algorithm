function firstDup(s) {
  let strtoArr = s.split("");
  let repeatItem = [];
  let ind = [];
  for (let i = 0; i < strtoArr.length; i++) {
    for (let j = i + 1; j < strtoArr.length; j++) {
      if (strtoArr[i] === strtoArr[j]) {
        repeatItem.push(strtoArr[i]);
      }
    }
  }
  for (let k = 0; k < repeatItem.length; k++) {
    ind.push(strtoArr.indexOf(repeatItem[k]));
  }
  let sortArr = ind.sort((a, b) => a - b);
  return strtoArr[sortArr[0]];
}

let str = "bar";
firstDup(str);
