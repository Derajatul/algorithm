function buildArray(nums: number[]): number[] {
    let newArr:number[] = []
    for(let i = 0; i < nums.length;i++){
        newArr.push(nums[nums[i]])
    }
    return newArr
}


