/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let outputArr = [];
  let totalLength = nums1.length + nums2.length;

  let medianPosition =
    totalLength % 2 == 0 ? totalLength / 2 + 1 : (totalLength + 1) / 2;

  let median;
  if (nums1.length == 0) {
    return calcMedian(nums2, totalLength, medianPosition);
  }
  if (nums2.length == 0) {
    return calcMedian(nums1, totalLength, medianPosition);
  }

  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) {
      outputArr.push(nums1.shift());
    } else {
      outputArr.push(nums2.shift());
    }
  }

  outputArr = [...outputArr, ...nums1, ...nums2];
  return calcMedian(outputArr, totalLength, medianPosition);
};

function calcMedian(arr, totalLength, medianPosition) {
  let median =
    totalLength % 2 == 0
      ? (arr[medianPosition - 1] + arr[medianPosition - 2]) / 2
      : arr[medianPosition - 1];
  return median;
}

let nums1 = [1, 3, 5, 7, 8];
let nums2 = [2, 4, 6, 9, 10];

nums1 = [0, 0];
nums2 = [0, 0];

nums1 = [2];
nums2 = [];

nums1 = [100001];
nums2 = [100000];

nums1 = [2];
nums2 = [1];
console.log(findMedianSortedArrays(nums1, nums2));
