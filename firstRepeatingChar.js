// 🟢 Day 17 Question
// Find the first repeating character in a string
// ❓ Problem
// Given a string, return the first character that appears more than once.
// “First” means the one whose second occurrence appears earliest.
// 🧪 Examples
// "aabbcc"     → "a"
// "abca"       → "a"
// "abcdef"    → null
// 💡 Hint (step-by-step)
// Create an empty object
// Loop through the string left to right
// If character already exists → return it
// Else store it
// If loop ends → return null
// 🚫 Don’t do
// Nested loops
// Sorting
// indexOf inside loop

// solution

function firstRepeatingChar(str) {
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] === undefined) {
      seen[str[i]] = true;
    } else {
      return str[i];
    }
  }
  return null;
}

console.log(firstRepeatingChar("abca")); // "a"

// Complexity
// Time: O(n)
// Space: O(n)
