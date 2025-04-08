function sumIntervals(intervals) {
  intervalArr.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    let current = intervals[i];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
}

let intervalArr = [
  [1, 4],
  [7, 10],
  [3, 5],
];

sumIntervals(intervalArr);
