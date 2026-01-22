// 🟢 Day 11 Question
// Find the Duplicate Number
// 📌 Problem Statement
// You are given an array of integers where:
// Numbers are in the range 1 to n
// Array size is n + 1
// Only one number is duplicated, but it may appear more than once
// Find the duplicate number.
// 🔹 Examples
// Input:  [1, 3, 4, 2, 2]
// Output: 2
// Input:  [3, 1, 3, 4, 2]
// Output: 3
// 🧠 Hint 1 (Easiest – Using Object)
// Count frequency
// First number with count > 1 is answer
// 🧠 Hint 2 (Math – Similar to Day 10)
// Expected sum of numbers 1..n
// Actual sum will be bigger
// Difference gives duplicate (⚠️ works only if duplicate appears exactly twice)
// 🧠 Hint 3 (Best – Interview Favorite 🚀)
// Floyd’s Cycle Detection (Slow & Fast Pointer)
// Treat array like linked list
// Use two pointers
// No extra space
// O(n) time, O(1) space
// (Don’t worry — start with Hint 1)


function findDuplicate(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return arr[i];
        }
        seen[arr[i]] = true;
    }
}

console.log(findDuplicate([2, 3, 3, 2, 2]));

