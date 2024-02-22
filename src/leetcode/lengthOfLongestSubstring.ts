function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let current = "";
  for (let i = 0; i < s.length; i++) {
    const index = current.indexOf(s[i]);
    if (index !== -1) {
      current = current.slice(index + 1);
    }
    console.log(index);
    current += s[i];
    longest = Math.max(longest, current.length);
  }
  return current.length;
}
console.log(lengthOfLongestSubstring("bbbbbbbb"));