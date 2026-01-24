// 🟢 Day 14 Question
// Count the frequency of each element in an array
// ❓ Problem
// Given an array, return an object that shows how many times each element appears.
// 🧪 Examples
// [1, 2, 2, 3, 3, 3]
// → { 1: 1, 2: 2, 3: 3 }
// ["a", "b", "a", "c", "b", "a"]
// → { a: 3, b: 2, c: 1 }
// 💡 Hint (step-by-step)
// Create an empty object
// Loop through the array
// If key exists → increase count
// Else → set count to 1
// Return the object
// 🚫 Don’t use
// filter
// reduce (we’ll do that later 😉)
// Nested loops
// ⏱ Complexity
// Time: O(n)
// Space: O(n)


function countFrequency(arr) {
    let seenCount={};
    for (let i=0; i<arr.length; i++){
        if(seenCount[arr[i]]===undefined){
            seenCount[arr[i]] = 1
        }else{
 seenCount[arr[i]] =seenCount[arr[i]] +1
        }
    }

    return seenCount;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3])); 
