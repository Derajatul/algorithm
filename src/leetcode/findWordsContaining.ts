function findWordsContaining(words: string[], x: string): number[] {
  let include: any = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      include.push(i);
    }
  }
  return include;
}

