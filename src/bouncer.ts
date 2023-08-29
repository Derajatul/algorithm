const bouncer = (arr:any[]) => {
  const newArr = arr;
  let trueValue = []
  newArr.map(e => e ? trueValue.push(e) : '')
  return trueValue
}

module.exports = bouncer