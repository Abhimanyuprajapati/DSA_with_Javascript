// 📅 Day 2 – Strings
// ❓ Question: Check if a String is a Palindrome
// A palindrome is a string that reads the same forward and backward.
// 🔹 Examples
// "madam"     → true
// "racecar"  → true
// "hello"    → false
// "a"        → true
// ""         → true
// ⚠️ Conditions
// Do not use reverse()
// Try to solve using two pointers
// Extra points if you handle edge cases
// 💡 Hint (Don’t see solution yet 👀)
// Use two variables:
// left → start of string
// right → end of string
// Compare characters:
// str[left] === str[right]
// If any mismatch → not palindrome
// Move inward until pointers meet

// solution
console.log("madam");
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(""));

// Complexity:
// Time: O(n)
// Space: O(1) ✅


// second solution with edge cases handled
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); 
