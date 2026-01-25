// 🟢 Day 18 Question (NEW)
// Find the maximum number of consecutive 1s in a binary array
// ❓ Problem
// Given an array containing only 0 and 1, return the maximum number of consecutive 1s.
// 🧪 Examples
// [1, 1, 0, 1, 1, 1]   → 3
// [1, 0, 1, 1, 0, 1]   → 2
// [0, 0, 0]           → 0
// 💡 Hint (no solution, just direction)
// Use one loop
// Maintain:
// currentCount
// maxCount
// If element is 1 → increase currentCount
// If element is 0 → reset currentCount to 0
// Update maxCount each time
// [1, 1, 0, 1, 1, 1]   -> 3
// Value	currentCount	maxCount
// 1	        1	            1
// 1	        2           	2
// 0	        0           	2
// 1	        1           	2
// 1	        2           	2
// 1	        3           	3

function maxConsecutiveOnes(arr) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count = count + 1;
    }

    if (arr[i] === 0) {
      count = 0;
    }

    if (count > maxCount) {
      maxCount = count;
    }

    // console.log("maxCount",maxCount);
    // console.log("count",count);
  }
  return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3

console.log(maxConsecutiveOnes([1, 1, 1, 0, 1, 0])); // 3

// Time: O(n)
// Space: O(1)
