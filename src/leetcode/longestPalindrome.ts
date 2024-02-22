function isPalindrome(s: string): boolean {
  return s === s.split("").reverse().join("");
}
function longestPalindrome(s: string): string {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
}
console.log(longestPalindrome("babad"));
