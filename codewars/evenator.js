function evenator(str) {
  const result = [];
  let strToArr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    const element = strToArr[i];
    if (element.length % 2 === 0) {
      result.push(strToArr[i]);
    } else {
      let lastText = element[element.length - 1];
      let newElement = element + lastText;
      result.push(newElement);
    }
  }
  return result.join(" ");
}

let strin = "How did we end up here? We go?";

console.log(evenator(strin));
