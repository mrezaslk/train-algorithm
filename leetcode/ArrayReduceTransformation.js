var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let val = init;
  for (let index = 0; index < nums.length; index++) {
    val = fn(val, nums[index]);
  }
  return val;
};

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;
console.log(reduce(nums, fn, init));
