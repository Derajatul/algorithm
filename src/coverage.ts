const destroyer = (arr,...initial) => {
  return arr.filter(e => !initial.includes(e));
}

module.exports = destroyer