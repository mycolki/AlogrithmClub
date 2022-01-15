/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // target 이 [0]보다 작으면 0, 마지막 요소보다 크면 length 리턴
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] < target && target < nums[i + 1]) return i + 1;
  }
};