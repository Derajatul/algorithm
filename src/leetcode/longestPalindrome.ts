function longestPalindrome(s: string): string {
  let arr: any = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (s.slice(i, j) === s.slice(i, j).split("").reverse().join("")) {
        arr.push(s.slice(i, j));
      }
    }
  }
  return (
    arr.find(
      (k: any) => k.length === Math.max(...arr.map((v: any) => v.length))
    ) || ""
  ); 
}
