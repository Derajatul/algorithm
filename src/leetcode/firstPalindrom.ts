function firstPalindrome(words: string[]): string {
  let firstPalindrom:string[] = [];
  words.forEach((v, i) => {
    if (v === v.split("").reverse().join("")) {
      firstPalindrom.push(v);
    }
  });
  return firstPalindrom[0] || "";
}
