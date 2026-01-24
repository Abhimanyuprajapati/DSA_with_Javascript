// 🟢 Day 13 Question
// Find the first duplicate element in an array
// ❓ Problem
// Given an array of numbers, return the first element that appears more than once.
// “First” means the one whose second occurrence comes earliest.
// 🧪 Examples
// [2, 1, 3, 5, 3, 2]   → 3
// [1, 2, 3, 4]        → null
// [5, 5, 3, 3]        → 5
// 💡 Hint (step-by-step)
// Use an object (or Set) to track seen elements
// Traverse array from left to right
// If current element is already seen → return it immediately
// If loop ends → return null
// 🚫 Don’t do
// Nested loops (O(n²))
// Sorting the array
// Using indexOf inside loop
// ⏱ Complexity
// Time: O(n)
// Space: O(n)


function firstDuplicate(arr) {
   let seen= {};
   for (let i=0; i<arr.length; i++){
    if(seen[arr[i]]=== undefined){
        seen[arr[i]] = true
    }else
    {
        return arr[i];
    }
   }
   return null;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // expected: 3


// Time: O(n)
// Space: O(n)