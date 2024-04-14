function isPrefixString(s: string, words: string[]): boolean {
  let prefix = "";
  for (let i = 0; i < words.length; i++) {
    prefix += words[i];
    if (prefix === s) {
      return true;
    }
  }
  return false;
}
console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
