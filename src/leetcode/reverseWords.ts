function reverseWords(s: string): string {
  let reversed:string[] = []
  s.split(' ').forEach((v,i) => {
    reversed.push(v.split('').reverse().join(''))
  })
    return reversed.join(' ')
};

