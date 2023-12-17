function lengthOfLastWord(s: string): number {
    return s.split(' ')[s.split(" ").length-1].length
};