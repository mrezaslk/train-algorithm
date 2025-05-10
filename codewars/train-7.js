function newAvg(arr, newavg) {
  const findX = Math.ceil(
    (arr.length + 1) * newavg - arr.reduce((a, b) => a + b, 0)
  );
  if (findX <= 0) {
    throw new Error("Expected New Average is too low");
  }
  return findX;
}

newAvg([14, 30, 5, 7, 9, 11, 15], 92);
