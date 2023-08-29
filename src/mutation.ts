const mutation = (arr) => {
  const [str1,str2] = arr
  const str2Bool= str2.toLowerCase().split('').map(e => str1.toLowerCase().split('').includes(e))
  return str2Bool.includes(false) ? false : true;
}

module.exports = mutation;