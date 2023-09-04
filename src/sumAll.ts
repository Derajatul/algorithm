const sumAll = (arr:number[]) => {
  let sum = 0
  const smallestNum = Math.min(...arr)
  const largestNum = Math.max(...arr)
  for(let i = smallestNum;i <= largestNum;i++){
    sum += i 
  }
  return sum
}
module.exports = sumAll