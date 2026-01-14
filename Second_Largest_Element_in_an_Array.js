// Second_Largest_Element_in_an_Array.js

// 📅 Day 3 – Arrays
// ❓ Question: Find the Second Largest Element in an Array
// 👉 Do NOT use sorting
// 🔹 Problem Statement
// Given an array of numbers, find the second largest distinct element.
// 🔹 Examples
// Input:  [10, 5, 20, 8]
// Output: 10
// Input:  [3, 3, 3, 3]
// Output: null   // no second largest
// Input:  [1, 2]
// Output: 1
// ⚠️ Conditions
// Do not use sort()
// Solve in one pass
// Handle duplicate values
// 💡 Hint (Don’t jump to solution 👀)
// Keep two variables:
// largest
// secondLargest
// Traverse the array once
// Update values carefully:
// If current > largest → update both
// Else if current < largest and > secondLargest → update secondLargest

// solution 

function SecondLargestElement(arr){

    let largest= -Infinity;
    let secondLargest= -Infinity;

    for (let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest= arr[i];
        }else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    }

   return secondLargest===-Infinity?null:secondLargest

    // console.log("largest", largest);
    // console.log("secondLargest", secondLargest);
}

console.log(SecondLargestElement([3,3,3,3]));
console.log(SecondLargestElement([10, 5, 20, 8]));
console.log(SecondLargestElement([1, 2]));
console.log(SecondLargestElement([5]));
console.log(SecondLargestElement([-2, -3, -1, -4]));

// Complexity:
// Time: O(n) where n is the number of elements in the array
// Space: O(1) ✅