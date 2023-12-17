function isPalindrome(x: number): boolean {
    const reversedNum = Number(String(x).split('').reverse().join(''))
    return x === reversedNum
};