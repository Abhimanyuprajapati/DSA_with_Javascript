// 📅 Day 6 – Strings
// ❓ Question: Check if Two Strings Are Anagrams
// Two strings are anagrams if they contain the same characters in the same frequency, but possibly in a different order.
// 🔹 Examples
// Input:  "listen", "silent"
// Output: true
// Input:  "hello", "world"
// Output: false
// Input:  "anagram", "nagaram"
// Output: true
// ⚠️ Conditions
// Case-sensitive ('A' ≠ 'a')
// Ignore spaces only if you want to mention as a follow-up
// Do not use sort() in your first solution
// 💡 Hint (Step-by-Step)
// If lengths are different → return false
// Use a frequency map
// Increase count for characters in first string
// Decrease count while reading second string
// If any count goes negative → not an anagram
// 🧠 Interview Follow-ups
// Time & space complexity?
// Can you do it in one pass?
// How to handle uppercase / lowercase?
// What about Unicode characters?

// solution

function areAnagrams(str1, str2) {
    if(str1.length !== str2.length){
        return false
    }
    let freq = {};
    for(let char of str1){
        if(freq[char]=== undefined){
            freq[char]=1
        }else{
            freq[char]=freq[char]+1; 
        }
    }

    for (item of str2){
        if(!freq[item]){
            return false;
        }else{
            freq[item]--;
        }
    }
    return true;
}

console.log(areAnagrams("manadh", "dnmaah")); // true
console.log(areAnagrams("hello", "world"));   // false