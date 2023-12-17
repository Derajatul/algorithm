export const findLongestWordLength = (str: string) => {
  const words = str.split(" ");
  let longestWord = words[0].length;
  words.forEach((x, i) => {
    if (x.length > longestWord) {
      longestWord = x.length;
    }
  });
  return longestWord;
};
