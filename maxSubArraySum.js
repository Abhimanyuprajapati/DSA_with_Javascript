// 🟢 Day 8 Question
// Maximum Sum of Subarray of Size k
// Problem Statement:
// Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
// 🔹 Example
// Input:  arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Explanation: Subarray [5, 1, 3] has the maximum sum = 9
// ❌ Brute Force (Don’t code yet, just understand)
// Try every subarray of size k
// Time complexity: O(n × k)
// Interviewers don’t like this for large inputs.
// ✅ Hint 1 (Very Important)
// You don’t need to recalculate the sum again and again.
// When window moves:
// Add next element
// Remove previous element
// ✅ Hint 2 (Sliding Window Idea)
// Calculate sum of first k elements
// Move the window one step at a time
// Update sum like:
// windowSum = windowSum + arr[i] - arr[i - k];
// Track maximum
// 🧠 Hint 3 (Think in English)
// “I keep a window of size k.
// I slide it forward and update the sum instead of recalculating it.”
// 🧪 Test Cases to Try
// maxSubArraySum([2, 1, 5, 1, 3, 2], 3) // 9
// maxSubArraySum([2, 3, 4, 1, 5], 2)   // 7
// maxSubArraySum([1, 1, 1, 1], 2)      // 2
// 🚫 What NOT to Use
// Nested loops
// Sorting
// Extra arrays

// solution

function maxSubArraySum(arr, k) {
  if (arr.length < k) {
    return null;
  }

  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); //9

console.log(maxSubArraySum([2, 2, 2, 3, 2], 2)); //5
