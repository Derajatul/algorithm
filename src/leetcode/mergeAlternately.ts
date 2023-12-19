function mergeAlternately(word1: string, word2: string): string {
  const longest = [word1.length, word2.length];
  let merged: string[] = [];
  Array.from({ length: Math.max(...longest) }).map((v, i) => {
    merged.push(word1[i]);
    merged.push(word2[i]);
  });
  return merged.join('');
}
