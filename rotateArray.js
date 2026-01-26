// 🟢 Day 19 Question
// Rotate an array to the right by K steps
// ❓ Problem
// Given an array and a number k, rotate the array to the right by k positions.
// 🧪 Examples
// Input:  arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]
// Input:  arr = [1, 2, 3], k = 1
// Output: [3, 1, 2]
// Input:  arr = [1, 2], k = 3
// Output: [2, 1]
// 👉 Notice: k can be greater than array length.
// 💡 Hints (no solution yet)
// Hint 1️⃣
// If k > arr.length, reduce it using:
// k = k % arr.length
// Hint 2️⃣
// Think in parts:
// Last k elements
// Remaining first elements
// Hint 3️⃣
// There are multiple ways:
// Using extra array (easy)
// Without extra array (reverse trick) 🔥
// For now, try the easy version.


// solution
function rotateArray(arr, k) {
    let n=arr.length;

    // if arr is empty[]
    if(n===0)return arr;

    // this is for check k>n
    k=k%n;

     let result = [];
    for (let i = n - k; i < n; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < n - k; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
