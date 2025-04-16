function replicate(times, number) {
  let result = [];
  recursive(times, number);
  function recursive(times, number) {
    if (times > 0) {
      result.push(number);
      recursive(times - 1, number);
    } else if (times < 0) {
      return [];
    }
  }
  return result;
}

replicate(8, 0);
