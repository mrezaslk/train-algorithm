function collatz(n) {
  let result = [];
  result.push(n);
  while (n !== 1) {
    if (n % 2 === 0) {
      result.push(n / 2);
      n = n / 2;
    } else {
      result.push(3 * n + 1);
      n = 3 * n + 1;
    }
  }
  return result.join(" / ").replaceAll(" / ", "->");
}
collatz(3);
