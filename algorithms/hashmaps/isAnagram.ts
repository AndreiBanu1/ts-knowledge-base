/** Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false

  let countMapS = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const count = countMapS.get(s[i]) ?? 0
    countMapS.set(s[i], count + 1)
  }

  let countMapT = new Map<string, number>()
  for (let i = 0; i < t.length; i++) {
    const count = countMapT.get(t[i]) ?? 0
    countMapT.set(t[i], count + 1)
  }

  for (const [char, countInS] of countMapS) {
    if (countMapT.get(char) !== countInS) return false
  }
  return true
}

isAnagram("racecar", "carrace");
isAnagram("jar", "jam");
isAnagram("aab","abb");