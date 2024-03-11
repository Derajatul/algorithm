function reverseVowels(s: string): string {
  const vowels = s.match(/[aeiou]/gi);
  if (!vowels) {
    return s;
  }
  return s.replace(/[aeiou]/gi, () => vowels.pop()!);
}
console.log(reverseVowels("hello"));
