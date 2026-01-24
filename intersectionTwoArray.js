// 🟢 Day 15 Question
// Find the intersection of two arrays
// ❓ Problem
// Given two arrays, return a new array containing common elements.
// Each common element should appear only once in the result.
// 🧪 Examples
// arr1 = [1, 2, 2, 3, 4]
// arr2 = [2, 2, 3, 5]
// Output → [2, 3]
// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]
// Output → []
// 💡 Hint (easy approach)
// Use an object (or Set) for first array
// Loop through second array
// If element exists in first array AND not already added → push to result
// Return result
// 🚫 Don’t do
// Nested loops
// Sorting arrays
// Using includes() inside loop

function intersectionTwoArray(arr1, arr2) {
  let obj1 = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (obj1[arr1[i]] === undefined) {
      obj1[arr1[i]] = true;
    }
  }

  // console.log(obj1);

  for (let i = 0; i < arr2.length; i++) {
    if (obj1[arr2[i]]) {
      result.push(arr2[i]);
      obj1[arr2[i]] = false;
    }
  }

  return result;
}

console.log(intersectionTwoArray([1, 2, 2, 3, 4], [2, 2, 3, 5])); // [2, 3]

// Time: O(n + m)
// Space: O(n)
