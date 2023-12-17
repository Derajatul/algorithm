export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints;
}
