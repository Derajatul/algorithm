export function repeatStr(num: number, str: string): string {
  let repeatedArr: string[] = [];
  for (let i = 0; i < num; i++) {
    repeatedArr.push(str);
  }
  const repeatedStr: string = repeatedArr.join("");
  return repeatedStr;
}
