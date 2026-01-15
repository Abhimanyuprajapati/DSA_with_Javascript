// 📅 Day 4 – Arrays
// ❓ Question: Move All Zeros to the End (In-Place)
// Given an array of numbers, move all 0s to the end of the array without changing the order of non-zero elements.
// 🔹 Examples
// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Input:  [1, 2, 3]
// Output: [1, 2, 3]
// Input:  [0, 0, 0]
// Output: [0, 0, 0]
// ⚠️ Conditions
// Do not create a new array
// Modify the array in place
// Maintain the relative order of non-zero elements
// 💡 Hint (Don’t see solution yet 👀)
// Use two pointers
// One pointer tracks where the next non-zero should go
// Traverse the array once
// Swap only when needed

// solution 

function zero_to_end (arr){
let left =0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i]!==0){
        let temp = arr[i];
        arr[i]= arr[left];
        arr[left]=temp;
          left++;
    }
}
    return arr;
}

console.log(zero_to_end([0, 1, 0, 3, 12]));
console.log(zero_to_end([1, 2, 3]));
console.log(zero_to_end([0, 0, 0]));

// Complexity:
// Time: O(n) where n is the number of elements in the array
// Space: O(1) ✅