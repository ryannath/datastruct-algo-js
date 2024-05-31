/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the
 * letters of a different word or phrase, typically using all
 * the original letters exactly once.
 */

/**
 * @param {string} character
 * @returns {number}
 */
const strToIndex = (character) => {
  return character.charCodeAt() - 'a'.charCodeAt();
};

/**
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagram = (strs) => {
  const groups = new Map();
  const mappingTable = Array(26);
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    mappingTable.fill(0);

    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      mappingTable[strToIndex(char)] += 1;
    }

    const key = mappingTable.join();
    if (groups.has(key)) {
      groups.get(key).push(str);
    } else {
      groups.set(key, [str]);
    }
  }
  return Array.from(groups.values());
};

console.log(groupAnagram(["","","tan","ate","nat","bat"]))