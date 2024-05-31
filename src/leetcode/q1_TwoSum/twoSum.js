/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  const found = {};
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (remainder in found) {
      return [found[remainder], i]
    }
    found[nums[i]] = i;
  }
  return [];
}

console.log(twoSum([2,7,11,15], 9))