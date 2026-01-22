// 🟢 Day 12 Question
// Check if an array is sorted (ascending)
// ❓ Problem
// Given an array of numbers, check whether it is sorted in increasing order.
// ✅ Return
// true → if sorted
// false → if not sorted
// 🧪 Examples
// [1, 2, 3, 4, 5]     → true
// [1, 2, 2, 3]       → true
// [1, 3, 2, 4]       → false
// [5, 4, 3, 2]       → false
// 💡 Hint (very important)
// Compare current element with next element
// If at any point:
// arr[i] > arr[i+1]
// → array is NOT sorted
// Use only one loop
// Time complexity: O(n)
// 🚫 What NOT to do
// Don’t sort the array
// Don’t use extra array
// Don’t use built-in sort()


function arraySort(arr) {

    for (let i = 0; i < arr.length-1; i++) {
       if(arr[i] > arr[i+1]){
        return false
       }
    }
    return true;
}

console.log(arraySort([2, 3, 3, 2, 2]));
