const findElement = (arr:number[],func:(num:number) => number) => {
  for(let i = 0; i< arr.length;i++){
    if(func(arr[i])){
      return arr[i]
    }
  }
}
module.exports = findElement