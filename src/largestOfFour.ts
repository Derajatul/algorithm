function largestOfFour(arr) {
  let result = []
  for(let i = 0; i < arr.length;i++){
    let longestNum = arr[i][0]
    for(let j = 1; j < arr[i].length;j++){
      if(arr[i][j] > longestNum){
        longestNum = arr[i][j]
      }
    }
    result[i] = longestNum
  }
  return result
}

module.exports = largestOfFour