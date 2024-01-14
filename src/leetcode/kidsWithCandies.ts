function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatestCandies = Math.max(...candies);
  return candies.map((v: number) => v + extraCandies >= greatestCandies);
}
