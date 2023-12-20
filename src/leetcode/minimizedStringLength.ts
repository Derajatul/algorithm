function minimizedStringLength(s: string): number {
    let removedDuplicate: string[] = []
    s.split('').forEach((v,i) => {
        if(removedDuplicate.includes(v)) return
        removedDuplicate.push(v)
    })
    return removedDuplicate.join('').length
};
