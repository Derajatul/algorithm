const factorialize = (num:number):number => {
  let value = 1
  for(let i = 1;i <= num;i++){
    value *= i;
  }
  return value
}
module.exports = factorialize