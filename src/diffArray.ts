const diffArray = (arr1:any[],arr2:any[]) => {
  const arrs = [...arr1,...arr2]
  return arrs.filter(a => !arr1.includes(a) || !arr2.includes(a))
}
module.exports = diffArray