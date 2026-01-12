// Day 1 – Basic Level (Arrays)

// ❓ Question: Reverse an Array
// Write a function that reverses an array without using the built-in reverse() method.
// Example:
// Input:  [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
// Constraints:
// Do not use array.reverse()
// Try to do it in-place (no extra array, if possible)
// 💡 Hint:
// Use two pointers:
// One starting at the beginning of the array
// One starting at the end
// Swap elements while moving pointers toward each other
// Stop when the pointers meet

// solution 

function reverse_an_array(arr){
    const ans=[];
    for(let i=arr.length-1; i>=0; i--){
        ans.push(arr[i]);
    }

    console.log(ans);

    return ans;
}

reverse_an_array([2, 2,1, 3, 5, 8 ,51, 12]);

// Time Complexity: O(n) where n is the number of elements in the array
// Space Complexity: O(n) for the new array used to store the reversed elements


// Two Pointers solution

function reverseArrayInPlace(arr) {

    console.log("before",arr);
let right = arr.length-1;

for(let left=0; left<right; left++, right--){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;
}
console.log("after",arr);

}
reverseArrayInPlace([2, 2,1, 3, 5, 8 ,51, 12]);

// Time: O(n)

// Space: Two-pointer version → O(1) 