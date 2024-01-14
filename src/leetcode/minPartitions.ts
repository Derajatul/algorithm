function minPartitions(n: string): number {
  return Math.max(...n.split("").map((v: string) => Number(v)));
}
