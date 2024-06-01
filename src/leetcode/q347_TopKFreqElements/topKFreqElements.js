/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export const topKFreqElementsOld = (nums, k) => {

  /**
   * @type {Map<number, number>}
   *
   * Track the number of frequency of each integers found in `nums`
   */
  const freqTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (freqTable.has(nums[i])) {
      freqTable.set(nums[i], freqTable.get(nums[i]) + 1)
    } else {
      freqTable.set(nums[i], 1);
    }
  }
  const results = Array.from(freqTable.entries());
  results.sort((a, b) => b[1] - a[1]);

  const returnValues = Array(k);
  for (let i  = 0; i < k; i++) {
    returnValues[i] = results[i][0];
  }
  return returnValues;
};

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export const topKFreqElements = (nums, k) => {
  const  freqTable = new Map();
  // Construct a key to frequency map
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (freqTable.has(number)) {
      freqTable.set(number, freqTable.get(number) + 1);
    } else {
      freqTable.set(number, 1);
    }
  }
  // Construct a frequency to key map
  const freqToElem = Array(nums.length + 1).fill(null);
  for (const [key, value] of freqTable.entries()) {
    if (freqToElem[value] === null) {
      freqToElem[value] = [key]
    } else {
      freqToElem[value].push(key);
    }
  }

  const returnValues = Array(k);
  let kCounter = 0;
  for (let i = freqToElem.length - 1; i > 0 && kCounter < k; i--) {
    if (freqToElem[i] === null) continue;
    for (let j = 0; j < freqToElem[i].length && kCounter < k; j++) {
      returnValues[kCounter]  = freqToElem[i][j];
      kCounter++;
    }
  }

  return returnValues;
}

console.log(topKFreqElements([1], 1));
