function separateDigits(nums: number[]): number[] {
    return nums.join('').split('').map((v) => Number(v))
};