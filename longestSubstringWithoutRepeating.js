// 🟢 Day 9 Question
// Longest Substring Without Repeating Characters
// 📌 Problem Statement
// Given a string s, find the length of the longest substring without repeating characters.
// 🔹 Examples
// Input:  "abcabcbb"
// Output: 3   // "abc"
// Input:  "bbbbb"
// Output: 1   // "b"
// Input:  "pwwkew"
// Output: 3   // "wke"
// 🧠 Hint 1 (Big Picture)
// Use sliding window
// Window expands with right
// Shrinks with left when duplicate found
// 🧠 Hint 2 (Key Idea)
// Keep track of characters using a Set (or object)
// If character already exists → move left
// 🧠 Hint 3 (English Thinking)
// “I move right pointer and keep adding characters.
// If I see a duplicate, I remove characters from the left until it’s gone.”


// solution

function longestSubstringWithoutRepeating(s) {
    let left = 0;
    let set = new Set();
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3
console.log(longestSubstringWithoutRepeating("bbbbb"));    // 1
console.log(longestSubstringWithoutRepeating("pwwkew"));   // 3


function longestSubstringWithoutRepeating(s) {
    let left = 0;
    let freq = {};
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        while (freq[char]) {
            freq[s[left]]--;
            left++;
        }

        freq[char] = 1;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


function longestSubstringWithoutRepeating(s) {
    let map = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (map[char] !== undefined && map[char] >= left) {
            left = map[char] + 1;
        }

        map[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


