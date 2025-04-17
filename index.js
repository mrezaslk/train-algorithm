function palindrome(num) {
  const reverseTemp = num.toString().split("").reverse().join("");
  const numToString = String(num);
  const result = [];
  if (typeof num === "string") return "Not valid";
  
}

console.log(palindrome(34322122));
