function mostWordsFound(sentences: string[]): number {
    return Math.max(...sentences.map((v) => v.split(' ').length))
}

