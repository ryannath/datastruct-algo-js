/**
 * # 242. Valid Anagram
 * Given two strings s and t, return true if t is
 * an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by
 * rearranging the letters of a different word
 * or phrase, typically using all the original
 * letters exactly once.
 */

/**
 * @param {string} s consists of only lowercase English letters
 * @param {string} t consists of only lowercase English letters
 * @returns {boolean} true if t is
 * an anagram of s, and false otherwise.
 */
export const validAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const found = Array(26).fill(0);
  for (const char of s) {
    found[char.charCodeAt() - 'a'.charCodeAt()] += 1
  }
  for (const char of t) {
    const charIndex = char.charCodeAt() - 'a'.charCodeAt()
    found[charIndex] -= 1;
    if (found[charIndex] < 0) {
      return false;
    }
  }
  return true;
};
