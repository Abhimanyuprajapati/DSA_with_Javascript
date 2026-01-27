// 🟢 Day 21 Question
// Find the Element That Appears Only Once
// ❓ Problem
// Given a non-empty array of integers, every element appears twice except for one.
// Find that single element.
// 🧪 Examples
// Input:
// [2, 2, 1]
// Output:
// 1
// Input:
// [4, 1, 2, 1, 2]
// Output:
// 4
// Input:
// [7]
// Output:
// 7
// 💡 Hints (no solution yet)
// Hint 1️⃣
// Start with the easy way:
// Count frequency
// Return the element with count = 1
// Hint 2️⃣
// There is a very powerful trick using:
// XOR (^) operator
// 👉 works because:
// a ^ a = 0
// a ^ 0 = a
// Hint 3️⃣
// XOR approach:
// No extra space
// Single loop


// solution with object
function singleNumber(arr) {
    let seen={}
    for(let i=0; i<arr.length; i++){
        if(seen[arr[i]]===undefined){
            seen[arr[i]] = 1;
        }else{
            seen[arr[i]] = seen[arr[i]] +1;
        }
    }

    for(let key in seen){
        if(seen[key]===1){
            return Number(key);
        }
    }
}

console.log(singleNumber([4, 1, 2, 1, 2]));  //4


// function singleNumber(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result = result ^ arr[i];
//     }
//     return result;
// }

// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
