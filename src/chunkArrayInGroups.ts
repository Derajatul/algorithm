const chunkArrayInGroups = (arr:number[], size:number) => {
  let newArr = []
  for(let i = 0;i< arr.length;i = i + size){
    newArr.push(arr.slice(0 + i,size + i))
  }
  return newArr
}

module.exports = chunkArrayInGroups