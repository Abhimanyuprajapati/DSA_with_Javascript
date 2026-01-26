// 🟢 Day 20 Question
// Find the Majority Element
// ❓ Problem
// Given an array of integers, find the majority element.
// A majority element is the element that appears more than ⌊ n / 2 ⌋ times.
// You may assume that the majority element always exists.
// 🧪 Examples
// Input:
// [3, 2, 3]
// Output:
// 3
// Input:
// [2, 2, 1, 1, 1, 2, 2]
// Output:
// 2
// Input:
// [1, 1, 1, 2, 3]
// Output:
// 1
// 💡 Hints (no solution yet)
// Hint 1️⃣
// If an element appears more than n / 2 times, it will dominate others.
// Hint 2️⃣
// Start with the easy approach:
// Count frequency
// Return the element whose count > n / 2
// Hint 3️⃣
// There is an optimized interview trick
// (Boyer–Moore Voting Algorithm 👀)
// 👉 skip this for now, try easy one first.

// solution 

function majorityElement(arr) {
    let seenCount={}
    for(let i=0; i<arr.length; i++){
        if(seenCount[arr[i]]===undefined){
            seenCount[arr[i]] = 1; 
        }
        else{
            seenCount[arr[i]] = seenCount[arr[i]] + 1; 
        }
    }

    for(let key in seenCount){
        if(seenCount[key] > arr.length /2){
            return Number(key);
        }
    }

     return null;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
