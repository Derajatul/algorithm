function confirmEnding(str, target) {
  let word = str.split(' ')
  let lastWord = word[word.length - 1]
  let lastWordTarget = lastWord.substring(lastWord.length - target.length)
  if(lastWordTarget == target){
    return true
  } else {
    return false
  }
}
module.exports = confirmEnding; 