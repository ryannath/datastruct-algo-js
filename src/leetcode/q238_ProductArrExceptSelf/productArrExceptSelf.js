/**
 * Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums
 * except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit
 * in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without
 * using the division operation.
 */

/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 */
export const productArrExceptSelf = (nums) => {
  const prefixProduct = Array(nums.length);
  const postProduct = Array(nums.length);

  // Calculate the prefix products
  for (let i = 0; i < prefixProduct.length; i++) {
    if (i === 0) {
      prefixProduct[i] = nums[i];
    } else {
      prefixProduct[i] = prefixProduct[i-1] * nums[i];
    }
  }

  // Calculate the postfix products
  for (let i = postProduct.length - 1; i >= 0; i--) {
    if (i === postProduct.length - 1) {
      postProduct[i] = nums[i];
    } else {
      postProduct[i] = postProduct[i+1] * nums[i];
    }
  }

  const results = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      results[i] = postProduct[i + 1] ?? 1;
    } else if (i === nums.length - 1) {
      results[i] = prefixProduct[i - 1] ?? 1;
    } else {
      results[i] = prefixProduct[i-1] * postProduct[i+1]
    }
    
  }
  return results;
}

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
export const productArrExceptSelfFollowUp = (nums) => {
  const results = Array(nums.length);
  results[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    results[i] = results[i-1] * nums[i-1];
  }
  let temp = 1;
  for (let i = nums.length-2; i >= 0; i--) {
    temp *= nums[i+1];
    results[i] = results[i] * temp;
  }
  return results;
}

console.log(productArrExceptSelf([1, 2, 3, 4]));
//index[0, 1, 2, 3]
//     [1, 2, 3, 4,]

//     [1,  1,  2,  6]
//     [24, 12,  4, 1]
//     [24, 12, 8, 6]
