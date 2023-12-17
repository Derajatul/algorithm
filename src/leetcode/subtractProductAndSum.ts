function subtractProductAndSum(n: number): number {
  let sum: number = 0;
  let multiple: number = 1;
  for (let i = 0; i < String(n).split("").length; i++) {
    sum += Number(String(n).split("")[i]);
  }
  for (let i = 0; i < String(n).split("").length; i++) {
    multiple *= Number(String(n).split("")[i]);
  }
  return multiple - sum;
}

