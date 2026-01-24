// 🟢 Day 16 Question
// Find the longest word in a sentence
// ❓ Problem
// Given a string (sentence), return the longest word.
// If multiple words have the same max length, return the first one.
// 🧪 Examples
// "JavaScript is super powerful"
// → "JavaScript"
// "I love DSA practice"
// → "practice"
// 💡 Hint (simple steps)
// Split the sentence by space (" ")
// Keep track of:
// maxLength
// longestWord
// Loop through words
// If word.length > maxLength, update both
// Return longestWord
// 🚫 Don’t do
// Regex
// Sorting
// Reduce (for now)

function longestWord(sentence) {
    let words = sentence.split(" ");
    let maxlength=0;
    let longest = "";

    for(let i=0; i<words.length; i++){
        if(maxlength<words[i].length){
            maxlength = words[i].length;
            longest = words[i];
        }
    }
    // console.log(words);
    return longest;
}

console.log(longestWord("JavaScript and AbhimanyuPrajapati is super powerful"));

// Time: O(n)
// Space: O(n)