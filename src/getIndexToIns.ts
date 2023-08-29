const getIndexToIns = (arr: number[],num:number) => arr.filter(e => e < num).length

module.exports = getIndexToIns