function understandLopp(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
      //   if (array[i] + array[j] > 50) {
      //     console.log(array[i], array[j]);
      //   }
    }
  }
}

let nums = [10, 20, 30, 40];
understandLopp(nums);
