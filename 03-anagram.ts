/*
● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
    ○ Input: s = "anagram", t = "nagaram"
    ○ Output: true
● Example 2:
    ○ Input: s = "rat", t = "car"
    ○ Output: false
*/

function anagram(s: string, t: string) {
  const myFunction = (str: string) =>
    str.toLowerCase().split("").sort().join("");

  return myFunction(s) == myFunction(t);
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
