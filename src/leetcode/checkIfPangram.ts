function checkIfPangram(sentence: string): boolean {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (sentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}
console.log(
  checkIfPangram(
    "tjxduizzcmcrgjqwmzvojnwfutnzusukjcxuiiiegqnhhueeyfmqaljccuzwhfmhdtlemzeisettjdoxfqzlilwuczzcaoaaesvyxdqijuthdidzmrkjwvctwdnckkzaunjxnzfiuduigsckyzwenxojczzsjhfjvfewcqejgkahhntsxlwjfrzaqmfulxqbcfvcfcxgnzslcrrsvjitmyfvigrelewacwekuoixmjvlmxecrtelaegsccwrvlslilkioeqsflyyujzxlifhoexyxjwwwjlhdjxmunxgbdquzmnaijbfrjughrcjnzyjsufeimmzqgfwzsgtcbfambqabnsrzfwcbehnfxhulvnulxdlbkylabrxikewjifkhftidbyvjshdhjsjghgekfraurvextvihrixrrdfoneovjgcggnjsmrdigjfomuljjlibwassiovmxdvriawdvhhxqjindviqgkkviymqmwoxlhwxnchowrxsfglrsglixvffetfauvgikjbmzmegevfcvcfyuieqvaannetoaaehhsgfoqvexeizeidverfmirgfivajmahobxmhbmrnucxtmsuhkubqtyskyrdzzjgahvofbzlfhlnsuaibasltkubaikbgatikzkebumqvcrncqntwqaktwmirlorvbdoogmyngibskoecemnkztuyxakvhbzfgsaibdrfnjblbnbnorixyxvixlaskttxunywjkheksfalvbflxjztnwhdnkrhtxkwfflnehdmcnygrjwcbjaoyvtnhhgcmtlabmuelglnjfkmskfwtjqummxurwaifklezbwqsfzamgdeqyegachukzxuzemzryygvwmbqkuazjnyxsdacdgiwatmgjwkzabnvubddmamgzjyrmrfalrszlqjkixe"
  )
);
