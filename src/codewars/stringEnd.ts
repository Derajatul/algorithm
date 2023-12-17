function solution(str: string, ending: string) {
  return str.slice(str.length - ending.length) === ending;
}
