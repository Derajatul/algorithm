export function countPositivesSumNegatives(input: any) {
    const positive = input.filter((num:number) => num > 0)
    const negative = input.filter((num:number) => num < 0)
    return Array(positive.length, negative.reduce((a:number,b:number) => a + b))
  }