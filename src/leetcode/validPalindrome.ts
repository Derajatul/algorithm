function isPalindrome(s: string): boolean {
  return (
    s.replace(/[\W_]/g, "").toLowerCase() ===
    s.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}
console.log(isPalindrome("ab_a"));
