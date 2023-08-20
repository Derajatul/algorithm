const reverseString = (str:string):string => {
  return str.split('').reverse().join('')
}

module.exports = reverseString