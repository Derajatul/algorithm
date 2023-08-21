function findLongestWordLength(str: string):number {
  const word = str.split(' ');
  let longestWord = 0
  for(let i = 0;i < word.length;i++){
    if(word[i].length > longestWord){
      longestWord = word[i].length
    }
  }
  return longestWord
}
module.exports = findLongestWordLength;