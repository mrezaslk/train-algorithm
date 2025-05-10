/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    }
  }
};
//   let array = [];
//   nums.forEach((element, index) => {
//     let complement = target - element;
//     if (map.has(complement)) {
//       return array.push(map.get(complement), index);
//     }
//     if (!map.has(element)) {
//       map.set(element, index);
//     }
//   });
//   return array;
//   for (const key in nums) {
//     if (Object.prototype.hasOwnProperty.call(nums, key)) {
//       let complement = target - nums[key];
//       if (map.has(complement)) {
//         return [Number(map.get(complement)), Number(key)];
//       }
//       if (!map.has(nums[key])) {
//         map.set(nums[key], key);
//       }
//     }
//   }

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
