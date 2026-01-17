// 📅 Day 7 – Arrays
// ❓ Question: Two Sum
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// You may assume:
// Exactly one solution exists
// You cannot use the same element twice
// 🔹 Examples
// Input:  nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Input:  nums = [3, 2, 4], target = 6
// Output: [1, 2]
// ⚠️ Conditions
// Do not use nested loops in final solution
// Return indices, not values
// Order of indices doesn’t matter
// 💡 Hint (Progressive)
// Hint 1:
// Think about what number you need to reach the target.
// Hint 2:
// Use a map (object) to store numbers you’ve seen and their indices.
// Hint 3:
// For each number:
// needed = target - current
// Check if needed already exists.

// solution 

// function twoSum(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

// console.log(twoSum([1,5,3,12,2,9], 12));

// time complexity: O(n^2) due to nested loops

// we need o(n) solution

function twoSum(nums, target) {
   let seen={}
   for(let i=0; i<nums.length; i++){
    let current= nums[i];
    let need = target-current;
// console.log("current", current);
// console.log("need", need);
// console.log("seen[need]", seen[need]);
    if(seen[need] !== undefined){
          return [seen[need], i];
    }    
    seen[current]=i;
   }
    return null;
}

console.log(twoSum([1,3,12,9], 12));