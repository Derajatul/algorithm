function numJewelsInStones(jewels: string, stones: string): number {
    return stones.split('').filter(i => jewels.includes(i)).length
}

