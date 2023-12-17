function runningSum(nums: number[]): number[] {
  let newArr:number[] = []
  nums.forEach((v,i) => {
    newArr.push(nums.slice(0,i + 1).reduce((p,c) => p + c))
  })
  return newArr
}

