/**
 * @param {number[]} nums
 * @return {number}
 */

//Given an array of size n, find the majority element.
//The majority element is the element that appears more than ⌊ n/2 ⌋ times.
var majorityElement = function (nums) {
  let obj = nums.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});
  let a = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return a[0][0];
};

let nums = [3, 2, 3];
console.log(majorityElement(nums));
