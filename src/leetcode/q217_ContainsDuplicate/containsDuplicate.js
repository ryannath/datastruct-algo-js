/**
 * # 217. Contains Duplicate
 * Given an integer array nums, return true if any
 * value appears at least twice in the array, and
 * return false if every element is distinct.
 */

/**
 * 
 * @param {number[]} nums 
 * @return {boolean}
 */
export const containsDuplicate = (nums) => {
  const found = new Set();
  for (const num of nums) {
    if (found.has(num)) {
      return true;
    }
    found.add(num)
  }
  return false;
}
