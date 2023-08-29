const frankenSplice = (arr1:any[],arr2:any[],n:number) => {
  return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n))
}

module.exports = frankenSplice;