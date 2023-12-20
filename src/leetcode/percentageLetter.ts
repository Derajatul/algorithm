function percentageLetter(s: string, letter: string): number {
  return Math.floor(s.split('').filter((v, i) => v.includes(letter)).length / s.split('').length * 100);
}

