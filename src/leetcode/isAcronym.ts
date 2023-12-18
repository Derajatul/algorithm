function isAcronym(words: string[], s: string): boolean {
  let bool = words.map((v, i) => v[0] === s[i]);
  let bool2 = s.split(" ").map((v, i) => v === words[i][0]);
  if (bool.includes(false) || bool2.includes(false)) {
    return false;
  } else {
    return true;
  }
}
const result = isAcronym(["hawikjbs","qi","ssvgttkzd"], "rornirdphvargyce");
result;
