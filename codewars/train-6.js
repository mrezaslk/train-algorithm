function pendulum(values) {
  const sortArray = values.sort((a, b) => a - b);
  const findSmallestItem = sortArray[0];
  let type = "";
  const findCenterIndex = (item) => {
    if (item % 2 !== 0) {
      type = "odd";
      return (item - 1) / 2;
    } else {
      type = "even";
      return item / 2;
    }
  };
  const centerIndex = findCenterIndex(values.length);
  const rightItem = [];
  const leftItem = [];
  for (let i = 1; i < sortArray.length; i++) {
    const element = sortArray[i];
    if (i % 2 !== 0) {
      rightItem.push(element);
    } else {
      leftItem.unshift(element);
    }
  }
  const concatItem = leftItem.concat(rightItem);
  if (type === "odd") {
    concatItem.splice(centerIndex, 0, findSmallestItem);
  } else {
    concatItem.splice(centerIndex - 1, 0, findSmallestItem);
  }
  return concatItem;
}

pendulum([6, 6, 8, 5, 10]);
// arr.splice(index, 0, item);
