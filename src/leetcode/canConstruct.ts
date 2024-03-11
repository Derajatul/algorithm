function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineArr = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazineArr.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    }
    magazineArr.splice(index, 1);
  }
  return true;
}
console.log(canConstruct("aa", "ab"));
