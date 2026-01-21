// 🟢 Day 10 Question
// Find the Missing Number
// 📌 Problem Statement

// You are given an array containing n distinct numbers taken from the range 0 to n.
// Find the one number that is missing from the array.

// 🔹 Examples
// Input:  [3, 0, 1]
// Output: 2

// Input:  [0, 1]
// Output: 2
// Input:  [9,6,4,2,3,5,7,0,1]
// Output: 8
// 🧠 Hint 1 (Math Idea – Easiest)
// Sum of numbers from 0 to n is:
// n * (n + 1) / 2
// Subtract array sum from this
// 🧠 Hint 2 (XOR Idea – Bonus)
// a ^ a = 0
// a ^ 0 = a
// XOR all numbers from 0..n and array values
// 🧠 Hint 3 (Sorting – Not Recommended)
// Sort array
// Check missing number

// Sum=n(n+1)/2

function findMissingNumber(arr) {
  let actualSum = 0;
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  let expectedSum = (n * (n + 1)) / 2;
  let missing = expectedSum - actualSum;

  return missing;
}

console.log(findMissingNumber([1, 3, 5, 0, 4, 6])); // 2
