// 📅 Day 5 – Strings
// ❓ Question: First Non-Repeating Character in a String
// Given a string, find the first character that does not repeat.
// If no such character exists, return null.
// 🔹 Examples
// Input:  "aabbccde"
// Output: "d"
// Input:  "aabbcc"
// Output: null
// Input:  "javascript"
// Output: "j"
// ⚠️ Conditions
// Case-sensitive ('A' ≠ 'a')
// Do not use advanced libraries
// Optimize for time
// 💡 Hint (Progressive)
// Hint 1:
// Use a frequency map (object).
// Hint 2:
// First loop → count occurrences
// Second loop → find first char with count 1

function firstNonRepeatingChar(str) {
  let frequency = {};
  for (const char of str) {
    if (frequency[char] === undefined) {
      frequency[char] = 1;
    } else {
      frequency[char] = frequency[char] + 1;
    }
  }

  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("Aabbccde"));


// Complexity :
// Time: O(n) 
// Space: O(n) 