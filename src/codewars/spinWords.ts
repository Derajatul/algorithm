export function spinWords(words: string): string {
  const akhir = words
    .split(" ")
    .map((v: string) => v.split("").reverse().join(""))
    .slice(1)
    .join(" ");
  return words.split(" ")[0] + " " + akhir;
}
console.log(spinWords("Raw regnaD si tseb 2SP emag"));
