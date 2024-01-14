function maxWidthOfVerticalArea(points: number[][]): number {
  const sortedX = points.map((v) => v[0]).sort((a, b) => a - b);
  let answer: number = 0;
  for (let i = 0; i < sortedX.length; i++) {
    if (sortedX[i + 1] - sortedX[i] > answer) {
      answer = sortedX[i + 1] - sortedX[i];
    }
  }
  return answer;
}
